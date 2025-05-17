import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true", 
});

/** @type {import('next').NextConfig} */
const nextConfig = bundleAnalyzer({
  typescript: {
    ignoreBuildErrors: true, 
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  poweredByHeader: false, 
  reactStrictMode: true, 
});

export default nextConfig;
