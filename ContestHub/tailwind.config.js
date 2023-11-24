/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montserratFont: ['Montserrat', 'sans-serif'],
            },
            colors: {
                primaryColor: '#00c1f1',
                fontColor: '#252737',
            },
        },
    },
    plugins: [],
};
