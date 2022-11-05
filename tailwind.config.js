/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html',"./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding : '16px'
    },
    extend: {
      colors:{
        primary : '#379683',
        bg :  '#5CDB95',
        textPrimary : '#05386B',
        textSecondary: '#EDF5E1'
      },
      screens:{
        '2xl' : '1320px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
