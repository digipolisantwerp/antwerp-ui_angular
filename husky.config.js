module.exports = {
	"hooks": {
		// "pre-commit": "lerna run test",
		"commit-msg": "./node_modules/.bin/commitlint ---edit $HUSKY_GIT_PARAMS",
	},
};
