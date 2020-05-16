const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    // Disable the default container
    container: false
  },
  theme: {
    // Overrides
    // fontFamily: {
    //   sans: ['DIN', ...defaultTheme.fontFamily.sans]
    // },
    // Extensions
    extend: {
      screens: {
        'hu': '1400px'
      },
    }
  }
}
