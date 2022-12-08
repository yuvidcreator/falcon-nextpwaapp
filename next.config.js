/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  scope: '/',
  sw: 'sw.js',
  register: true,
  skipWaiting: true,
  fallbacks: {
    image: '/falcon-courier-logo.png',
    // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  // runtimeCaching,
})
// const runtimeCaching = require('next-pwa/cache')


const nextConfig = withPWA({
  env: {
    API_URL: process.env.FALCON_API,
    BACK_URL: process.env.BACKEND_URL,
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false, // disable powered by header.
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com','dummyimage.com','cdn.tailgrids.com', 'fancytailwind.com'],
  },
  output: 'standalone',
})

module.exports = nextConfig
