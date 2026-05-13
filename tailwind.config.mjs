/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#1e3360',
          800: '#152547',
          900: '#0d1b3e',
          950: '#060d1f',
        },
        gold: {
          DEFAULT: '#d4af37',
          light:   '#e8c84a',
          dark:    '#b89520',
        },
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(160deg, #060d1f 0%, #0d1b3e 45%, #1e3360 75%, #0d1b3e 100%)",
      },
    },
  },
  plugins: [],
};
