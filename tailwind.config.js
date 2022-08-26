/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './portfolio/Stunting-Dash.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#16a34a',
        secondary: "#1e293b",
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',

      },
    },
  },
  plugins: [],
}
