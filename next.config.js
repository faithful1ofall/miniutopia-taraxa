/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["ipfs.io", "miniutopia.infura-ipfs.io", "cloudflare-ipfs.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors
    ignoreDuringBuilds: true,
  },
};
