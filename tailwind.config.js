
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary : '#a3666b',
        secondary :'#f8e9c2',
        third:'#e7e6e9',
        fourth:'#bbabae',
        colorfont: '#474748'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}