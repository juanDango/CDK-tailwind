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
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
