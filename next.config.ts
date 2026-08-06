import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "192.168.100.50",
    "192.168.100.*",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
