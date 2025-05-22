/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: '/merge',
        destination: '/merge_pdf',
        permanent: true,
      },
      {
        source: '/split',
        destination: '/split_pdf',
        permanent: true,
      },
      {
        source: '/compress',
        destination: '/compress_pdf',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
