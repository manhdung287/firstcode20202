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
        }
      }
    },
  },  
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}