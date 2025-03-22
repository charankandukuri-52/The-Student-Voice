/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Optimize caching
  onDemandEntries: {
    // period in ms where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Optimize build performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@tabler/icons-react', 'lucide-react'],
  },
  // Disable image optimization in development for faster builds
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
}

module.exports = nextConfig 