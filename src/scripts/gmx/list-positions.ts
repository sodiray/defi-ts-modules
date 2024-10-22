import { makeGMX } from '@/backend/gmx'

const run = async () => {
  const gmx = makeGMX()

  const positions = await gmx.listPositions({})

  return positions
}

run()
  .then(console.log)
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
