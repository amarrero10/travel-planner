/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        almond: "#f6f0ed",
        sage: "#bbb193",
        skyblue: "#7ea8be",
        rose: "#c2948a",
        steelblue: "#28536b",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
