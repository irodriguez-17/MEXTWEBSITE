/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            'red': '#B1040E',
            'white': '#FFFFFF',
            'orange': '#FF9500',
            'yellow': '#FFCC00',
            'green': '#34C759',
            'mint': '#00C7BE',
            'teal': '#30B0C7',
            'cian': '#32ADE6',
            'blue': '#007BFF',
            'indigo': '#5856D6',
            'pink': '#FF2D54',
            'black': '#000000',
            'brown': '#A2845E',
            'dark-gray': '#1D1D1F',
            'light-gray': '#7E7E7E',
            'gray': '#8E8E93',
            'blur-cian': '#79ffe1',
            'blur-blue': '#3291ff',
            'light-white': '#CCCCCC',
            'soft-white': '#f5f5f7',
            'soft-dark': '#141415',
            'transparent': 'transparent',
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
