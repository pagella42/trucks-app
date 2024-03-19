/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.dribbble.com',
        },
        {
          protocol: 'https',
          hostname: 'media.licdn.com',
        }
      ],
    },
};

export default nextConfig;