const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      ... colors,
      background: 'var(--background-color)',
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      fade: 'var(--fade-color)',
      accent: 'var(--accent-color)',
    }
  },
  variants: {},
  plugins: []
}
