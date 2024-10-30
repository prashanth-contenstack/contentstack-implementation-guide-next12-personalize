/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "eu-images.contentstack.com",
      },
    ],
  },
};

module.exports = nextConfig;
