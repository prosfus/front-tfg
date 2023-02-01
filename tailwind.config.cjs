/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#6620A2",
          light: "#9333EA",
          dark: "#0F172A",
        },
        secondary: {
          main: "#FF7E33",
        },
      },
    },
  },
  plugins: [],
};
