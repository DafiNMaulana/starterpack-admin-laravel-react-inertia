/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/Components/*.jsx",
  ],
  theme: {
    extend: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
        }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#19191D",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#525158",
          "base-100": "#E3E3E3",
        },
      },
    ],
  },
}

