/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 3s infinite',
      },
      keyframes: {
         bounce: {
          '0%, 100%':{
            transform: 'translateY(-10%)',
          },
         '50%':{
            transform: 'translateY(0)',
          }
        }
      },
    },
  },
  plugins: [],
}