import { createUniswapClient } from '@/backend/uniswap/client'

// TODO: Implement real test

describe('uniswap.swap', () => {
  it('returns the result', async () => {
    const raydium = createUniswapClient({})
    const result = await raydium.swap({
      giveToken: 'SOL',
      getToken: 'USDC',
      giveTokenAmount: 250
    })
    expect(result).toEqual({})
  })
})
