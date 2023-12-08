/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        purple: "#44417e",
        pink: "#dc7672",
        orange: "#f3c381",
        cream: "#fdf3e6",
        gray: "#000000b3",
        blue: "#44417E",
        yellow: "#F3C381",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        schoolbell: ["Schoolbell", "cursive"],
      },
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      xxxxl: "900px",
      md: "1060px",
      lg: "1200px",
      xxxl: "1320px",
      xxl: "1400px",
      xl: "1700px",
    },
  },
  plugins: [],
};
