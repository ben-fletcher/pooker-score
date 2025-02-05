import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ registerType: 'autoUpdate', manifest: {
      name: 'Pooker',
      short_name: 'Pooker',
      description: 'A simple pooker scorekeeper',
      theme_color: '#35654d',
      icons: [
        {
          src: 'pooker.png',
          sizes: '192x192',
          type: 'image/png',
        }
      ]
    } })
  ],
})
