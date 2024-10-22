export type GMXCandleTimeframe = '1m' | '5m' | '15m' | '1h' | '4h' | '1d'

// [date, enter, high, low, exit]
export type GMXCandle = [number, number, number, number, number]

export type GMXCandlesResponse = {
  period: GMXCandleTimeframe
  candles: GMXCandle[]
}
