/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,vue,ts}",
              "./src/*.{html,js,vue,ts}",

    ],
    theme: {
        extend: {},
    },

    plugins: [require('@tailwindcss/forms')],
}
