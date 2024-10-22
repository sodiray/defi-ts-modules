import { makeGMX } from '@/backend/gmx'

const run = async () => {
  const gmx = makeGMX()

  const order = await gmx.placeOrder({
    stopLoss: 2.21,
    takeProfit: 2.99,
    size: 32.501,
    entry: 'market',
    leverage: 25,
    position: 'long',
    token: 'SOL'
  })

  return order
}

run()
  .then(console.log)
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
