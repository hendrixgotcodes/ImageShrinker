/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121D4C",
        secondary: "#CDA715",
        "gray-light": "#FAF8FF",
        "gray-dark": "#AAA",
        "gray-darker": "#E8E8E8",
      },
      width: {
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};
