import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  compress: true,

  poweredByHeader: false,

  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
    ],

    formats: ["image/avif", "image/webp"],

    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    minimumCacheTTL: 31536000,

    dangerouslyAllowSVG: true,

    contentDispositionType: "attachment",
  },

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|mp4|webm|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  experimental: {
    scrollRestoration: true,

    optimisticClientCache: true,
    optimizeCss: true,
    optimizePackageImports: [
      "react-datepicker",
      "axios",
      "swiper",
      "swiper/react",
      "react-icons",
      "react-icons/md",
      "react-icons/fa",
      "react-icons/io5",
      "react-icons/fi",
      "react-icons/lu",
      "react-icons/pi",
    ],
  },
};
export default nextConfig;
