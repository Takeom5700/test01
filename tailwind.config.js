/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        // body: "#050505",
        bodyBG: "#F6F7F8",
        bodyText: "#000000",
        "selected-text": "#A3A3FF",
        theme: "#D3DEF1",
        secondary: "#000000",
        badge: "#D3DEF1",
        inputBorder: "#565666",
        input: "#F6F7F8",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },


      fontFamily: {
        Hiragino: ['Hiragino Sans','ヒラギノ角ゴシック','メイリオ','Meiryo','MS Ｐゴシック','MS PGothic','sans-serif','YuGothic','Yu Gothic',],
        MS: ['MS Ｐゴシック','MS PGothic','sans-serif'],
        Futura: ['Futura','MS PGothic','sans-serif'],
        Poppins: ['Poppins','sans-serif'],
      }
    },
  },
  plugins: [],
}
