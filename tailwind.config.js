/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html',
    './*.{html,js}',
    './**/*.{html,js}',

  ],
  theme: {
    extend: {

      colors: {
        'Nuetural': '#4C545D',
        'Nuetural2': '#9FABB2',
        'Primarycyan': '#26BAA4',
        'Primaryblue': '#6173FF',
      },


      fontFamily: {
        Bai: ['Bai Jamjuree',],
      },
      fontWeight: {
        thin: '400',
        bold: '600',
      }


    }
  },
  plugins: [require("tailwindcss")],
}

