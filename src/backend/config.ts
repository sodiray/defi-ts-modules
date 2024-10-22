export const config = {
  evm: {
    chain: process.env.EVM_CHAIN!,
    wallets: {
      main: {
        privateKey: process.env.WALLET_EVM_MAIN_PRI!,
        publicKey: process.env.WALLET_EVM_MAIN_PUB!
      }
    }
  },
  solana: {
    wallets: {
      main: {
        privateKey: process.env.WALLET_SOL_MAIN_PRI!,
        publicKey: process.env.WALLET_SOL_MAIN_PUB!
      }
    }
  }
}
