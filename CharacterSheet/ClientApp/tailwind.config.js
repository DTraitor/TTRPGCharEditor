/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'sheet': '2fr 4fr 5fr 5fr'
      },
      gridTemplateRows: {
        'sheet': '12fr 9fr 12fr 8fr 23fr 4fr 18fr'
      }
    },
  },
  plugins: [],
}
