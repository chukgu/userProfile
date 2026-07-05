import type { Config } from 'tailwindcss';

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#08111f',
          900: '#0d1b2a',
          800: '#13243a',
          700: '#1b3555'
        },
        cream: '#f7f2e8',
        paper: '#fbfaf6',
        gold: {
          500: '#b99a5f',
          400: '#d4b06f',
          100: '#efe1c4'
        },
        ink: '#182231',
        muted: '#6d7480'
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'Pretendard', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 80px rgba(8, 17, 31, 0.10)'
      }
    }
  },
  plugins: []
} satisfies Config;
