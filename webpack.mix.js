const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copy("resources/assets/favicon.ico", "public");

mix.webpackConfig({
    resolve: {
        alias: {
            "@admin": path.resolve(__dirname, "resources/admin/js"),
            "@": path.resolve(__dirname, "resources/js"),
        },
    },
});

// Frontend
mix.js("resources/js/index.js", "public/js/app.js").react();
mix.postCss("resources/css/app.css", "public/css", [require("tailwindcss")]);

// Admin
mix.js("resources/admin/js/index.js", "public/js/admin/app.js").react();
mix.postCss("resources/admin/css/app.css", "public/css/admin", [
    require("tailwindcss"),
]);

mix.sourceMaps().version();
