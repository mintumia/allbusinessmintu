/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,vue,ts.html}",
    "./src/*.{js,vue,ts.html}",

  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

