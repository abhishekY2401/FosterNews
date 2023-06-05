
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['"Kanit", sans-serif'],
        playfair: ['"Playfair Display", serif'],
        lora: ['"Lora", serif'],
        quicksand: ['"Quicksand", sans-serif'],
        libre: ['"Libre Franklin", sans-serif']
      }
    },
  },
  plugins: [],
}

