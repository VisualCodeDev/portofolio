/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        main : "#ffff",
        secondary: "#000",
      },
      fontFamily: {
        main: "norwester",
        secondary: "now",
      },
    },
  },
  plugins: [],
};
