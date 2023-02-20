/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
      container: {
        // you can configure the container to be centered
        center: true,

        // or have default horizontal padding
        padding: '1rem',

        // default breakpoints but with 40px removed
        screens: {
          sm: '700px',
          md: '850px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px',
        }
        },
         screens: {
              'sm': '640px',
              // => @media (min-width: 640px) { ... }

              'md': '769px',

              'lg': '1025px',
              // => @media (min-width: 1024px) { ... }

              'xl': '1280px',
              // => @media (min-width: 1280px) { ... }

              '2xl': '1536px',
              // => @media (min-width: 1536px) { ... }
            },

    extend: {
        colors: {
            'regal-blue': '#243c5a',
          },
    }
  },
  plugins: [],
};
