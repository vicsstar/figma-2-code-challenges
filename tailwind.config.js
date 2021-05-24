module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundColor: {
          primary: '#2D2E36',
          'card-body': '#383A45',
          'landing-primary': '#5200FF',
        },
        backgroundImage: {
          'cover-photo': 'url("/assets/images/mountain.jpg")',
          'dashboard-mobile': 'url("/assets/images/bg-dashboard-mobile.png")',
          'dashboard-not-mobile': 'url("/assets/images/bg-dashboard-not-mobile.png")'
        },
        fontFamily: {
          poppins: 'Poppins',
          'bebas-neue': 'Bebas Neue',
        },
        minWidth: {
          64: '16.375rem',
          80: '19rem',
        },
        minHeight: {
          60: '15.625rem',
          72: '18.125rem',
        },
        height: {
          'landing-mobile-hero': '28rem',
        }
      },
    },
    variants: {},
    plugins: [],
};
