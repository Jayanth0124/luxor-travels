/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxor: {
          50: '#FFFFFF',
          100: '#FAFAFA', 
          200: '#E5E5E5', 
          400: '#737373', 
          800: '#262626', 
          900: '#0A0A0A', 
          gold: '#C5A059', 
          goldHover: '#B08D4B',
        }
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'], 
        serif: ['"Cormorant Garamond"', 'serif'], 
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(0,0,0,0.08)', 
      },
      keyframes: {
        // Starts completely off-screen to the right, ends perfectly centered
        cinematicDrive: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        // 4 seconds total. 
        // The custom cubic-bezier (0.16, 1, 0.3, 1) is the secret to the "heavy/premium" deceleration.
        // 'forwards' ensures it remains permanently parked once finished.
        'cinematic-drive': 'cinematicDrive 4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }
    },
  },
  plugins: [],
}