/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            "sofia-pro": ["Sofia Pro", "sans-serif"],
            gilory: ["Gilroy"],
        },
        extend: {
            colors: {
                customPurple: "#651FFF",
            },
        },
    },
    plugins: [],
};
