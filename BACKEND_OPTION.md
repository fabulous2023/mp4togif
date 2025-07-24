# 后端处理方案（可选）

如果你决定需要后端处理大文件，这里是完整的实现方案：

## 🔧 后端实现

### 1. 安装依赖
```bash
npm install fluent-ffmpeg @types/fluent-ffmpeg
# 或者使用 ffmpeg.wasm 在 Cloudflare Workers 中
npm install @ffmpeg/ffmpeg @ffmpeg/core
```

### 2. API路由实现

#### 使用FFmpeg (Node.js环境)
```typescript
// app/api/convert-server/route.ts
import { NextRequest, NextResponse } from 'next/server';
import ffmpeg from 'fluent-ffmpeg';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const duration = Number(formData.get('duration')) || 5;
    const fps = Number(formData.get('fps')) || 10;
    const quality = Number(formData.get('quality')) || 0.8;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // 创建临时文件
    const tempId = uuidv4();
    const inputPath = join('/tmp', `${tempId}_input.mp4`);
    const outputPath = join('/tmp', `${tempId}_output.gif`);

    // 保存上传的文件
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(inputPath, buffer);

    // 使用FFmpeg转换
    await new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .outputOptions([
          '-t', duration.toString(),
          '-vf', `fps=${fps},scale=480:-1:flags=lanczos,palettegen=stats_mode=diff`,
          '-y'
        ])
        .output(outputPath)
        .on('end', resolve)
        .on('error', reject)
        .run();
    });

    // 读取生成的GIF
    const gifBuffer = await fs.readFile(outputPath);

    // 清理临时文件
    await Promise.all([
      unlink(inputPath).catch(() => {}),
      unlink(outputPath).catch(() => {})
    ]);

    return new Response(gifBuffer, {
      headers: {
        'Content-Type': 'image/gif',
        'Content-Disposition': `attachment; filename="${file.name.replace(/\.[^/.]+$/, '')}.gif"`
      }
    });

  } catch (error) {
    console.error('Conversion error:', error);
    return NextResponse.json(
      { error: 'Conversion failed' },
      { status: 500 }
    );
  }
}
```

#### 使用ffmpeg.wasm (Cloudflare Workers兼容)
```typescript
// app/api/convert-wasm/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const duration = Number(formData.get('duration')) || 5;
    const fps = Number(formData.get('fps')) || 10;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // 初始化FFmpeg
    const ffmpeg = createFFmpeg({
      log: false,
      corePath: 'https://unpkg.com/@ffmpeg/core@0.12.2/dist/ffmpeg-core.js',
    });

    await ffmpeg.load();

    // 写入输入文件
    ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(file));

    // 执行转换
    await ffmpeg.run(
      '-i', 'input.mp4',
      '-t', duration.toString(),
      '-vf', `fps=${fps},scale=480:-1:flags=lanczos`,
      '-f', 'gif',
      'output.gif'
    );

    // 读取输出文件
    const data = ffmpeg.FS('readFile', 'output.gif');
    const gifBlob = new Blob([data.buffer], { type: 'image/gif' });

    return new Response(gifBlob, {
      headers: {
        'Content-Type': 'image/gif',
        'Content-Disposition': `attachment; filename="${file.name.replace(/\.[^/.]+$/, '')}.gif"`
      }
    });

  } catch (error) {
    console.error('Conversion error:', error);
    return NextResponse.json(
      { error: 'Conversion failed' },
      { status: 500 }
    );
  }
}
```

### 3. 前端调用
```typescript
// 智能选择处理方式
const convertVideo = async (file: File, options: ConversionOptions) => {
  const maxClientSize = 50 * 1024 * 1024; // 50MB

  if (file.size <= maxClientSize) {
    // 使用前端处理
    return await clientSideConvert(file, options);
  } else {
    // 使用后端处理
    return await serverSideConvert(file, options);
  }
};

const serverSideConvert = async (file: File, options: ConversionOptions) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('duration', options.duration.toString());
  formData.append('fps', options.fps.toString());
  formData.append('quality', options.quality.toString());

  const response = await fetch('/api/convert-server', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Server conversion failed');
  }

  const blob = await response.blob();
  return URL.createObjectURL(blob);
};
```

## 🚀 部署配置

### Cloudflare Workers (推荐)
```toml
# wrangler.toml
[build]
command = "npm run build"

[env.production.vars]
FFMPEG_CORE_URL = "https://unpkg.com/@ffmpeg/core@0.12.2/dist/ffmpeg-core.js"
```

### Docker部署
```dockerfile
FROM node:18-alpine

# 安装FFmpeg
RUN apk add --no-cache ffmpeg

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Vercel部署
```json
// vercel.json
{
  "functions": {
    "app/api/convert-server/route.ts": {
      "maxDuration": 30
    }
  },
  "build": {
    "env": {
      "FFMPEG_PATH": "/usr/bin/ffmpeg"
    }
  }
}
```

## 📊 性能对比

| 方案 | 文件大小限制 | 处理速度 | 服务器负载 | 成本 |
|------|--------------|----------|------------|------|
| 前端处理 | ~100MB | 中等 | 无 | 免费 |
| 后端FFmpeg | 无限制 | 快 | 高 | 高 |
| 后端WASM | ~500MB | 慢 | 中等 | 中等 |

## 🎯 推荐策略

1. **默认使用前端处理** - 覆盖90%的用例
2. **大文件自动切换后端** - 提供完整功能
3. **显示处理方式** - 让用户了解当前使用的方法

这样既保持了简单的部署，又提供了完整的功能！
