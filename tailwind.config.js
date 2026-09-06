/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '481px',
      'md': '768px',
      'lg': '1025px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        brand: {
          purple: "#7B3FE4",
          "purple-hover": "#692ED1",
          "purple-dark": "#1A0347",
          "purple-gradient-start": "#1C054D",
          "purple-gradient-mid": "#2B0B68",
          "purple-gradient-end": "#3B1187",
          "purple-light": "#F2EBFC",
          "purple-subtle": "#F6F2FD",
          bg: "#F8F9FD",
          "tab-bg": "#ECE8F8",
          "text-dark": "#161326",
          "text-muted": "#8A879D",
          "card-border": "#EAE7F5",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'watermelon': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleTap: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.26s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
