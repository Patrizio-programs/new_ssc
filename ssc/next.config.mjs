// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- This is the key change
  
  images: {
    unoptimized: true,
    domains: ["i.postimg.cc"],
  },
  trailingSlash: true,
};

export default nextConfig;
