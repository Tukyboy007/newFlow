/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'mn'], // Add your supported locales
    defaultLocale: 'en',   // Default locale
  },
};

export default nextConfig;
