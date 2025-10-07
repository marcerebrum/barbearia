/**
 * Tailwind CSS configuration - semantic color system for Barbearia
 * Colors: black, gold, white with semantic tokens (primary, background, surface, text, etc.)
 */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './layouts/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './plugins/**/*.{js,jsx,ts,tsx,vue}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Raw palettes
        black: {
          DEFAULT: '#0b0b0b',
          50: '#f5f5f5',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#aaaaaa',
          400: '#777777',
          500: '#444444',
          600: '#262626',
          700: '#141414',
          800: '#0f0f0f',
          900: '#080808',
        },
        gold: {
          50: '#fffaf5',
          100: '#fff3e0',
          200: '#ffe5b8',
          300: '#ffd680',
          400: '#ffbf47',
          500: '#e6a826',
          600: '#b57f1e',
          700: '#7f5a15',
          800: '#5a3f0f',
          900: '#38280a',
        },
        white: {
          DEFAULT: '#ffffff',
          100: '#f8f8f8',
          200: '#f1f1f1',
        },

        // Semantic tokens (use these throughout the UI)
        primary: {
          DEFAULT: '#e6a826', // gold 500
          50: '#fffaf5',
          100: '#fff3e0',
          200: '#ffe5b8',
          300: '#ffd680',
          400: '#ffbf47',
          500: '#e6a826',
          600: '#b57f1e',
          700: '#7f5a15',
        },
        'primary-foreground': '#0b0b0b', // text on primary (dark for gold)

        background: '#ffffff', // page background
        surface: '#ffffff', // cards, surfaces
        'surface-variant': '#f8f6f4',

        text: '#0b0b0b', // main text (black)
        'text-muted': '#6b6b6b',

        border: '#e6e1dc',
        muted: '#f3f2f1',

        accent: '#0b0b0b',
        success: '#16a34a',
      },
    },
  },
  plugins: [],
}
