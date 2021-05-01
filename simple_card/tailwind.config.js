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
        },
        backgroundImage: {
          'cover-photo': 'url("/images/mountain.jpg")',
        },
        fontFamily: {
          poppins: 'Poppins',
        },
        minWidth: {
          64: '16.375rem',
          80: '19rem',
        },
        minHeight: {
          60: '15.625rem',
          72: '18.125rem',
        }
      },
    },
    variants: {},
    plugins: [],
};
