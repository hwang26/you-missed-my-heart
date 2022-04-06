/** @type {import('next').NextConfig} */
const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT === "PROD";

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/you-missed-my-heart' : '', 
  assetPrefix: isProd ? '/you-missed-my-heart' : '' 
}

module.exports = nextConfig
