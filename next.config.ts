import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: isProd ? "/machoaraujotruckandfleetdetailing" : "",
  assetPrefix: isProd ? "/machoaraujotruckandfleetdetailing/" : "",
  images: { unoptimized: true },
  allowedDevOrigins: ["192.168.1.3"],
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/machoaraujotruckandfleetdetailing" : "",
  },
};

export default nextConfig;
