# MP4 到 GIF 转换器

这是一个免费的在线 MP4 到 GIF 转换工具，完全在浏览器中运行，无需上传文件到服务器，保证用户隐私。

## 功能特点

- 完全客户端处理，无需上传视频
- 高质量 GIF 输出
- 自定义设置（帧率、质量、尺寸等）
- 快速转换
- 无水印
- 免费使用

## 技术栈

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- gif.js 库用于 GIF 生成

## 本地开发

1. 克隆仓库
```bash
git clone https://github.com/yourusername/mp4togif.git
cd mp4togif
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 在浏览器中访问 http://localhost:3000

## 构建和部署

### 本地预览构建
```bash
npm run preview
```

### 部署到 Cloudflare Pages

1. 登录到 Cloudflare
```bash
npm run cf:login
```

2. 构建并部署
```bash
npm run deploy
```

或者，您可以通过 Cloudflare Pages 仪表板设置自动部署：

1. 在 Cloudflare Pages 仪表板中创建新项目
2. 连接您的 GitHub 仓库
3. 设置以下构建配置：
   - 构建命令: `npm run build`
   - 输出目录: `out`
   - Node.js 版本: 18

## 项目结构

- `/app` - Next.js 应用程序路由和页面
- `/components` - React 组件
- `/public` - 静态资源，包括 gif.worker.js
- `/lib` - 实用工具和辅助函数

## Cloudflare Pages 配置文件

- `public/_headers` - 设置 HTTP 头信息
- `public/_redirects` - 配置 URL 重定向规则
- `public/robots.txt` - 搜索引擎爬虫规则
- `public/sitemap.xml` - 站点地图

## 注意事项

- 确保 `gif.worker.js` 文件在 `/public` 目录中，这对于 GIF 转换功能至关重要
- 该项目使用静态导出模式，适合部署在 Cloudflare Pages 上
- 所有 API 路由已转换为静态文件

## 许可证

MIT
