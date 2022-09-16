/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: "300px",
        // => @media (min-width: 300px) { ... }
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {},
      container: {
        center: true,
      },
    },
    // fontFamily: {
    //   "title-font": ["Merriweather", "serif"],
    // },
  },
  plugins: [require("@tailwindcss/forms")],
};
