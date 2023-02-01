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
          gray: "#334155",
          nose: "#1E293B",
        },
      },
      boxShadow: {
        purple: "0px 3px 5px #6620A2",
        orange: "0px 3px 5px #FF7E33",
      },
    },
  },
  plugins: [],
};
