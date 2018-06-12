const colors = require('colors');
const exec = require('./bash');

module.exports = package => () => {
	console.log(colors.yellow(`Building ${package}...`));

	return exec(`ng build ${package}`);
};
