import { makeGMX } from '@/backend/gmx'

const run = async () => {
  const gmx = makeGMX()

  const candles = await gmx.getCandles({
    symbol: 'SOL',
    timeframe: '15m'
  })

  return candles
}

run()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .then(console.log)
