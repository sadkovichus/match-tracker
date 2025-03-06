import type { NextConfig } from "next"
import path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Включаем поддержку styled-components
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@_pages": path.resolve(__dirname, "./src/_pages"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    }
    return config
  },
}

export default nextConfig
