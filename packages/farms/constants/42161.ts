import { ethereumTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'NEBULA',
    lpAddress: '0x144F6D1945DC54a8198D4a54D4b346a2170126c6',
    quoteToken: ethereumTokens.weth,
    token: ethereumTokens.nebula,
  },
  {
    pid: 2,
    lpSymbol: 'NEBULA-ETH LP',
    lpAddress: '0x4cC09d7D8256435354358eb33c2104694Da4Dca5',
    quoteToken: ethereumTokens.weth,
    token: ethereumTokens.nebula,
  },
  {
    pid: 3,
    lpSymbol: 'NEBULA-USDC LP',
    lpAddress: '0xC3CF49451dcC526923D9CdB10D643A835A580EE4',
    quoteToken: ethereumTokens.usdc,
    token: ethereumTokens.nebula,
  },
  {
    pid: 4,
    lpSymbol: 'NEBULA-USDT LP',
    lpAddress: '0xd4a49EDBEa34E402C8F8a48A0ca4050E720657BF',
    quoteToken: ethereumTokens.usdt,
    token: ethereumTokens.nebula,
  },
  {
    pid: 5,
    lpSymbol: 'NEBULA-DAI LP',
    lpAddress: '0x69400756be6eDCaE85e37719D6C57e06918C43Cd',
    quoteToken: ethereumTokens.dai,
    token: ethereumTokens.nebula,
  },
  {
    pid: 6,
    lpSymbol: 'NEBULA-WBTC LP',
    lpAddress: '0xA5B392A152a7421a6347647BAE6E52bA9d6dcD6f',
    quoteToken: ethereumTokens.wbtc,
    token: ethereumTokens.nebula,
  },
  {
    pid: 7,
    lpSymbol: 'ETH-USDC LP',
    lpAddress: '0x357DbDb8F654BC8Dff53D1f258997BCDa596F5D8',
    quoteToken: ethereumTokens.weth,
    token: ethereumTokens.usdc,
  },
  {
    pid: 8,
    lpSymbol: 'ETH-USDT LP',
    lpAddress: '0x4dEA2772d2336C24A7a58Bb6D700A0bc96933c61',
    quoteToken: ethereumTokens.weth,
    token: ethereumTokens.usdt,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
