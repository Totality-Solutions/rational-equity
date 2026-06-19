/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "http://192.168.1.12:3000",
    "http://localhost:3000",
  ],

  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.example.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },

  reactStrictMode: true,

  output: "standalone",
};

module.exports = nextConfig;