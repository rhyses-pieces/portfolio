const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['dm', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        white: '#fefefe',
        gray: {
          900: '#3a3a50',
          800: '#515164',
          700: '#636374',
          600: '#767685',
          500: '#8c8d98',
          400: '#a5a5ae',
          300: '#bfbfc5',
          200: '#d7d7db',
          100: '#ececee',
        },
        mint: {
          900: '#363058',
          800: '#4e4c67',
          700: '#5f6272',
          600: '#727a7e',
          500: '#87968b',
          400: '#9db699',
          300: '#b4d6a7',
          200: '#cbf2bf',
          100: '#fdfff6',
        },
        peach: {
          900: '#343242',
          800: '#4e4a66',
          700: '#625d81',
          600: '#78739f',
          500: '#9c89b9',
          400: '#c6a4c4',
          300: '#efc2b1',
          200: '#fee1cd',
          100: '#fffefd',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
