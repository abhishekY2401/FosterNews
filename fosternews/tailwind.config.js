
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['"Kanit", sans-serif'],
        play: ['"Playfair", serif'],
        playfair: ['"Playfair Display", serif'],
        lora: ['"Lora", serif'],
        quicksand: ['"Quicksand", sans-serif'],
        libre: ['"Libre Franklin", sans-serif'],
        common: ['"Georgia,Cambria","Times New Roman","Times",serif']
      }
    },
  },
  plugins: [],
}

