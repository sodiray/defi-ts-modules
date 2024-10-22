import { makeGMX } from '@/backend/gmx'

const run = async () => {
  const gmx = makeGMX()

  const result = await gmx.exitPosition({
    amountToClose: 3.21,
    token: 'SOL'
  })

  return result
}

run()
  .then(console.log)
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
