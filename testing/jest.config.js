module.exports = {
    "verbose": true,
    "preset": "jest-preset-angular",
    "setupTestFrameworkScriptFile": "<rootDir>/testing/setupJest.ts",
    "testResultsProcessor": "./node_modules/jest-junit",
    "coveragePathIgnorePatterns": [
        "/node_modules/",
        "index.ts"
    ],
    "rootDir": "../",
    "projects": [
        "<rootDir>/packages/layout/layout.config.js",
        "<rootDir>/packages/utils/utils.config.js",
    ],
    "globals": {
        "ts-jest": {
            "tsConfigFile": "./tsconfig.json",
        },
        "__TRANSFORM_HTML__": true,
    },
    "modulePathIgnorePatterns": [
        "dist/*",
        "<rootDir>/testing/*"
    ],
};


