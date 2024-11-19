/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        hostname: productschool.com
      },
    ],
  },
  swcMinify: true
};

export default nextConfig;
