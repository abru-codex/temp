/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["banglaspareparts.abrutech.online"],
  },
  //typescript no check
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
