// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
  },
  // Use "as any" to satisfy the TS compiler for experimental properties
  // experimental: {
  //   allowedDevOrigins: ["192.168.1.16"],
  // } as any,
   reactStrictMode: true,
   turbopack: {
    resolveAlias: {}
  },
  output: "standalone",
};

export default nextConfig;