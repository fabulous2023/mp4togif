# MP4 to GIF Converter

A modern web application for converting MP4 videos to GIF format, built with Next.js and deployed on Cloudflare Workers. Features fast client-side conversion, privacy-focused design, and automatic CI/CD deployment.

🚀 **Live Demo**: [https://mp4-to-gif-pro.graceyoyo000.workers.dev](https://mp4-to-gif-pro.graceyoyo000.workers.dev)

✨ **Auto-deployment enabled** - Every push to master automatically deploys to Cloudflare Workers!

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with modern design system
- **shadcn/ui** components
- **Responsive design** for mobile and desktop
- **SEO optimized** with structured data
- **Analytics integration** (Google Analytics 4, Microsoft Clarity)
- **Client-side conversion** for privacy and speed
- **Cloudflare Workers** deployment for global performance
- **Automatic CI/CD** with GitHub Actions
- **Compliance pages** (Privacy Policy, Cookie Policy, Terms of Service)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: Cloudflare Workers with OpenNext
- **CI/CD**: GitHub Actions
- **Validation**: Zod schemas
- **Analytics**: Google Analytics 4, Microsoft Clarity
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mp4togif
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx
   NEXT_PUBLIC_ADSENSE_ID=ca-pub-xxxxxxxxxx
   NEXT_PUBLIC_SITE_URL=https://unmatchedego.org
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (convert, sitemap, robots, health)
│   ├── about/             # About page
│   ├── cookies/           # Cookie policy page
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of service page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage with converter
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── AnalyticsScripts.tsx
│   ├── Footer.tsx
│   ├── GifConverter.tsx   # Main MP4 to GIF converter
│   ├── Header.tsx
│   └── MobileNav.tsx
├── lib/                  # Utility functions
│   └── utils.ts
├── types/                # TypeScript type definitions
│   └── gif.d.ts          # GIF.js type definitions
└── public/               # Static assets
    ├── gif.worker.js     # GIF.js worker script
    ├── favicon.svg
    └── manifest.json
```

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx
NEXT_PUBLIC_ADSENSE_ID=ca-pub-xxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://mp4togif.pro
```

### Conversion Settings

The GIF converter supports the following options:
- **Duration**: 1-10 seconds (default: 5 seconds)
- **Quality**: 0.1-1.0 (default: 0.8)
- **FPS**: 5-30 frames per second (default: 10)
- **Max file size**: 100MB input limit

## 🎨 Design System

The website uses a modern, clean design system with:

- **Colors**: Apple's color palette (blue, green, indigo, etc.)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Consistent spacing and border radius
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first approach

## 📱 Mobile Optimization

- **Responsive grid**: Adapts to all screen sizes
- **Touch-friendly**: Large tap targets and gestures
- **Performance**: Optimized images and lazy loading
- **Navigation**: Collapsible mobile menu
- **Game iframe**: Responsive aspect ratio

## 🔍 SEO Features

- **Meta tags**: Dynamic title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured data**: JSON-LD for search engines
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions

## 📊 Analytics

The website includes:

- **Google Analytics 4**: Page views, events, conversions
- **Microsoft Clarity**: User session recordings
- **Custom events**: Game starts, video views
- **Privacy compliant**: Lazy loading and opt-out options

## 🚀 Deployment

### Cloudflare Workers (Recommended)

#### Automatic Deployment with GitHub Actions

1. **Push your code** to GitHub
2. **Configure GitHub Secrets** (see [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md))
3. **Every push to main/master** automatically deploys

#### Manual Deployment

1. **Login to Cloudflare**:
   ```bash
   npx wrangler login
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

For detailed deployment instructions, see [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md).

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks
- `npm run preview` - Preview with Cloudflare Workers runtime
- `npm run deploy` - Deploy to Cloudflare Workers
- `npm run deploy:production` - Deploy to production environment
- `npm run deploy:preview` - Deploy to preview environment

### Code Quality

- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting with Tailwind plugin
- **TypeScript**: Type checking and IntelliSense
- **Husky**: Git hooks for quality checks (optional)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Support

For support and questions:

- **Email**: support@unmatchedego.org
- **Issues**: GitHub Issues
- **Documentation**: This README and inline comments
