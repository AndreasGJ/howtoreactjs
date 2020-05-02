const configFiles = require.context("./data", true, /\.js$/);

const configs = {};

configFiles.keys().forEach(key => {
    const configFile = configFiles(key);
    if (typeof configFile.default === "object" && !key.match(/index\.js/)) {
        const k = key.replace(/(\/|\.js|\.)/g, "");
        configs[k] = configFile.default;
    }
});

let quickConfigs = {};
const noneStr = "#";

const quickKeys = Object.keys(configs);

const setConfigs = (config = {}, key) => {
    const keys = Object.keys(config);
    quickConfigs[key] = config;

    keys.forEach(n => {
        const k = `${key}.${n}`;
        quickConfigs[k] = config[n];

        if (config[n] && typeof config[n] === "object") {
            setConfigs(config[n], k);
        }
    });
};
quickKeys.forEach(key => {
    const config = configs[key];
    setConfigs(config, key);
});

export default (key, value = false, defaultValue = false) => {
    let config = quickConfigs[key];
    if (typeof config === "string" || typeof config === "number") {
        if (value && typeof value === "object") {
            Object.keys(value).forEach(k => {
                config = config.replace(`:${k}`, value[k] || noneStr);
            });
        }
        return config;
    } else if (typeof config === "object" || typeof config === "function") {
        return config;
    }
    // eslint-disable-next-line
    if (!defaultValue)
        console.log("config not found:", `"${key}"`, quickConfigs);

    return defaultValue || noneStr;
};
