const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'fucsiaAzulRatioFondo': 'linear-gradient(162deg,#4351C6, rgb(18, 33, 77), #000, rgba(211, 0, 126, 0.3), #4351C6)',
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                Roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
                RobotoCondensed: ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
                NotoSerif: ['Noto Serif', ...defaultTheme.fontFamily.sans]
            },
            transform: {
              '3d': 'translateZ(-1px) scale(2)',
            }
        }
    },
    plugins: []
};
