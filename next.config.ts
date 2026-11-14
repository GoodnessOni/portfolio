import type { NextConfig } from "next";

// GitHub Pages serves the site from /portfolio. Set NEXT_PUBLIC_BASE_PATH="" once a custom domain is attached.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
