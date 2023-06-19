/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-canvas-color': '#8eb1ae',
        'popular-card-color': '#839ca9',
        'dr-name-color': '#0f00e4',
        'featured-card-color': '#5d6a8a',
        'bookmark-color': '#187feb',
        'star-color': '#bd8e15',
        'header-color': '#1dc082',
      },
    },
  },
  plugins: [],
}

//https://tailwindcss.com/docs/customizing-colors#using-the-default-colors