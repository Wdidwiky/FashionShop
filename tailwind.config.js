/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
<<<<<<< HEAD
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: '#1E1E1E',
      grey : '#8D8D8D',
      white : '#FFFFFF',
      secondGrey: '#F4F4F4',

    },

    fontFamily: {
      display: ['NOHEMI'],
      desc: ['Plus Jakarta Sans'],
      sans: ['ui-sans-serif', 'system-ui',],
    },

    container: {
      center: true,
    },

    fontSize:{
      base: '1.125rem',
      xxl: '2.125rem',
      title:'2rem',
    }

    
=======
    extend: {
      
      fontFamily: {
        dsc: ['Plus Jakarta Sans', 'sans-serif']
      },

    },
>>>>>>> wildan
  },
  plugins: [],
}

