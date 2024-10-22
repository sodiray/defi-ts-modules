import { createGMXClient } from './client'

export const makeGMX = () => {
  return createGMXClient({
    http: fetch
  })
}

export type GMX = ReturnType<typeof createGMXClient>
