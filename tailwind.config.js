/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff9933',
        // Grayscale colors
        gray0: '#ffffff',
        gray100: '#f5f5f5',
        gray200: '#eeeeee',
        gray300: '#e0e0e0',
        gray400: '#bdbdbd',
        gray500: '#9e9e9e',
        gray600: '#757575',
        gray700: '#616161',
        gray800: '#424242',
        gray900: '#212121',
        // Meaningful colors
        red: '#f14452',
        green: '#01a262',
        'light-green': '#33ff99',
      },
      fontFamily: {
        LINE: ['LINE'],
        Sigmar: ['Sigmar', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
