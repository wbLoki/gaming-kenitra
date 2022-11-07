/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        xl: "-1px 10px 20px 0px rgba(0,0,0,0.75)",
        md: "-1px 5px 10px 0px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
};
