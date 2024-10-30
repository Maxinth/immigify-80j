/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "bottom-sm": "0 2px 4px rgba(0, 0, 0, 0.1)",
        "bottom-md": "0 4px 8px rgba(0, 0, 0, 0.15)",
        "bottom-lg": "0 8px 16px rgba(0, 0, 0, 0.2)",
        "bottom-xl": "0 12px 24px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
