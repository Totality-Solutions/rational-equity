// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // MOVE IT HERE (Top Level)
  allowedDevOrigins: ["http://192.168.1.12:3000", "http://localhost:3000"],

  images: {
    qualities: [75, 100],
    dangerouslyAllowLocalIP: true,
   remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.example.com',
      pathname: '/**',
    },
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
  
  // Keep your other experimental settings if you have them, 
  // but remove allowedDevOrigins from here.
  experimental: {
    // allowedDevOrigins: [...] <--- DELETE THIS LINE FROM HERE
  } as any,

  reactStrictMode: true,
  turbopack: {
    resolveAlias: {}
  },
  output: "standalone",
};

export default nextConfig;