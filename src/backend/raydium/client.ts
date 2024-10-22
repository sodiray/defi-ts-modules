import { ContractAddress, TokenSymbol } from '../model'
import { config } from '@/backend/config'

export const createRaydiumClient = ({  }: {  }) => {

  return {
    /**
    * Assume we're always using our main solana wallet in config module
    */
    swap: async ({
      giveTokenAmount,
      giveToken: tokenIn,
      getToken: tokenOut
    }: {
      /**
      * The amount of giveToken/tokenIn we'll give Raydium in
      * exchange for getToken/tokenOut
      */
      giveTokenAmount: number
      /**
      * The token to give to raydium in exchange for
      * the token we get back.
      *
      * NOTE: For some common tokens like USDC/SOL we can hardcode
      * the contract and look it up by the symbol ($SOL => aJs20x...)
      */
      giveToken: ContractAddress | TokenSymbol
      /**
      * The token we get back in exchange for the token
      * we gave to raydium.
      */
      getToken: ContractAddress | TokenSymbol
    }) => {
      // TODO: Implement exchange tokenIn for tokenOut via Raydium pool/contract
      return {}
    }
  }
}
