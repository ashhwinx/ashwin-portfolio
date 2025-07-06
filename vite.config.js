import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
        theme: {
          extend: {
            colors: {
              primary: {
                50: '#f0f9ff',
                100: '#e0f2fe',
                200: '#bae6fd',
                300: '#7dd3fc',
                400: '#38bdf8',
                500: '#0ea5e9',
                600: '#0284c7',
                700: '#0369a1',
                800: '#075985',
                900: '#0c4a6e',
              },
              gray: {
                50: '#f9fafb',
                100: '#f3f4f6',
                200: '#e5e7eb',
                300: '#d1d5db',
                400: '#9ca3af',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
                800: '#1f2937',
                900: '#111827',
                950: '#0f0f0f',
              },
              neon: {
                cyan: '#00ffff',
                pink: '#ff00ff',
                green: '#00ff88',
                purple: '#8b5cf6',
                blue: '#3b82f6',
              }
            },
            fontFamily: {
              sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
              'fade-in': 'fadeIn 0.5s ease-in-out',
              'slide-up': 'slideUp 0.5s ease-out',
              'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              'glow': 'glow 2s ease-in-out infinite alternate',
              'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
              fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
              },
              slideUp: {
                '0%': { transform: 'translateY(20px)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
              },
              glow: {
                '0%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' },
                '100%': { boxShadow: '0 0 30px rgba(255, 0, 255, 0.5)' },
              },
              float: {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-20px)' },
              },
            },
            backdropBlur: {
              xs: '2px',
            },
            perspective: {
              '1000': '1000px',
            }
          },
        },
        plugins: [],
      }
    })
  ],
})