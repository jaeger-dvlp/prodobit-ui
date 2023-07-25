/** @type {import('tailwindcss').Config} */

const { ProdobitAppColors } = require('./src/theme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: { xs: '30em', sm: '48em', md: '64em', lg: '74em', xl: '90em' },
    extend: {
      colors: {
        ...ProdobitAppColors,
      },
    },
  },
  plugins: [],
};
