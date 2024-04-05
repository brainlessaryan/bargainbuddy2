// next.config.js
const nextConfig = {
  output:"export",
  images: {
    remotePatterns: [{
      hostname: 'm.media-amazon.com',
    }],
  },
};

module.exports = nextConfig;
