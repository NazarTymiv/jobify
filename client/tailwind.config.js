/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.5)'
      },
      colors: {
        accent: '#256CFE',
        black: '#111111',
        darkGray: '#17191F',
        grey: '#929292',
        semiGrey: 'rgba(146, 146, 146, 0.13)',
        lightGrey: '#F6F9FF',
        white: '#FAFAFA'
      }
    }
  },
  plugins: []
}
