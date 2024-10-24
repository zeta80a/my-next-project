/** @type {import('next').NextConfig} */
// nextjsの外部画像読み込みの制限を回避する設定
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
};

export default nextConfig;
