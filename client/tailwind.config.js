/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2EC4B6',
          50: '#E8FAF9',
          100: '#C5F2EF',
          200: '#8EE6E0',
          300: '#57D9D2',
          400: '#2EC4B6',
          500: '#23A99D',
          600: '#1A8D83',
          700: '#127068',
          800: '#0A534D',
          900: '#043532'
        },
        accent: {
          DEFAULT: '#E8431A',
          light: '#FF6B47',
          dark: '#C0340E'
        },
        neutral: {
          50: '#F9FAFB', 100: '#F3F4F6', 200: '#E5E7EB',
          300: '#D1D5DB', 400: '#9CA3AF', 500: '#6B7280',
          600: '#4B5563', 700: '#374151', 800: '#1F2937',
          900: '#111827', 950: '#0a0f1a'
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      }
    }
  },
  plugins: []
}
