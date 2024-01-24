import { CHAIN_IDS } from 'utils/wagmi'
import Bridge from '../views/Bridge'
import { SwapFeaturesProvider } from '../views/Swap/SwapFeaturesContext'

const BridgePage = () => {
  return (
    // <SwapFeaturesProvider>
      <Bridge />
    // </SwapFeaturesProvider>
  )
}

BridgePage.chains = CHAIN_IDS

export default BridgePage
