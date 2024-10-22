import { createGMXClient } from '@/backend/gmx/client'

describe('gmx.placeOrder', () => {
  it('tbd: does what it should do', async () => {
    const http = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({})
      })
    )
    const gmx = createGMXClient({
      http: http as unknown as typeof fetch
    })
    const result = await gmx.placeOrder({
      stopLoss: 2.21,
      takeProfit: 2.99,
      size: 32.501,
      entry: 'market',
      leverage: 25,
      position: 'long',
      token: 'SOL'
    })
    // expect(result).toEqual(...)
  })
})
