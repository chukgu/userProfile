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
          950: 'var(--color-navy)',
          900: 'var(--color-navy)',
          800: 'var(--color-ink-2)',
          700: 'var(--color-accent)'
        },
        cream: 'var(--color-paper-2)',
        paper: 'var(--color-paper)',
        gold: {
          600: 'var(--color-accent)',
          500: 'var(--color-accent)',
          400: 'var(--color-rule)',
          100: 'var(--color-paper-2)'
        },
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)'
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        display: ['var(--font-display)'],
        wordmark: ['var(--font-wordmark)']
      },
      boxShadow: {
        soft: '0 24px 80px color-mix(in srgb, var(--color-ink) 10%, transparent)'
      }
    }
  },
  plugins: []
} satisfies Config;
