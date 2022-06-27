/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        brandPink: '#FF79C6',
        brandLilac: '#B695F3',
        brandLightBlue: '#6272A4',
        brandDarkBlue: '#343746',
        brandDarkestBlue: '#282A36',
        brandCyan: '#81D8F7',
        brandWhite: '#F8F8F2',
        brandGrey: '#A8A8B3',
        brandAccentBlue: '#6272A4', 
        brandOrange: '#F4BB78',
      },
      fontFamily: {
        sans: 'Roc Grotesk, sans-serif',
        'serif': 'Roc Grotesk Condensed, sans-serif',
      },
    },
  },
  plugins: [], 
}
