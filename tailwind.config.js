/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  "darkMode": "class",
  theme: {
    extend: {
      animation: {
        spin: ' spin 1s linear 3s;'
    }
    },
  },
  plugins: [],
}

