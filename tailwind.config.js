/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#1D1F23",
        dark: "#151618",
        second: "#F6CD46",
        secondHover: "#E1B72E",
        lightWhite: "#E5E5E5",
      },
      fontFamily: {
        'black-ops': ['"Black Ops One"', 'cursive'],
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
        'chakra-petch': ['"Chakra Petch"', 'sans-serif'],
        'courgate': ['"Courgette"', 'cursive'],
      },
    },
  },
  plugins: [],
};