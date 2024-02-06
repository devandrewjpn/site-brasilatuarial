/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  basePath: '',
  typescript: {
    ignoreBuildErrors: true,
  },
  // assetPrefix: 'http://localhost:3000/atuarial/',
  assetPrefix: 'https://brasilatuarial.com.br/',
  images: {
    path: '/<basepath>/_next/image',
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brasilatuarial.com.br/',
        port: '',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig
