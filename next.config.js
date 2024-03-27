/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "dummyimage.com",
      "assets.naveenschoudhary.com",
      "res.cloudinary.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
