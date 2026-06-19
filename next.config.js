/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["http://192.168.1.12:3000", "http://localhost:3000"],

  images: {
    qualities: [75, 100],
    dangerouslyAllowLocalIP: true,
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

  experimental: {},
optimizeFonts: false,
  reactStrictMode: true,

  turbopack: {
    resolveAlias: {},
  },

  output: "standalone",
};

module.exports = nextConfig;