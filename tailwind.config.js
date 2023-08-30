/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'blue-dark': '#1F2228',
      blue: '#3C3C4A',
      gray: '#C4CBDA',
      'dark-gray': '#9099AC',
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
