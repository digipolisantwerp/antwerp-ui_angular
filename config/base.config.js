module.exports = {
    "coveragePathIgnorePatterns": [
        "/node_modules/",
        "index.ts"
    ],
    "modulePathIgnorePatterns": [
        "dist/*",
        "npm-cache",
        ".npm",
        "config",
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|js)?(x)",
        "**/+(*.)+(spec|test).+(ts|js)?(x)",
    ],
};
