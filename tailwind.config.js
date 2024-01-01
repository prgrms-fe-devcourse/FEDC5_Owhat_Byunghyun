/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff9933',
        white: '#ffffff',
        black: '#212121',
        gray: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
        },
        error: '#f14452',
        success: '#01a262',
        online: '#33ff99',
      },
      fontFamily: {
        sans: ['LINE'],
        logo: ['Sigmar', 'sans-serif'],
      },
      animation: {
        beat: 'beat ease 0.3s forwards',
      },
    },
  },
  plugins: [],
};
