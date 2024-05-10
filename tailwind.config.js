/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Poppins"],
        Raleway: ["Raleway"],
        Barlow: ["Barlow"],
      },
    },
  },
  plugins: [],
};
