/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#080808", // Raycast Dark
        card: "#131313",       // Raycast Card
        border: "#242424",     // Raycast Border
      },
      borderRadius: {
        '3xl': '24px',
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite", // <-- Добавлено
      },
      keyframes: {
        meteor: { // <-- Добавлено
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}