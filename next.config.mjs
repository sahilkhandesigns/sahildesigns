/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',

  allowedDevOrigins: ['192.168.1.8'],

  images: {
    unoptimized: true,
  },
};

export default nextConfig;