/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0fdfa',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
        accent: {
          blue: '#38bdf8',
          green: '#22c55e',
        },
        dark: {
          primary: '#0b1020',
          secondary: '#0f1724',
        }
      },
      boxShadow: {
        'custom': '0 4px 18px rgba(2,6,23,0.08)',
        'custom-lg': '0 8px 32px rgba(2,6,23,0.12)',
      },
      borderRadius: {
        'custom': '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.45s cubic-bezier(0.22, 0.9, 0.35, 1)',
        'slide-up': 'slideUp 0.35s cubic-bezier(0.22, 0.9, 0.35, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
