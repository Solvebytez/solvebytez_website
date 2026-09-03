import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Ai.html',
        destination: '/ai-automation',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/Digital Marketing.html',
        destination: '/digital-marketing',
        permanent: true,
      },
      {
        source: '/Augmented-reality.html',
        destination: '/mobile-apps',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
