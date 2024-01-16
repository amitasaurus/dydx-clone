/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dydx.trade',
      },
    ],
  },
};

module.exports = nextConfig;
