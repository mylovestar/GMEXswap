import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | GMEXSwap',
  defaultTitle: 'GMEXSwap',
  description:
    'Cheaper and faster than Uniswap? Discover GMEXSwap, the leading DEX on Binance Smart Chain with the best farms in DeFi.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@KronoSwapInfo',
    site: '@KronoSwapInfo',
  },
  openGraph: {
    title: 'GMEXSwap - A next evolution DeFi exchange on Binance Smart Chain',
    description:
      'The most popular AMM on Binance Smart Chain! Earn GMEX through yield farming, then stake it in Pools to earn more tokens!',
    images: [{ url: 'https://kronoswap.finance/images/knb.png' }],
  },
}
