import { createRaydiumClient } from './client'

export const makeRadyium = () => {
  return createRaydiumClient({
    http: fetch
  })
}

export type Raydium = ReturnType<typeof createRaydiumClient>
