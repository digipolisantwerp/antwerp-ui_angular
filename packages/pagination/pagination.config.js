const baseConfig = require("../../config/base.config");

module.exports = Object.assign({}, baseConfig, {
    "name": "pagination",
    "displayName": "pagination",
    "rootDir": "./src",
    "globals": {
        "ts-jest": {
            "tsConfigFile": "../tsconfig.spec.json",
        },
        "__TRANSFORM_HTML__": true,
    },
});
