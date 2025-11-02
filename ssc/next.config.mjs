/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRUCIAL: Enables static HTML export, generating files into the 'out' directory
  output: 'export', 
  
  images: {
    // Highly Recommended: Disables built-in image optimization for static export
    unoptimized: true,
    domains: ["i.postimg.cc"],
  },
  
  // Recommended: Ensures consistent routing for static hosts
  trailingSlash: true,
};

export default nextConfig;
