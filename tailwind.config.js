/** @type {import('tailwindcss').Config} */

import tailwindcssScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'sans' : ['inter', 'sans-serif']
      },
    },
  },
  plugins: [tailwindcssScrollbar],
}