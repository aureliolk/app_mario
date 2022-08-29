/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pipe: 'pipe 5s linear infinite',
        jump: 'jump 1s linear'
      },
      keyframes: {
        jump:{
          '0%':{
            bottom: "0px"
          },
          '40%':{
            bottom: "150px"
          },
          '50%':{
            bottom: "150px"
          },
          '60%':{
            bottom: "150px"
          },
          '100%':{
            bottom: "0px"
          }
        },
        pipe: {
          "to": { 
            right: "100%"
           },
          'from': { 
            right: "0" 
          },
        }
      }
    },
  },
  plugins: [],
}