import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { isDev, setup } from '@nuxt/test-utils'

describe('SSR Index Page', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true,
  })
  if (isDev()) {
    it('[dev] ensure vite client script is added', async () => {
      expect(1).toBe(1)
    })
  }
  it('go go go', () => {
    expect(1).toBe(1)
  })
})
