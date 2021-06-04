module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        xl: '7.5vw',
      },
    },
    fontFamily: {
      gibson: ["Gibson"],
      'gibson-semi-bold': ["Gibson-SemiBold"],
      'gibson-bold':["Gibson-Bold"],
      'gibson-light':["Gibson-Light"],
    },
    fontSize: {
      'hero': ['2.5rem','2.5rem'],
      'hero-description': ['2.7rem','2.7rem'],
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '3.5xl': ['2rem','2.5rem'],
      '4xl': '2.25rem',
      '4.5xl':'2.7rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    backgroundPosition: {
     'hero-lg': '45rem 0rem',
     'hero-md': '28rem 0rem',
     'iPhone-back-position': '34rem 0rem',
     'iPhone-back-position-xl': '39rem 0rem',
     'iPhone-back-position-tablet': '16rem 8rem',
     'iPhone-back-position-2xl': '43.5rem 0rem',
     'iPhone-back-info-position': '36.5rem 5rem',
     'pool-back-info-position-tablet': '21rem 10rem',
     'pool-back-info-position-xl': '47.5rem 8rem',
     'pool-back-info-position-2xl': '58.5rem 11rem',
     'pool-back-info-position-mobile': '9.5rem 14rem',
    },
    backgroundSize:{
      'iPhone-back-size': '40vw 49vw',
      'iPhone-back-size-tablet': '64vw 76vw',
      'iPhone-back-info-size': '29.5rem',
      'pool-back-info-size-tablet': '29.5rem',
      'pool-back-info-size-mobile': '29.5rem',
    },
    height: {
      'hero-spacing': '46vw',
      'hero-spacing-2xl': '53vw',
      'hero-spacing-tablet':'90vw',
      '9': '2.25rem',
      '12': '3rem',
      '96': '24rem',
      'cardImage': '21.5rem',
      'cardImage-sm': '30rem',
      'cardImage-md': '29rem',
      'pool-info': '55vw',
      'pool-info-lg': '79vw',
      'pool-info-xl': '64vw',
      'pool-info-2xl': '60vw',
      'pool-info-tablet': '111vw',
      'suscribe': '19vw',
      'suscribe-tablet': '35vw',
      'suscribe-mobile': '73vw',
      'suscribe-2xl': '13vw',
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/images/Path 1130.png')",
        "iPhone-in-Hand": "url('/images/iPhone-in-Hand-Mockup.png')",
        "iPhone-information": "url('/images/Group 16338.png')",
      }),
      colors: {
        "green-chia-dark2": "#3A6080",
        "green-chia-dark1": "#789D9E",
        "green-chia-dark3": "#112B38",
        "green-chia-dark4": "#12232F",
        "green-chia-lime": "#13CD86",
        "white-chia": "#FFFFFF",
      },
      backdropBlur: {
        "xs": "200px"
      },
      width: {
        '18': '4.25rem',
        '19': '4.5rem',
        '68': '17rem',
        'suscribe-input': '31rem'
      },
      margin: {
        '18': '4.5rem',
        '26': '6.5rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
