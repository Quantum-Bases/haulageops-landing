import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Cloudflare Pages static build output generates in 'out' folder
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
