/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/global.css",
  ],
  theme: {
    screens: {
      xs: '1px',
      sm: '769px',
      lg: '1440px',
    },
    colors: {
      'DarkGrey':" hsl(234, 29%, 20%)",
      'CharcoalGrey': "hsl(235, 18%, 26%)",
      'Grey': "hsl(231, 7%, 60%)",
      'White': "hsl(0, 0%, 100%)",
      'Tomato': "hsl(4, 100%, 67%)",
      'Orange': "#fe693f",
      'Pink': "#ff5478",
      'LightPink': "#ffe8e6"
    },
    extend: {
      fontFamily: {
        'Roboto': ["Roboto"],
      },
      fontSize: {
        'xs': "10px",
        'sm': "12px",
        'base': "16px",
        'lg': "25px",
        'xl': "30px",
        '2xl': "40px",
        '3xl': "50px",
      }
    },
  },
  plugins: [],
}

