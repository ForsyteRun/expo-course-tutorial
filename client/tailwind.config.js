/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        WHITE: '#FFFFFF',
        PRIMARY: '#0075ff',
        GRAY: '#858585',
        BG_GRAY: '#d3d3d3',
      },
    },
  },
  plugins: [],
}

