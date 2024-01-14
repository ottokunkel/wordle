/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        greenFlip: 'animateGreenFlip .5s ease-in-out backwards',
        yellowFlip: 'animateYellowFlip .5s ease-in-out backwards',
        grayFlip: 'animateGrayFlip .5s ease-in-out backwards',
        textFlip: 'animateTextFlip .5s ease-in-out'
      },
      animationFillMode: {
        'backwards': 'backwards',
      },
      keyframes:{
        animateGreenFlip: {
          '0%': { 
            transform: 'rotateX(0deg)',
            backgroundColor: '#ffffff',
            border: 'solid',
            borderColor: '#878a8c',
            borderWidth: '2 rem',
            color: '#000000'
         },
         '50%': {
            backgroundColor: '#ffffff',
            borderWidth: '2 rem',
            color: '#000000'
        },
         '50.01%': {
            backgroundColor: '#6aa964',
            borderWidth: '0 rem',
            color: '#f8f8f8'
          },
          '100%': { 
            transform: 'rotateX(180deg)',
            backgroundColor: '#6aa964',
            color: '#f8f8f8',
          }
        },
        animateYellowFlip: {
          '0%': { 
            transform: 'rotateX(0deg)',
            backgroundColor: '#ffffff',
            border: 'solid',
            borderColor: '#878a8c',
            borderWidth: '2 rem',
            color: '#000000'
         },
         '50%': {
            backgroundColor: '#ffffff',
            borderWidth: '2 rem',
            color: '#000000'
        },
         '50.01%': {
            backgroundColor: '#c9b458',
            borderWidth: '0 px',
            color: '#f8f8f8'
          },
          '100%': { 
            transform: 'rotateX(180deg)',
            backgroundColor: '#c9b458',
            color: '#f8f8f8',
          }
        },
        animateGrayFlip: {
          '0%': { 
            transform: 'rotateX(0deg)',
            backgroundColor: '#ffffff',
            border: 'solid',
            borderColor: '#878a8c',
            borderWidth: '2 rem',
            color: '#000000'
         },
         '50%': {
            backgroundColor: '#ffffff',
            borderWidth: '2 rem',
            color: '#000000'
        },
         '50.01%': {
            backgroundColor: '#787c7e',
            borderWidth: '0 rem',
            color: '#f8f8f8'
          },
          '100%': { 
            transform: 'rotateX(180deg)',
            backgroundColor: '#787c7e',
            color: '#f8f8f8',
          }
        },
        animateTextFlip: {
          '0%': { 
            transform: 'rotateX(0deg)',

         },
          '100%': { 
            transform: 'rotateX(180deg)',
          }
        },
      },
      flexBasis: {
        '1/10': '10%',
        '2/10': '20%',
      },
    },
  },
  plugins: [],
}

