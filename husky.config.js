module.exports = {
	"husky": {
		"hooks": {
			"pre-commit": "lerna run test",
			"commit-msg": "commitlint -E $HUSKY_GIT_PARAMS"
		}
	}
}
