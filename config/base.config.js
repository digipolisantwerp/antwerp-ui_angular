module.exports = {
    "coveragePathIgnorePatterns": [
        "/node_modules/",
        "index.ts",
        "config",
        ".+\.html",
    ],
    "modulePathIgnorePatterns": [
        "dist/*",
        "npm-cache/*",
        ".npm/*",
        "config/*",
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|js)?(x)",
        "**/+(*.)+(spec|test).+(ts|js)?(x)",
    ],
};
