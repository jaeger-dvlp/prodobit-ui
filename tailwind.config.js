/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        foundationgreen: [
          '#EEFCF9',
          '#DDF5F0',
          '#B6EDE0',
          '#8CE4D0',
          '#6CDDC2',
          '#59D8B8',
          '#4DD6B4',
          '#3EBD9E',
          '#32A88C',
          '#1C9278',
        ],
      },
    },
  },
  plugins: [],
};
