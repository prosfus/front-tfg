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
          gray2: "#D9D9D9",
        },
      },
      boxShadow: {
        purple: "0px 3px 5px #6620A2",
        orange: "0px 3px 5px #FF7E33",
      },
      backgroundImage: {
        pika: "url('/src/assets/pika-3.png')",
      },
      keyframes: {
        titleAnimation: {
          "0%": {
            height: "1000px",
            opacity: 0,
          },
          "40%": {
            height: "1000px",
            opacity: 0.05,
          },
          "100%": {
            opacity: 1,
            marginBottom: "0px",
          },
        },
        boxAnimation: {
          "0%": {
            marginTop: "1000px",
          },
          "30%": {
            marginTop: "1000px",
          },
          "100%": {
            marginTop: "0px",
          },
        },
      },
      animation: {
        titleAnimation: "titleAnimation 1s ease-in-out",
        boxAnimation: "boxAnimation 1.5s ease-out",
      },
    },
  },
  plugins: [],
};
