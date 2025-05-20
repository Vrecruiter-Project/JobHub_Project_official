/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textShadow: {
        bottom: '0 3px 4px rgb(0 0 0 / 67%)', // ← shadow goes downward
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const textShadow = theme('textShadow')
      const newUtilities = Object.entries(textShadow).reduce((acc, [key, value]) => {
        acc[`.text-shadow${key === 'DEFAULT' ? '' : `-${key}`}`] = {
          textShadow: value,
        }
        return acc
      }, {})
      addUtilities(newUtilities, ['responsive'])
    }
  ],
}