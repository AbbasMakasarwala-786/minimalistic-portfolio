import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output:'export',
  typescript:{
    ignoreBuildErrors:true,
  },
  eslint:{
    ignoreDuringBuilds:true,
  }
};
// next.config.js
module.exports = {
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
}
export default nextConfig;
