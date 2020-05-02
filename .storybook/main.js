const path = require("path");

module.exports = {
    stories: ["../stories/**/*.stories.(js|mdx)"],
    addons: [
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null
            }
        },
        "@storybook/addon-knobs/register",
        "@storybook/addon-links",
        "@storybook/addon-actions",
        {
            name: "@storybook/addon-storysource",
            options: {
                loaderOptions: {
                    prettierConfig: { printWidth: 80, singleQuote: false }
                }
            }
        }
    ],
    webpackFinal: async (config = {}, { configType }) => {
        config.resolve.alias["@"] = path.resolve(__dirname, "../resources/js");
        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
            include: path.resolve(__dirname, "../")
        });

        return config;
    }
};
