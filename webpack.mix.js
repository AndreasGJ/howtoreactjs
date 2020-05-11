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
            "@": path.resolve(__dirname, "resources/js")
        }
    }
});

mix.react("resources/js/app.js", "public/js");
mix.sass("resources/sass/app.scss", "public/css");

mix.react("resources/admin/js/app.js", "public/js/admin");
mix.sass("resources/admin/sass/app.scss", "public/css/admin");

mix.sourceMaps().version();
