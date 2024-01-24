import { ethereumTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'XKR',
    lpAddress: '0xAFFb6e5EDf035e42474a7541d96C3FBD5d372655',
    quoteToken: ethereumTokens.usdt,
    token: ethereumTokens.nebula,
    isTokenOnly: true
  },
  {
    pid: 1,
    lpSymbol: 'MATIC-USDT LP',
    lpAddress: '0x0C17f6885D61556764f2AD692B2A440317F2aDE3',
    quoteToken: ethereumTokens.weth,
    token: ethereumTokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'MATIC-XKR LP',
    lpAddress: '0xE2D54227645799744cA53070E5c65b70aa630Fce',
    quoteToken: ethereumTokens.weth,
    token: ethereumTokens.nebula,
  },
  {
    pid: 3,
    lpSymbol: 'XKR-USDT LP',
    lpAddress: '0x96EF9CC9c8e12909313F1fe65Ce46B0699fFD259',
    quoteToken: ethereumTokens.usdt,
    token: ethereumTokens.nebula,
  },
  {
    pid: 4,
    lpSymbol: 'KNB-USDT LP',
    lpAddress: '0xD9A41b76B32F37B1a955982E13B22D3bb6cf7569',
    quoteToken: ethereumTokens.knb,
    token: ethereumTokens.usdt,
  },
  {
    pid: 5,
    lpSymbol: 'KNB-XKR LP',
    lpAddress: '0x1627ea6298010Ca70B2a79B9cEaC95efa9E7fBC6',
    quoteToken: ethereumTokens.knb,
    token: ethereumTokens.nebula,
  },
  {
    pid: 6,
    lpSymbol: 'KNB-MATIC LP',
    lpAddress: '0x36Fd128df5EaAB39F15C2341ddfED6259E1704B3',
    quoteToken: ethereumTokens.weth,
    token: ethereumTokens.knb,
  },
  // {
  //   pid: 5,
  //   lpSymbol: 'NEBULA-DAI LP',
  //   lpAddress: '0x69400756be6eDCaE85e37719D6C57e06918C43Cd',
  //   quoteToken: ethereumTokens.dai,
  //   token: ethereumTokens.nebula,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'NEBULA-WBTC LP',
  //   lpAddress: '0xA5B392A152a7421a6347647BAE6E52bA9d6dcD6f',
  //   quoteToken: ethereumTokens.wbtc,
  //   token: ethereumTokens.nebula,
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'ETH-USDC LP',
  //   lpAddress: '0x357DbDb8F654BC8Dff53D1f258997BCDa596F5D8',
  //   quoteToken: ethereumTokens.weth,
  //   token: ethereumTokens.usdc,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'ETH-USDT LP',
  //   lpAddress: '0x4dEA2772d2336C24A7a58Bb6D700A0bc96933c61',
  //   quoteToken: ethereumTokens.weth,
  //   token: ethereumTokens.usdt,
  // },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
