/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#C4CBDA',
      secondary: '#9099AC',
      'primary-bg': '#24272e',
      'secondary-bg': '#1f2228',
      'primary-brd': '#3C3C4A',
      active: '#31343d',
    },
    fontFamily: {
      sans: [
        'Poppins',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Arial',
        'sans-serif',
      ],
    },
  },
  plugins: [],
};
