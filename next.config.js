/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      '/': { page: '/index' },
    };
  },
};

module.exports = nextConfig;
