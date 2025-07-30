/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 为 Cloudflare Pages 添加静态导出
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true, // 在静态导出模式下需要设置为 true
  },
  // 注意：在静态导出模式下，headers() 和 rewrites() 函数不会生效
  // 请使用 public/_headers 和 public/_redirects 文件来配置
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
