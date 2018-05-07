const baseConfig = require("./base.config");

module.exports = Object.assign({}, baseConfig, {
    "verbose": true,
    "preset": "jest-preset-angular",
    "setupTestFrameworkScriptFile": "<rootDir>/config/setupJest.ts",
    "testResultsProcessor": "./node_modules/jest-junit",
    "rootDir": "../",
    // projects are broken, run all the tests
    // "projects": [
    //     "<rootDir>/packages/layout/layout.config.js",
    //     "<rootDir>/packages/utils/utils.config.js",
    // ],
    "globals": {
        "ts-jest": {
            "tsConfigFile": "./config/tsconfig.spec.json",
        },
        "__TRANSFORM_HTML__": true,
    },
});
