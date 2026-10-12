import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  experimental: {},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);