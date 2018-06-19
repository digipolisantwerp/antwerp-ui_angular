const { resolve } = require('path');
const colors = require('colors');
const { readFileSync, writeFileSync } = require('fs');
const sortKeys = require('sort-object-keys');

const exec = require('./helpers/bash');
const { getDirectories } = require('./helpers/dir');
const promiseQueue = require('./helpers/queue');
const { getNPMDependencies } = require('./helpers/deps');

const directories = getDirectories(resolve(process.cwd(), 'packages'));

const updateNpmDependencies = () => {
	const packageJson = JSON.parse(readFileSync('package.json'));
	const npmDependencies = getNPMDependencies();

	writeFileSync('package.json', JSON.stringify(Object.assign({}, packageJson, {
		devDependencies: sortKeys(Object.assign({},
			packageJson.devDependencies,
			npmDependencies.devDependencies,
			npmDependencies.dependencies,
		)),
	}), undefined, 2));

	return exec('npm install');
};

promiseQueue([
	updateNpmDependencies(),
	...directories.map(directory => {
		// Handle spaces in the directory name
		directory = directory.replace(" ", "\\ ");
		return () => exec(`cd ${directory} && npm install`);
	})
])
	.then(() => {
		console.log(colors.green('Bootstrap completed.'));
		process.exit();
	})
	.catch(err => {
		console.log(colors.red('Bootstrap failed.'));
		process.exit(1);
	});
