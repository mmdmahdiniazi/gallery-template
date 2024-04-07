/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/*.html"],
  theme: {
    extend: {
      fontFamily : {
        "iransans" : "iransans",
        "iransans-bold" : "iransans-bold",
        "iransans-light" : "iransans-light"
      },
      container : {
        center : "true",
        padding : "2rem"
      },
      spacing : {
        "22" : "5.5rem",
        "29" : "7.25rem",
        "70" : "17.5rem",
        "95" : "23.75rem"
      },
      colors : {
        "bgplayer" : "rgba(42, 42, 42, 0.4)",
      }
    },
  },
  plugins: [],
}

