/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#192239',
        'hoverColor': '#FF7628',
        'counterColor': '#FEECC8',
        'bestsellingColor': '#CFA485',
      },
      backgroundImage: {
        'Bannerbg': "url('././src/assets/bannerbg.png')",
      },
      fontSize: {
        'mainHeading': '64px',
        'paraBanner': '22px',
        'counterText': '28px',
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        paprika: ['Paprika', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
        quick: ['Quicksand', 'sans-serif']
      },
      maxWidth: {
        'container': '1320px',
      }
    },
  },
  plugins: [],
}
