import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        // Allow any HTTPS image (useful for pasting any URL)
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
