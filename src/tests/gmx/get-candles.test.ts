import { createGMXClient } from '@/backend/gmx/client'
import { GMXCandlesResponse } from '@/backend/gmx/types'

describe('gmx.getCandles', () => {
  it('returns the candles from the response json body', async () => {
    const json: GMXCandlesResponse = {
      period: '1d',
      candles: [
        [new Date().getTime(), 10, 11, 8, 9],
        [new Date().getTime(), 10, 11, 8, 9],
        [new Date().getTime(), 10, 11, 8, 9],
        [new Date().getTime(), 10, 11, 8, 9]
      ]
    }
    const http = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(json)
      })
    )
    const gmx = createGMXClient({
      http: http as unknown as typeof fetch
    })
    const result = await gmx.getCandles({
      symbol: 'SOL',
      timeframe: '1d'
    })
    expect(result.candles).toEqual(json.candles)
  })
})
