const baseConfig = require("../../config/base.config");

module.exports = Object.assign({}, baseConfig, {
    "name": "layout",
    "displayName": "layout",
    "rootDir": "./src",
    "globals": {
        "ts-jest": {
            "tsConfigFile": "../tsconfig.spec.json",
        },
        "__TRANSFORM_HTML__": true,
    },
});
