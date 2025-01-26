/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-move': 'gradientMove 3s ease-in-out infinite', // Adjust the duration as needed
      },
      keyframes: {
        gradientMove: {
          '0%': {
            backgroundPosition: '-200% 0', // Start the gradient off the left side
          },
          '100%': {
            backgroundPosition: '200% 0', // Move the gradient to the right
          },
        },
      },
    },
  },
  plugins: [],
}

