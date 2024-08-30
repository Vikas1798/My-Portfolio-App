/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary:"#121212",
                secondary:"#383838",
                tertiary: "#1e1e1f",
                forth:"#2b2b2cbf",
                fifth:"#d6d6d6b3",
                sixth:"#d6d6d6",
                seventh:'#fafafa',
                // eight:'#ffdb70'
                // eight:'#45a368',
                // eight:'#fe7678',
                eight:'#4c98f5'
            }
        },
    },
        plugins: [],
}
