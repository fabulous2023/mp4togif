# 自动化部署选项

除了GitHub Actions，还有多种自动化部署方式可以选择：

## 1. Cloudflare Pages 直接集成 ⭐ (最推荐)

### 优势
- 零配置，最简单
- 自动构建和部署
- 免费SSL证书
- 全球CDN
- 预览部署（PR预览）

### 设置步骤
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 点击 "Workers & Pages" → "Create application" → "Pages"
3. 连接GitHub仓库
4. 配置构建设置：
   ```
   Build command: npm run build
   Build output directory: .next
   Root directory: (留空)
   Node.js version: 18
   ```
5. 添加环境变量：
   - `NEXT_PUBLIC_GA_ID`
   - `NEXT_PUBLIC_CLARITY_PROJECT_ID`
6. 部署完成！

### 特点
- 每次push自动部署
- PR自动创建预览环境
- 支持自定义域名
- 内置分析和监控

## 2. Vercel 部署

### 优势
- Next.js原生支持
- 极快的构建速度
- 自动优化
- 边缘函数支持

### 设置步骤
1. 访问 [vercel.com](https://vercel.com)
2. 连接GitHub仓库
3. 自动检测Next.js项目
4. 配置环境变量
5. 一键部署

### 配置文件
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "functions": {
    "app/api/convert/route.ts": {
      "maxDuration": 30
    }
  }
}
```

## 3. Netlify 部署

### 优势
- 简单易用
- 表单处理
- 身份验证
- 分支部署

### 设置步骤
1. 连接GitHub到Netlify
2. 配置构建设置：
   ```
   Build command: npm run build
   Publish directory: .next
   ```
3. 添加环境变量
4. 启用自动部署

### 配置文件
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 4. Railway 部署

### 优势
- 支持数据库
- 简单的环境管理
- 自动HTTPS
- 容器化部署

### 设置步骤
1. 连接GitHub到Railway
2. 选择仓库
3. 自动检测并部署
4. 配置环境变量

### 配置文件
```toml
# railway.toml
[build]
  builder = "nixpacks"

[deploy]
  startCommand = "npm start"
  restartPolicyType = "on_failure"
```

## 5. DigitalOcean App Platform

### 优势
- 容器化部署
- 数据库集成
- 负载均衡
- 监控和日志

### 设置步骤
1. 创建新App
2. 连接GitHub仓库
3. 配置构建和运行命令
4. 设置环境变量

### 配置文件
```yaml
# .do/app.yaml
name: mp4-to-gif
services:
- name: web
  source_dir: /
  github:
    repo: your-username/mp4togif
    branch: main
  run_command: npm start
  build_command: npm run build
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  envs:
  - key: NEXT_PUBLIC_GA_ID
    value: G-6SMYRH1XFR
```

## 6. AWS Amplify

### 优势
- AWS生态系统
- 全球CDN
- 自动扩展
- 丰富的AWS服务集成

### 设置步骤
1. 连接GitHub到Amplify
2. 配置构建设置
3. 添加环境变量
4. 部署

### 配置文件
```yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## 7. GitLab CI/CD

### 优势
- 内置CI/CD
- Docker支持
- 私有仓库
- 强大的流水线

### 配置文件
```yaml
# .gitlab-ci.yml
stages:
  - build
  - deploy

variables:
  NODE_VERSION: "18"

build:
  stage: build
  image: node:18
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - .next/
    expire_in: 1 hour

deploy:
  stage: deploy
  script:
    - npm install -g wrangler
    - wrangler deploy
  only:
    - main
```

## 8. 自建CI/CD (Jenkins/Docker)

### 优势
- 完全控制
- 自定义流程
- 私有部署
- 成本控制

### Docker部署示例
```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  mp4togif:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_GA_ID=G-6SMYRH1XFR
      - NEXT_PUBLIC_CLARITY_PROJECT_ID=sjfmsn5hnn
```

## 推荐选择指南

### 🥇 最佳选择：Cloudflare Pages
- 适合：大多数项目
- 优势：免费、快速、零配置

### 🥈 次佳选择：Vercel
- 适合：Next.js项目
- 优势：原生支持、极快构建

### 🥉 第三选择：GitHub Actions + Cloudflare Workers
- 适合：需要自定义流程
- 优势：灵活性高、完全控制

### 企业级：AWS Amplify / DigitalOcean
- 适合：大型项目
- 优势：企业级功能、高可用性

## 成本对比

| 平台 | 免费额度 | 付费起价 | 特点 |
|------|----------|----------|------|
| Cloudflare Pages | 无限制 | $0 | 最慷慨 |
| Vercel | 100GB带宽 | $20/月 | 适中 |
| Netlify | 100GB带宽 | $19/月 | 适中 |
| Railway | $5信用额度 | $5/月 | 按使用付费 |
| AWS Amplify | 1000构建分钟 | 按使用付费 | 企业级 |
