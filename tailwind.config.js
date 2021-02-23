module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          'now-now': '#464646'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
