/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purp: "#903AFF",
        pinnk: "#D434FE",
        lightPink: "#FE34B9",
        dark: "#150E28;",
        glass: "rgba(217, 217, 217, 0.03)",
      },
      fontFamily: {
        clashDisplay: "ClashDisplay",
        uniOne: "Unica One",
      },
      // backgroundImage: {
      //   bgimg: "url(/src/images/bgImg.png)"
      // }
    },
  },
  plugins: [],
};
