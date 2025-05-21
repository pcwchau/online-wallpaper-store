import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beshinegroup.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "**", // allow any path
        search: "",
      },
    ],
  },
};

export default nextConfig;
