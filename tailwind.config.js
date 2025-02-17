/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        orange: '#ee885a',
        'orange-1': '#FAAF60',
        'orange-2': '#EE885A',
        'orange-3': '#FAE5CD',
        'orange-4': '#EEA15A',
        purple: '#997EA5',
        'dark-purple': '#20285C',
        'light-purple': '#C3B2CB',
        'light-green': '#ECF8EA',
        'gray-1': '#333333',
        'gray-2': '#F4F4F4',
        'green-2': '#27AE60',
        'green-3': '#6FCF97',
        'green-light': '#ECF8EA',
        'green-lighter': '#F0F9EE',
        'red-3': '#F57D7D',
        outline: '#5B5E8D',
        'outline-light': '#313570',
        navy: ' #313D91',
        'navy-dark': ' #20285C',
        'navy-darker': ' #17183A',
        'gray-dark': '#4B4848',
        'background-top': '#27327d',
        'yellow-1': '#FFD749',
      },
    },
  },
  plugins: [],
}
