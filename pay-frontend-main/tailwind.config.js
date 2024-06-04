const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      sky: "#0ea5e9",
      // voilet:'#8b5cf6',
      // fyuchia:'#d946ef',
      // emerald:'#10b981',
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      emerald: colors.emerald,
      cyan: colors.cyan,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      newblue: "#8E62F7",
      description: "#9b9a9c",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],

      montserrat: ["Montserrat"],
      satoshi: ["Satoshi", "sans-serif"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      colors: {
        "gradient-start": "#18D4A7",
        "gradient-mid": "#28DFBE",
        "gradient-end": "#12E55A",
        "gradient-start": "#ffffff",
        "gradient-end": "#ffffff",
        "gradient-start-btn": "#18D4A7",
        "gradient-end-btn": "#12E55A",
        "line-start": "#D3D7FC",
        "line-send": "#FF65B9",
        newwhite: "#8544f5",
        newStart: "#18D4A7",
        newMid: "#28DFBE",
        newEnd: "#12E55A",
      },
      boxShadow: {
        e8adff: "0 10px 40px #E8ADFF",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      strategy: "class",
    }),
  ],
});
