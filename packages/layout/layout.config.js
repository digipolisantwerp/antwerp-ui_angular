module.exports = {
    "name": "layout",
    "displayName": "layout",
    "rootDir": "./src",
    "testMatch": [
        "**/__tests__/**/*.+(ts|js)?(x)",
        "**/+(*.)+(spec|test).+(ts|js)?(x)",
    ],
    "globals": {
        "ts-jest": {
            "tsConfigFile": "../tsconfig.spec.json",
        },
        "__TRANSFORM_HTML__": true,
    },
};
