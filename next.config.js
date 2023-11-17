/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['zh-TW', 'en-US'],
    defaultLocale: 'zh-TW',
  },
  experimental: { nftTracing: true }
}

module.exports = nextConfig
