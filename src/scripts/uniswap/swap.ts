import { makeUniswap } from '@/backend/uniswap'

const run = async () => {
  const uniswap = makeUniswap()

  const result = await uniswap.swap({
    giveToken: 'ETH',
    getToken: 'USDC',
    giveTokenAmount: 100
  })

  return result
}

run()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .then(console.log)
