/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 8s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'slide-up': 'slideUp 1s ease-out',
        'fade-in': 'fadeIn 1.5s ease-out',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.3), 0 0 60px rgba(236, 72, 153, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 50px rgba(236, 72, 153, 0.5), 0 0 100px rgba(139, 92, 246, 0.3)' 
          },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
