module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'primary': '#fbeed1',
        'secondary': '#f3c8af',
        // 'secondary': {
        //   100: '#e2e2d5',
        //   200: '#888883'
        // }
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
};