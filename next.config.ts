import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NAME: process.env.NAME,
  },
};

export default nextConfig;
