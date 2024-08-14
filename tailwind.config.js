/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        main : "#fafafa",
        secondary: "#151515",
      },
      fontFamily: {
        main: "norwester",
        secondary: "now",
      },
    },
  },
  plugins: [],
};
