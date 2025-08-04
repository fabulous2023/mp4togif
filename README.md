# MP4 to GIF Converter

A free online MP4 to GIF conversion tool that runs entirely in your browser. No file uploads required, ensuring complete privacy for your videos.

**Try it now: [https://mp4togif.pro](https://mp4togif.pro)**

## Features

- 100% client-side processing - no video uploads needed
- High-quality GIF output
- Customizable settings (framerate, quality, dimensions)
- Fast conversion
- No watermarks
- Completely free to use

## Why MP4toGIF.pro?

MP4toGIF.pro was created to provide a simple, private, and efficient way to convert video clips to GIFs. Whether you need animations for presentations, social media posts, or documentation, our tool makes the process quick and easy while respecting your privacy.

Visit [https://mp4togif.pro](https://mp4togif.pro) to convert your videos today!

## Technology Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- gif.js library for GIF generation
- FFMPEG for video processing

## Local Development

1. Clone the repository
```bash
git clone https://github.com/yourusername/mp4togif.git
cd mp4togif
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Visit http://localhost:3000 in your browser

## Building and Deployment

### Preview build locally
```bash
npm run preview
```

### Deploy to Cloudflare Pages

1. Login to Cloudflare
```bash
npm run cf:login
```

2. Build and deploy
```bash
npm run deploy
```

Alternatively, you can set up automatic deployments through the Cloudflare Pages dashboard:

1. Create a new project in the Cloudflare Pages dashboard
2. Connect your GitHub repository
3. Configure the following build settings:
   - Build command: `npm run build`
   - Output directory: `out`
   - Node.js version: 18

## Project Structure

- `/app` - Next.js application routes and pages
- `/components` - React components
- `/public` - Static assets, including gif.worker.js
- `/lib` - Utilities and helper functions

## License

MIT