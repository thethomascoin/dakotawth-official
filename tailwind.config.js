/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        renoBlack: '#050505',
        renoGray: '#1a1a1a',
        neonRed: '#ff0000',
        dakotaSilver: '#e2e2e2',
      },
      fontFamily: {
        brutalist: ['Inter', 'system-ui', 'sans-serif'], // Heavyweight sans-serif
      },
      boxShadow: {
        'neon-glow': '0 0 15px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.3)',
      },
      animation: {
        'anti-gravity': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
