const {
  lstatSync,
  existsSync,
  readdirSync
} = require('fs');
const {
  join,
  resolve
} = require('path');

const isDirectory = source => lstatSync(source).isDirectory();

const getDirectories = (source, { nestedPath } = {}) => {
	const dirs = readdirSync(source).map(name => join(source, name)).filter(isDirectory);

	if (!nestedPath) {
		return dirs;
	}

	return dirs.filter(dir => existsSync(resolve(dir, nestedPath)));
};

module.exports = {
  isDirectory,
  getDirectories
};
