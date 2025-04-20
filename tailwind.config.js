/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#303F60",
        secondary: "#CCE5FF",
        accent: "#9333EA",
        neutral: "#374151",
        success: "#36EA88",
        warning: "#FBBD23",
        error: "#FD0025",
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      
      gridTemplateColumns: {
        'auto':'repeat(auto-fill, minmax(190px, 1fr))'
      },

      backgroundImage:{
        'custom-gradient': 'linear-gradient(to right, #D523FA, #A24Ef3, #6682EC,#28BBE4)',
      }
    },
  },
  plugins: [],
}