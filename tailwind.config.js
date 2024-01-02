/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff9933',
          darker: '#cc6600',
          lighter: '#ffcc99',
        },
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
      spacing: {
        xsmall: '0.25rem',
        small: '0.5rem',
        DEFAULT: '1rem',
        large: '1.5rem',
        xlarge: '2rem',
        layout: '360px',
      },
      boxShadow: {
        small:
          '0px 1px 8px 0px #00000033; 0px 3px 3px 0px #0000001F; 0px 3px 4px 0px #00000024;',
        DEFAULT:
          '0px 5px 6px 0px #00000033; 0px 3px 16px 0px #0000001F;0px 9px 12px 0px #00000024;',
        large:
          '0px 11px 15px 0px #00000033; 0px 9px 46px 0px #0000001F; 0px 24px 38px 0px #00000024',
      },
      fontSize: {
        caption: [
          '0.625rem',
          { lineHeight: '1.125rem', letterSpacing: '0.021875rem' },
        ],
        base: {
          DEFAULT: ['1rem', '1.5rem'],
          small: ['0.875rem', '1.375rem'],
        },
        'heading-1': ['2rem', '2.5rem'],
        'heading-2': ['1.5rem', '2rem'],
        'heading-3': ['1.125rem', '1.625rem'],
      },
      radius: {
        DEFAULT: '0.7rem',
        small: '0.35rem',
        large: '1.05rem',
      },
      fontFamily: {
        sans: ['LINE'],
        logo: ['Sigmar', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
