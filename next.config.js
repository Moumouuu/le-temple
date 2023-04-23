/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "*.googleusercontent.com",
      },
    ],
}
}

module.exports = nextConfig
