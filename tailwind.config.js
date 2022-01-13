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
        dark: "#1B1E2A",
        secondary: "#262D3A",
        purple: {
          "sidebar-active": "#AB52F3",
          "banner-1": "#6763FD",
          "banner-2": "#B84EF1",
        },
      },
    },
  },
  plugins: [],
};
