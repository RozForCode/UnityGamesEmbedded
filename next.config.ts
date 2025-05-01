import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: false,
  async headers() {
    return [
      {
        source: '/Take-Over/Build/(.*)\\.br', 
        headers: [
          {
            key: 'Content-Encoding',
            value: 'br',
          },
        ],
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
