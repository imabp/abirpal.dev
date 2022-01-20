const tailwindcss = require("tailwindcss");
const defaultTheme = require("tailwindcss/defaultTheme");
const { spacing, fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  // mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      galaxyfold: "280px",
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
      white: "#FFFFFF",
      primaryhover: "#EC839C",
      secondaryhover: "#ECECEC",
      accenthover: "#636363",
      purplecustom: "#A74CEF",
      redcustom: "#EF4C87",
      orangecustom: "#EF7D4C",
      greencustom: "#00742E",
      "lang-bg-typescript": "#007ACC",
      "lang-bg-golang": "#00ACD7",
      "lang-bg-java": "#FB4B4C",
      "lang-bg-aws": "#F8992A",
      "lang-bg-reactjs": "#00D7FF",
      "lang-bg-nextjs": "#000000",
      "lang-bg-tailwindcss": "#111729",
      "lang-font-white": "#F8F8F8",
      "lang-font-black": "#000000",
      "lang-bg-detacloud": "#C72693",
      "lang-bg-cypress": "#575656",
      "lang-bg-docker": "#00D7FF",
      "lang-bg-owasp": "#FFFFFF",
      "lang-bg-terraform": "#844FBA",
    },
    fontSize: {
      fs14: "14px",
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
      backgroundImage: {
        "wave-pattern": "url('/system/vectors/wave.svg')",
        "snippet-card": "url('/system/vectors/quadrantPrimary.svg')",
        "layout-pattern": "url('/system/vectors/layoutPattern.svg')",
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        marquee2: "marquee2 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-98%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(98%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    require("@tailwindcss/typography"),
  ],
};
