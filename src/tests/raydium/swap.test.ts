import { createRaydiumClient } from '@/backend/raydium/client'

// TODO: Implement real test

describe('raydium.swap', () => {
  it('returns the result', async () => {
    const raydium = createRaydiumClient({})
    const result = await raydium.swap({
      giveToken: 'SOL',
      getToken: 'USDC',
      giveTokenAmount: 250
    })
    expect(result).toEqual({})
  })
})
