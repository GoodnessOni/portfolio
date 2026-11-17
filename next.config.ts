import type { NextConfig } from "next";

// Custom domain https://engrog.tech is served from the root, so NEXT_PUBLIC_BASE_PATH is empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
