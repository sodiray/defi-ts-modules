import { Duration } from 'durhuman'

export type Model =
  | 'user'
export type Id<M extends Model> = `0x_${M}_${string}`
export type UserRole = 'user' | 'admin' | 'partner'

export type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [key: string]: Json }

/**
 * Utility type used here to enforce that strings
 * being used in different modules can later be
 * validated (at compile time) to be the correct
 * string that's expected.
 *
 * PRO TIP: use sparingly
 */
declare const __brand: unique symbol
type _Brand<B> = { [__brand]: B }
type Brand<T, B> = T & _Brand<B>

export type ContractAddress = Brand<string, 'contract'>
export type TokenSymbol = 'SOL' | 'ETH' | 'BTC' | 'USDC'
export type Timeframe = '1m' | '5m' | '15m' | '1h' | '4h' | '1d'
