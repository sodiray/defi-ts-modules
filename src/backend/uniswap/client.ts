import { ContractAddress, TokenSymbol } from '../model'
import { config } from '@/backend/config'

// @docs from uniswap:
// https://docs.uniswap.org/sdk/v3/guides/swaps/trading

export const createUniswapClient = ({  }: {  }) => {

  return {
    /**
    * Assume we're always using our main evm wallet in config module
    */
    swap: async ({
      giveTokenAmount,
      giveToken: tokenIn,
      getToken: tokenOut
    }: {
      /**
      * The amount of giveToken/tokenIn we'll give Uniswap in
      * exchange for getToken/tokenOut
      */
      giveTokenAmount: number
      /**
      * The token to give to uniswap in exchange for
      * the token we get back.
      *
      * NOTE: For some common tokens like USDC/SOL we can hardcode
      * the contract and look it up by the symbol ($ETH => 0xh69s...)
      */
      giveToken: ContractAddress | TokenSymbol
      /**
      * The token we get back in exchange for the token
      * we gave to uniswap.
      */
      getToken: ContractAddress | TokenSymbol
    }) => {
      // TODO: Implement exchange tokenIn for tokenOut via Uniswap pool/contract
      return {}
    }
  }
}
