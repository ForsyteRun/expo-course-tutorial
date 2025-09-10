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
        RED: '#d9534f',   
        BG_RED: '#f5c6cb', 
        BLACK: "#000000",
        GREEN: "#24b351",
        LIGHT_GREEN: "#dbffdd",
      },
    },
  },
  plugins: [],
}

