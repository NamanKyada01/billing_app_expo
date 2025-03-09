/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            fontFamily: {
                rubik: ['Rubik-Regular', 'sans-serif'],
                'rubik-bold': ['Rubik-Bold', 'sans-serif'],
                'rubik-extrabold': ['Rubik-ExtraBold', 'sans-serif'],
                'rubik-medium': ['Rubik-Medium', 'sans-serif'],
                'rubik-semibold': ['Rubik-Semibold', 'sans-serif'],
                'rubik-light': ['Rubik-Light', 'sans-serif'],
            },
            colors: {
                primary: {
                    100: '#0061FF0A',
                    200: '#0061FF1A',
                    300: '#0061FF',
                },
                accent: {
                    100: '#FBFBFD',
                },
                black: {
                    DEFAULT: '#000000',
                    100: '#8C8E98',
                    200: '#666876',
                    300: '#191d31',
                },
                danger: '#F75555',

                light: {
                    100: '#D6C6FF',
                    200: '#A8B5DB',
                    300: '#9CA4AB',
                },
                dark: {
                    100: '#221f3d',
                    200: '#0f0d23',
                },
            },
        },
    },
    plugins: [],
};
