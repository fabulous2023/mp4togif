# Quick Start Guide

## 🚀 Get MP4 to GIF Converter Running in 5 Minutes

### 1. Prerequisites
- Node.js 18.17.0+ installed
- Git installed
- GitHub account
- Cloudflare account (free tier works)

### 2. Local Setup
```bash
# Clone and setup
git clone <your-repo-url>
cd mp4togif
npm install

# Start development
npm run dev
```

### 3. Test Cloudflare Preview
```bash
# Test local Cloudflare Workers runtime
npm run preview
```

### 4. Deploy to Cloudflare

#### Option A: Automatic CI/CD (Recommended)
1. Push code to GitHub
2. Get Cloudflare API token: https://dash.cloudflare.com/profile/api-tokens
3. Add GitHub Secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `NEXT_PUBLIC_GA_ID`
   - `NEXT_PUBLIC_CLARITY_PROJECT_ID`
4. Push to main branch → Auto deploy! 🎉

#### Option B: Manual Deploy
```bash
# Login to Cloudflare
npx wrangler login

# Deploy
npm run deploy
```

### 5. Verify Deployment
- Check Cloudflare Workers dashboard
- Test your live URL
- Monitor analytics

## 🔧 Troubleshooting

### Windows Users
If you get ESM module errors:
- Use WSL (recommended)
- Or ensure `@opennextjs/cloudflare` is version 1.5.2

### Build Errors
```bash
# Check dependencies
npm ci

# Type check
npm run type-check

# Lint check
npm run lint
```

### Deployment Issues
- Verify API token permissions
- Check Account ID is correct
- Review Cloudflare dashboard logs

## 📚 Next Steps
- Read [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md) for detailed setup
- Customize the app for your needs
- Set up custom domain in Cloudflare
- Monitor performance and analytics
