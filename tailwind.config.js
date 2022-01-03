module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        gray:{
          'header':'#262626',
        },
        purple:{
          'base':'var(--main)'
        },
        gray:{
          'base':'var(--gray)'
        },
      }
    },
  },  
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}