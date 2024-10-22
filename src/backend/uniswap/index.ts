import { createUniswapClient } from './client'

export const makeUniswap = () => {
  return createUniswapClient({
    http: fetch
  })
}

export type Uniswap = ReturnType<typeof createUniswapClient>
