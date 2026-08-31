import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sapelanding',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
