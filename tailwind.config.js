/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pt_serif: ["PT Serif", "serif"],
        poppins: ["Poppins", "sans-serif"],
        league: ["League Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
