import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/machoaraujotruckandfleetdetailing" : "",
  assetPrefix: isProd ? "/machoaraujotruckandfleetdetailing/" : "",
  images: { unoptimized: true },
  allowedDevOrigins: ["192.168.1.3"],
};

export default nextConfig;
