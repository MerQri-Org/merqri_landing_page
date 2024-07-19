/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#F2800A",
      secondary: "#21243D",
      text_color: "1E1E1E",
      White: "rgba(255, 255, 255)",
      card: '#EBEAEA'
    },

    fontFamily: {
      lato: ["Lato", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
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
};
export const plugins = [];
