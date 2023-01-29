/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        screens: {
          "645px": {
            "max": "645px"
          },
          "530px": {
            "max": "530px"
          },
          "410px": {
            "max": "410px"
          }
        },
        colors: {
          "main": "#cd412b",
          "light-gray": "#c5c5c5"
        }
      },
    },
    plugins: [],
  }