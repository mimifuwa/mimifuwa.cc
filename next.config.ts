import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["camo.githubusercontent.com", "localhost"],
    dangerouslyAllowSVG: true,
  },
  output: "export",
};

export default nextConfig;
