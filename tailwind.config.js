/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purp: "#903AFF",
        pinnk: "#D434FE",
        dark: "#150E28;",
        glass: "rgba(217, 217, 217, 0.03)"
      },
      boxShadow: {
        myshadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      }
      // backgroundImage: {
      //   bgimg: "url(/src/images/bgImg.png)"
      // }
    },
  },
  plugins: [],
}