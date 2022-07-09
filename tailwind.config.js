/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
    extend: {
      colors: {
        'cream': 'hsl(30, 38%, 92%)',
        'background-white': 'hsl(0, 0%, 100%)',
        'Verydarkblue': 'hsl(212, 21%, 14%)',
        'Darkgrayishblue': 'hsl(228, 12%, 48%)',
        'Darkcyan': 'hsl(158, 36%, 37%)'
      }
    },
  },
  plugins: [],
}
