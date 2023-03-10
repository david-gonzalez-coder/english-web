/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows:{
        layout: "repeat(4, 23vh)"
      },
      gridAutoRows: {
        layout: 'minmax(12vh, auto)',
      },
   
    },
  },
  plugins: [],
}
