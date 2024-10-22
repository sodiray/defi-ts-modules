import { Timeframe, TokenSymbol } from '../model'
import { GMXCandlesResponse } from './types'
// As needed, add imports

// Add to dependencies as needed to keep third party
// or other modules injectable so client can be easily
// unit tested
export const createGMXClient = ({
  http
}: {
  http: typeof fetch
}) => {
  // As needed, create shared resources or
  // shared functions
  // _placeDeposit = async () => { ... }

  /**
  * Gets the latest candles for a given token symbol in
  * the given timeframe.
  */
  const getCandles = async ({
    symbol,
    timeframe
  }: {
    symbol: TokenSymbol
    timeframe: Timeframe
  }) => {
    const params = new URLSearchParams({
      tokenSymbol: symbol,
      period: timeframe
    })
    const response = await http(
      `https://arbitrum-api.gmxinfra.io/prices/candles?${params}`
    )
    return (await response.json()) as GMXCandlesResponse
  }

  /**
   * When called, the function should place an order, using the given
   * arguments, with the GMX V2 contract and return an identifier for
   * the order.
   *
   * @note using https://gmx-docs.io/docs/api/contracts-v2#creating-an-order
   *
   * @returns an order object that just has an id
   */
  const placeOrder = async (order: {
    stopLoss: number
    takeProfit: number
    size: number
    entry: 'market' | number
    leverage: number
    position: 'short' | 'long'
    token: 'SOL' | 'ETH' | 'BTC'
  }) => {
    // TODO: Place order with GMX contract onchain
    return {
      order: {
        id: 'TODO'
      }
    }
  }

  /**
   * When called, the function should get a list of all the currently
   * open positions fro the GMX V2 contract and return them.
   *
   * @returns a list of positions
   */
  const listPositions = async ({}: {}) => {
    // TODO: List orders from GMX contract onchain
    return {
      positions: [] // TODO
    }
  }

  /**
   * When called, the function should close out a position that's currenlty
   * open.
   *
   * @note using https://gmx-docs.io/docs/api/contracts-v2#creating-an-order
   */
  const exitPosition = async (args: {
    amountToClose: number
    token: 'SOL' | 'ETH' | 'BTC'
  }) => {
    // TODO: Exit position with GMX contract onchain
  }

  return {
    getCandles,
    placeOrder,
    listPositions,
    exitPosition
  }
}
