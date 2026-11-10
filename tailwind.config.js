import { createRequire } from 'module';
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

const require = createRequire(import.meta.url);


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "75%": { opacity: 0 },
          "90%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }
    },
  },
  plugins: [],
};
