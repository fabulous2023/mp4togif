# Unmatched Ego Website

A professional Next.js website for Unmatched Ego - a fast-paced 3v3 third-person soccer showdown. Features modern design, SEO optimization, and excellent mobile responsiveness with real game integration.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with Apple-inspired design system
- **shadcn/ui** components
- **Responsive design** for mobile and desktop
- **SEO optimized** with structured data
- **Analytics integration** (Google Analytics 4, Microsoft Clarity)
- **Game integration** with CrazyGames platform
- **Video embeds** for YouTube, TikTok, and X
- **MDX content** for advanced strategies
- **Compliance pages** (Privacy Policy, Cookie Policy)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Content**: MDX with next-mdx-remote
- **Validation**: Zod schemas
- **Analytics**: Google Analytics 4, Microsoft Clarity
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd unmatched-ego-website
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
│   ├── api/               # API routes (sitemap, robots)
│   ├── cookies/           # Cookie policy page
│   ├── privacy/           # Privacy policy page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── AnalyticsScripts.tsx
│   ├── GameFrame.tsx
│   ├── MobileNav.tsx
│   └── VideoEmbed.tsx
├── config/               # Configuration files
│   └── game.config.ts    # Main game configuration
├── content/              # MDX content files
│   └── strategy.mdx      # Advanced strategy content
├── lib/                  # Utility functions
│   └── utils.ts
└── public/               # Static assets
    ├── favicon.svg
    └── manifest.json
```

## ⚙️ Configuration

### Game Configuration

All website content is managed through `/config/game.config.ts`:

- **Site information**: Name, description, keywords
- **Game details**: Name, tagline, iframe URL
- **Guide content**: Controls, objectives
- **Tips and strategies**: Top 5 tips list
- **Video content**: YouTube, TikTok, X video embeds

### Content Management

- **Short content**: Managed in `game.config.ts`
- **Long content**: MDX files in `/content/` directory
- **Type safety**: Zod schemas for validation

## 🎨 Design System

The website uses an Apple-inspired design system with:

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

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** automatically on push to main branch

### Other Platforms

The website can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy `out/` folder
- **AWS Amplify**: Connect repository and auto-deploy
- **DigitalOcean**: Use App Platform with Node.js

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

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
