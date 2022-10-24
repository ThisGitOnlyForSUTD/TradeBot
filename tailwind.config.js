module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    content: [`./public/**/*.html`, `./src/**/*.vue`]
  },
  theme: {
    fontFamily: {
      sans: ['Rubic', 'sans-serif', 'system-ui'], 
      screens: {
        'tablet': '600px',
        'desktop': '1200px',
        'portrait': {'raw': '(orientation:portrait)'}
      }
    },
    extend: {
      boxShadow: {
        primary:
          '0 20px 25px -5px rgba(51, 51, 204, 0.35), 0 10px 10px -5px rgba(51, 51, 204, 0.35)'
      }
    }
  },
  variants: {},
  plugins: []
}
