/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      success: colors.green,
      primary: colors.blue,
      red: colors.red,
      white: colors.white
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
