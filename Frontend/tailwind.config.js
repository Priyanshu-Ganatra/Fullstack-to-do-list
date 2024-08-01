/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'segoe': ['"Segoe UI"', 'sans-serif'],
      },
      colors: {
        'background': '#1C1919',
      },
    },
  },
  plugins: [
    daisyui
  ],
}
