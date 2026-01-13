/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#0f0f0f',
        primary: '#ffffff',
        secondary: '#a3a3a3',
        accent: '#3b82f6',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        loading: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
