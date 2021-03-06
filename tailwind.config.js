const typography = require("tailwindcss-typography");
const filters = require("tailwindcss-filters");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textShadow: {
      // defaults to {}
      default: "0 2px 5px rgba(0, 0, 0, 0.5)",
      lg: "0 2px 10px rgba(0, 0, 0, 0.5)",
      "text-glow": "0 2px 10px rgba(0, 0, 0, 0.5)",
    },
    extend: {
      spacing: {
        22: "5.5rem"
      },
      colors: {
        "main-text": "#FFFFFD",
        "grad-1": "#E94A44",
        "redhead": "#E95A44",
        "grad-2": "#E97F44",
        "input-inactive": "#727272"
      },
      fontSize: {
        "h3": ["1rem", {
          lineHeight: "1.25rem"
        }]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    typography({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      kerning: true, // whether to generate kerning utilities
      textUnset: true, // whether to generate utilities to unset text properties
      componentPrefix: "c-", // the prefix to use for text style classes
    }),
    filters,
  ],
};
