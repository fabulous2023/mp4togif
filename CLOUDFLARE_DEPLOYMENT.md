# MP4 to GIF Cloudflare Deployment Guide

This guide explains how to deploy the MP4 to GIF converter to Cloudflare Workers/Pages with automatic CI/CD.

## Prerequisites

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Wrangler CLI globally (optional):
   ```bash
   npm install -g wrangler
   ```

3. Login to Cloudflare:
   ```bash
   npx wrangler login
   ```

## Development

### Local Development
For regular development, use the Next.js development server:
```bash
npm run dev
```

### Preview with Cloudflare Runtime
To test your app in the Cloudflare Workers runtime locally:
```bash
npm run preview
```

## Manual Deployment

### Deploy to Cloudflare Workers
```bash
npm run deploy
```

## Automatic CI/CD Setup

### 1. GitHub Repository Setup

Make sure your code is pushed to a GitHub repository.

### 2. Cloudflare API Token Setup

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Use "Custom token" template
4. Set permissions:
   - Account: Cloudflare Workers:Edit
   - Zone: Zone:Read
   - Account: Account:Read
5. Copy the generated token

### 3. GitHub Secrets Configuration

In your GitHub repository, go to Settings > Secrets and variables > Actions, and add:

- `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare Account ID (found in dashboard)
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (G-6SMYRH1XFR)
- `NEXT_PUBLIC_CLARITY_PROJECT_ID` - Microsoft Clarity Project ID (sjfmsn5hnn)

### 4. Automatic Deployment

Once configured, every push to the main/master branch will automatically:
1. Build the Next.js application
2. Generate OpenNext bundle
3. Deploy to Cloudflare Workers

## Configuration Files

- `wrangler.toml` - Cloudflare Workers configuration
- `open-next.config.ts` - OpenNext adapter configuration
- `.github/workflows/deploy.yml` - GitHub Actions CI/CD pipeline
- `.env.local` - Environment variables (not committed to git)

## Environment Variables

The following environment variables are configured:

- `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID
- `NEXT_PUBLIC_CLARITY_PROJECT_ID` - Microsoft Clarity project ID

## Troubleshooting

### Windows Compatibility Issues

If you encounter ESM module loading errors on Windows:

1. Use WSL (Windows Subsystem for Linux) for better compatibility
2. Or ensure you're using `@opennextjs/cloudflare` version 1.5.2 instead of 1.6.0

### Build Issues

If the build fails:

1. Check that all dependencies are installed: `npm ci`
2. Verify Node.js version is 18.17.0 or higher
3. Ensure TypeScript compilation passes: `npm run type-check`
4. Check ESLint configuration if linting fails

### Deployment Issues

If deployment fails:

1. Verify Cloudflare API token has correct permissions
2. Check that Account ID is correct
3. Ensure wrangler.toml configuration is valid
4. Check Cloudflare dashboard for error logs

## Performance Monitoring

After deployment, monitor:
- Load times and Core Web Vitals
- Error rates in Cloudflare dashboard
- Usage analytics through Google Analytics
- User behavior through Microsoft Clarity

## Useful Commands

- `npm run dev` - Start local development server
- `npm run build` - Build Next.js application
- `npm run preview` - Preview with Cloudflare runtime locally
- `npm run deploy` - Deploy to Cloudflare Workers
- `npm run type-check` - Check TypeScript types
- `npm run lint` - Run ESLint
- `npx wrangler tail` - View real-time logs from deployed worker
- `npx wrangler dev` - Alternative local development with Cloudflare runtime
