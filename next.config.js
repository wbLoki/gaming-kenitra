/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.giantbomb.com",
        port: "",
        pathname: "/a/uploads/**",
      },
    ],
    domains: ["localhost"],
  },
};
