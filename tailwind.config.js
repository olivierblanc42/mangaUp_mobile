/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: [], remplacer par :
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
