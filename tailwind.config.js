/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      // Add your custom styles here
      addUtilities({
        '.m-center': {
          'margin': '0 auto',
        },
        '.bg-edit-gray': {
          'backgroundColor': '#151515',
        }
      });
    }),
  ],
}

