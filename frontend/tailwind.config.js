/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wilton: {
          navy: "#0A1F44",
          blue: "#2AACE2",
          pink: "#1E1E2F",
          gray: "#BA8FA3"
        }
      }
    },
  },
  plugins: [],
}

