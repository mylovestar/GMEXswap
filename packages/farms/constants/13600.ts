import { kronobitTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'XKR',
    lpAddress: '0xA40583E4D0F1b4E23A5d5Bce0c52029761600E60',
    quoteToken: kronobitTokens.usdt,
    token: kronobitTokens.nebula,
    isTokenOnly: true
  },
  {
    pid: 1,
    lpSymbol: 'MATIC-USDT LP',
    lpAddress: '0xB08f0Ae747E51D32373DA690406294dF436f4e98',
    quoteToken: kronobitTokens.matic,
    token: kronobitTokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'MATIC-XKR LP',
    lpAddress: '0x234A8Ab3310DcA28dcF436E3994F2E59d5Ba412d',
    quoteToken: kronobitTokens.matic,
    token: kronobitTokens.nebula,
  },
  {
    pid: 3,
    lpSymbol: 'XKR-USDT LP',
    lpAddress: '0x4bf8bc8714860EBBC90c856B69018108502f8B8B',
    quoteToken: kronobitTokens.usdt,
    token: kronobitTokens.nebula,
  },
  {
    pid: 4,
    lpSymbol: 'KNB-USDT LP',
    lpAddress: '0xaFdC5B48Be347C4c6f64854C4240f476797F3314',
    quoteToken: kronobitTokens.weth,
    token: kronobitTokens.usdt,
  },
  {
    pid: 5,
    lpSymbol: 'KNB-XKR LP',
    lpAddress: '0x8C2947c972299321c020366388715d22300B7648',
    quoteToken: kronobitTokens.weth,
    token: kronobitTokens.nebula,
  },
  {
    pid: 6,
    lpSymbol: 'KNB-MATIC LP',
    lpAddress: '0x72b9c48d7c4600762B99f8d994A5F66f7e51dD95',
    quoteToken: kronobitTokens.weth,
    token: kronobitTokens.matic,
  },
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
