const baseConfig = require("../../config/base.config");

module.exports = Object.assign({}, baseConfig, {
    "name": "forms",
    "displayName": "forms",
    "rootDir": "./src",
    "globals": {
        "ts-jest": {
            "tsConfigFile": "../../config/tsconfig.spec.json",
        },
        "__TRANSFORM_HTML__": true,
    },
});
