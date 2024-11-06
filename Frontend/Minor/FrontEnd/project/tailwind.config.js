/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'hsla(240, 100%, 60%, .45)',
          lighter: 'hsla(240, 100%, 70%, .45)',
          lightest: 'hsla(240, 100%, 80%, .45)',
          DEFAULT: 'hsla(240, 100%, 50%, .45)',
          dark: 'hsla(240, 100%, 40%, .45)',
          darker: 'hsla(240, 100%, 30%, .45)',
          darkest: 'hsla(240, 100%, 20%, .45)',
        },
      },
    },
  },
  plugins: [],
};
