const baseConfig = require("../../config/base.config");

module.exports = Object.assign({}, baseConfig, {
    "name": "leaflet",
    "displayName": "leaflet",
    "rootDir": "./src",
    "globals": {
        "ts-jest": {
            "tsConfigFile": "../../config/tsconfig.spec.json",
        },
        "__TRANSFORM_HTML__": true,
    },
});
