import { colors } from "./src/styles/colors";
import { fontFamily } from "./src/styles/fontFamily";
import { spacing } from "./src/styles/spacing";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily,
      spacing,
    },
  },
  plugins: [],
};
