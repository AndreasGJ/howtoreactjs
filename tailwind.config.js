const colors = require("tailwindcss/colors");

module.exports = {
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.css",
    ],
    darkMode: false,
    theme: {
        colors,
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
