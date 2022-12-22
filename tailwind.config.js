/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartanRegular: ['SPARTAN-REGULAR'],
        spartanMedium: ['SPARTAN-MEDIUM'],
        spartanSemiBold: ['SPARTAN-SEMIBOLD'],
        spartanBold: ['SPARTAN-BOLD'],
      },
      colors: {
        'pw-blue': '#000C24',
        'pw-light': '#FBFBFB',
        'pw-orange': '#F44336',
        'pw-grey': '#928A97'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
