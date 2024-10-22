import { makeRadyium } from '@/backend/raydium'

const run = async () => {
  const raydium = makeRadyium()

  const result = await raydium.swap({
    giveToken: 'SOL',
    getToken: 'USDC',
    giveTokenAmount: 250
  })

  return result
}

run()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .then(console.log)
