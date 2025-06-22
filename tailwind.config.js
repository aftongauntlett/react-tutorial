/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        header: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};