import type { NextConfig } from "next";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

// Configura el entorno de desarrollo para Cloudflare
if (process.env.NODE_ENV === "development") {
  setupDevPlatform();
}

const nextConfig: NextConfig = {
  // Requerido para Cloudflare Pages
  output: "standalone",
  images: {
    // Allow images from external sources
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
        // Allow any HTTPS image (useful for pasting any URL)
        hostname: "**",
      },
    ],
    // Cloudflare no soporta Image Optimization API nativo
    // Las imágenes ya están optimizadas desde Cloudinary
    unoptimized: true,
  },
};

export default nextConfig;
