import { ChainId, ERC20Token } from '@pancakeswap/sdk'

export const CAKE_MAINNET = new ERC20Token(
  ChainId.BSC,
  '0xE9d78BF51ae04c7E1263A76ED89a65537B9cA903',
  9,
  'GMEX',
  'Game Coin',
  'https://pancakeswap.finance/',
)

export const NEBULA_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xAFFb6e5EDf035e42474a7541d96C3FBD5d372655',
  18,
  'XKR',
  'XKR Token',
  'https://kronoswap.finance/',
)

export const NEBULA_KNB = new ERC20Token(
  ChainId.BSC,
  '0xE9d78BF51ae04c7E1263A76ED89a65537B9cA903',
  18,
  'XKR',
  'XKR Token',
  'https://kronoswap.finance/',
)

export const KNB = new ERC20Token(
  ChainId.ETHEREUM,
  '0x864285774ca1249B0FB6E48F823E02C5D252DA8E',
  18,
  'KNB',
  'Qbit Networks',
  'https://kronobit.org/',
)

export const CAKE_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0xFa60D973F7642B748046464e165A65B7323b0DEE',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const USDC_BSC = new ERC20Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  6,
  'USDC',
  'USD Coin',
)

export const USDC_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDT_BSC = new ERC20Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_KNB = new ERC20Token(
  ChainId.KRONOBIT,
  '0x4609Ebb1D32d7FD7d3792f2c67CD9E4195b8ca65',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_BSC = new ERC20Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const DAI_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  18,
  'DAI',
  'Dai Stablecoin',
  'https://makerdao.com/',
)

export const BUSD_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, ERC20Token> = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.KRONOBIT]: BUSD_ETH,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
}

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
}

export const NEBULA = {
  [ChainId.BSC]: NEBULA_KNB,
  [ChainId.ETHEREUM]: NEBULA_ETH,
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.GOERLI]: USDC_GOERLI,
}

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.ETHEREUM]: USDT_ETH,
}

export const MATIC_KNB = new ERC20Token(
  ChainId.BSC,
  '0xc2b546a4931135Ead999d3d0766B3F03Ba126941',
  18,
  'MATIC',
  'Matic Token',
)

export const WBTC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
  8,
  'WBTC',
  'Wrapped BTC',
)

export const ETHER_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  18,
  'ETH',
  'Ether',
)

export const KNB_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x864285774ca1249B0FB6E48F823E02C5D252DA8E',
  18,
  'KNB',
  'Qbit Networks',
)
