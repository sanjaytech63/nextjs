import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.pixabay.com','cdn.rareblocks.xyz','pagedone.io','ucarecdn.com','cdn.sanity.io'],
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  /* config options here */
};

export default nextConfig;
