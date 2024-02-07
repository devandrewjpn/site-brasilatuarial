/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  trailingSlash: true,
  basePath: '',
  typescript: {
    ignoreBuildErrors: true,
  },
  // assetPrefix: 'http://localhost:3000/',
  assetPrefix: 'https://devandrew.com.br/atuarial',
  images: {
    path: '/<basepath>/_next/image',
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'devandrew.com.br/',
        port: '',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig
