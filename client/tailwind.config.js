/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#256CFE',
        black: '#111111',
        darkGray: '#17191F',
        grey: '#929292',
        lightGrey: '#F6F9FF',
        white: '#FAFAFA'
      }
    }
  },
  plugins: []
}
