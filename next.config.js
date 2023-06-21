/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      '/': { page: '/index' }, 
    };
  },
  trailingSlash: true, 
};


module.exports = nextConfig;
