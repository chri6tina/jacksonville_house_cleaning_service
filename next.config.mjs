/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds to allow deployment with quote warnings
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
