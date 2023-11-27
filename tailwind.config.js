/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        organisation: "url('src/assets/background/bg_1.png')",
        program: "url('src/assets/background/bg_3.png')",
        enrollment: "url('src/assets/background/bg_2.png')",
      },
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
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
