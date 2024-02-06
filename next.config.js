/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  basePath: '/atuarial',
  typescript: {
    ignoreBuildErrors: true,
  },
  // assetPrefix: 'http://localhost:3000/atuarial/',
  assetPrefix: 'http://devandrew.com.br/atuarial/',
  images: {
    path: '/<basepath>/_next/image',
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'devandrew.com.br/',
        port: '',
        pathname: '/atuarial/**',
      },
    ],
  }
}

module.exports = nextConfig
