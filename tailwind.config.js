/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    background: {
      hero_mobile: 'url(/src/images/hero-mobile.jpg)',
      hero_desktop:
        'url(/src/images/hero-desktop.jpg) no-repeat center/contain',
    },
    letterSpacing: {
      widest: '.21em',
    },
    fontFamily: {
      sans: ['"Josefin Sans"', 'system-ui'],
    },
    colors: {
      primary: {
        desaturatedRed: 'hsl(var(--primary-desaturated-red))',
        softRed: 'hsl(var(--primary-soft-red)',
      },
      neutral: {
        darkGrayishRed: 'hsl(var(--dark-grayish-red))',
      },
      white: colors.white,
    },
    extend: {},
  },
  plugins: [],
};
