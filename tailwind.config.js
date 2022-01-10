const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", ...fontFamily.sans],
      },
      colors: {
        primary: {
          400: "#00E0F3",
          500: "#00c4fd",
        },
        dark: "#333333",
      },
    },
  },
  plugins: [],
};
