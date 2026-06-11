import withNextIntl from 'next-intl/plugin'

const nextConfig = withNextIntl('./src/i18n/request.ts')({
  experimental: {
    optimizePackageImports: ['next-intl'],
  },
})

export default nextConfig
