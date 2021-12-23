const defaultTheme = require("tailwindcss/defaultTheme");
const { spacing, fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      iphones: "320px",
      iphonex: "375px",
      ipad: "744px",
      ipadpro: "1000px",
      desktop: "1024px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#E86383",
      secondary: "#F8F8F8",
      accent: "#2C2C2C",
      primaryhover: "#EC839C",
      secondaryhover: "#ECECEC",
      accenthover: "#636363",
      purplecustom: "#A74CEF",
      redcustom: "#EF4C87",
      orangecustom: "#EF7D4C",
      greencustom: "#A3F960",
    },
    fontSize: {
      fs18: "18px",
      fs24: "24px",
      fs35: "35px",
      fs44: "44px",
      fs50: "50px",
      fs64: "64px",
    },
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
