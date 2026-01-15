import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permitir imágenes de fuentes externas
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        // Permitir cualquier imagen HTTPS
        hostname: "**",
      },
    ],
    // Las imágenes ya están optimizadas desde Cloudinary
    unoptimized: true,
  },
};

export default nextConfig;
