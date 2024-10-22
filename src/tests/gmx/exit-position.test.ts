import { createGMXClient } from '@/backend/gmx/client'

describe('gmx.exitPosition', () => {
  it('tbd: does what it should do', async () => {
    const http = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({})
      })
    )
    const gmx = createGMXClient({
      http: http as unknown as typeof fetch
    })
    const result = await gmx.exitPosition({
      amountToClose: 3.21,
      token: 'SOL'
    })
    // expect(result).toEqual(...)
  })
})
