module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'blue': '#0C062F',
      'orange':'#FF9900',
      'neutral':'#828282',
      'yellow':'#FFEB99',
      'ftcolor':'#2B2924'
    },
    extend: {
      fontFamily:{
        'nunito':['Nunito']
      },
      screens: {
        'phone':'480px',

        'tablet': '700px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
