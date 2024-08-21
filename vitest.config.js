import { defineConfig, mergeConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    coverage: {
        exclude: [
            ...configDefaults.exclude,
            "**/*.config.js",
            "**/main.jsx",
            "**/PWABadge.jsx",
            "**/tests/**",
            "**/*.cjs"
        ]
    }
  },
}))