import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import colors from 'tailwindcss/colors';

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',

    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        colors: {
            primary: '#1470c4',
            // secondary: '#ddeffe',
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            green: colors.emerald,
            yellow: colors.amber,
            red: colors.red,
            blue: colors.blue,
            purple: colors.indigo,
            pink: colors.pink,
            zinc: colors.zinc,
            orange: colors.orange,
            brand: {
                '50': '#f3f6fc',
                '100': '#e5ecf9',
                '200': '#c6d7f1',
                '300': '#94b7e5',
                '400': '#5a91d6',
                '500': '#326cb6',
                '600': '#2559a4',
                '700': '#1f4785',
                '800': '#1e3e6e',
                '900': '#1e355c',
                '950': '#14233d',
            },
            secondary: {
                '50': '#fff1f3',
                '100': '#ffe4e7',
                '200': '#fecdd5',
                '300': '#fda4b3',
                '400': '#fb718b',
                '500': '#f43f66',
                '600': '#e22255',
                '700': '#be1244',
                '800': '#9f1240',
                '900': '#88133c',
                '950': '#4c051c',
            }
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', 'Inter', ...defaultTheme.fontFamily.sans],
                display: ['Platypi', ...defaultTheme.fontFamily.sans],
            },
            animation:{
                'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
            },
            keyframes: {
                'shake' : {
                    '10%, 90%': {
                        transform: 'translate3d(-1px, 0, 0)'
                    },
                    '20%, 80%' : {
                        transform: 'translate3d(2px, 0, 0)'
                    },
                    '30%, 50%, 70%': {
                        transform: 'translate3d(-4px, 0, 0)'
                    },
                    '40%, 60%': {
                        transform: 'translate3d(4px, 0, 0)'
                    }
                }
            }
        },
    },

    plugins: [forms],
};
