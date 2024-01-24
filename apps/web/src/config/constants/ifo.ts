import { ERC20Token, ChainId } from '@pancakeswap/sdk'
import { bscTokens, ethereumTokens } from '@pancakeswap/tokens'
import { CAKE_BNB_LP_MAINNET } from './lp'
import { Ifo } from './types'

export const cakeBnbLpToken = new ERC20Token(ChainId.BSC, CAKE_BNB_LP_MAINNET, 18, 'CAKE-BNB LP')

const ifos: Ifo[] = [
  {
    id: 'nebula',
    address: '0xC7d259712a26fa33a9a94cFB58964a67dAB27095',
    isActive: true,
    name: 'NEBULA',
    plannedStartTime: 1685448000, // Mon Jan 16 2023 12:00:00 UTC
    poolBasic: {
      raiseAmount: '$350,000',
    },
    poolUnlimited: {
      raiseAmount: '$1,050,000',
    },
    currency: bscTokens.cake,
    token: ethereumTokens.nebula,
    campaignId: '512100000',
    articleUrl:
      'https://pancakeswap.finance/voting/proposal/0x06598b682d9f33ec5ea0c2acf8eba13dea7c63fa08dd2c4dfd7bc7af16920d51',
    tokenOfferingPrice: 0.04,
    version: 3.2,
    twitterUrl: 'https://twitter.com/ESPL_GLOBAL',
    description:
      'The Esports Players League (ESPL) Arena is a platform that hosts global Esports tournaments and coordinates different aspects such as setting of tournament parameters, score-keeping, prize pool payouts via crypto and more.',
    vestingTitle: 'Use $ARENA to enjoy premium features on ESPL’s Esports tournament platform',
  },
  {
    id: 'bs',
    address: '0xD8b4eabE2f7E8F20dfFE81EF3De151F081472462',
    isActive: true,
    name: 'BankSwap Token ($BS)',
    poolBasic: {
      saleAmount: '2,000,000 $BS',
      raiseAmount: '1,300,000 WCRO',
      cakeToBurn: '$375,000',
      distributionRatio: 0.3,
    },
    // poolUnlimited: {
    //   saleAmount: '875,000 BS',
    //   raiseAmount: '$2,500,000',
    //   cakeToBurn: '$1,250,000',
    //   distributionRatio: 0.7,
    // },
    currency: ethereumTokens.usdc,
    token: ethereumTokens.nebula,
    // releaseBlockNumber: 7707736,
    campaignId: '511110000',
    articleUrl: 'https://medium.com/@crobank/bankpad-ifo-1-bankswap-token-2a966c34aeda',
    tokenOfferingPrice: 0.65,
    version: 2,
  },
]

export default ifos
