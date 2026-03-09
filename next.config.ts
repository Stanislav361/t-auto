import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "via.placeholder.com" },
      { protocol: "https", hostname: "ram-as-production.up.railway.app" },
      { protocol: "https", hostname: "www.t-auto.online" },
      { protocol: "https", hostname: "t-auto.online" },
    ],
  },
  env: {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  },
};

export default nextConfig;
