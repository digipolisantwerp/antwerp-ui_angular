const { readFileSync, lstatSync } = require('fs');
const { resolve, sep } = require('path');
const colors = require('colors');

const { getDirectories } = require('./helpers/dir');
const { getAUIDependencies } = require('./helpers/deps');
const promiseQueue = require('./helpers/queue');
const buildPackage = require('./helpers/build');
const exec = require('./helpers/bash');

const directories = getDirectories(resolve(process.cwd(), 'packages'));
const configs = directories.map(directory => readFileSync(resolve(`${directory}/lib`, 'package.json'), {
	encoding: 'UTF-8'
}));
const localDependencies = getAUIDependencies(configs.reduce((acc, curr) => {
	const config = JSON.parse(curr);
	const packageName = config.name.replace('@acpaas-ui/ngx-components/', '');

	return Object.assign({}, acc, {
		[packageName]: (config['acpaas-ui'] || {}).dependencies || [],
	});
}, {}));

promiseQueue(localDependencies.map(package => buildPackage(package)))
	.then(() => {
		localDependencies.forEach(package => {
			try {
				if (lstatSync(`${process.cwd()}/dist/${package}/examples`).isDirectory()) {
					exec(`rimraf ${process.cwd()}/dist/${package}/examples`);
				}
			} catch(e) {
				console.log(colors.green(`No example found for ${package}`));
			}
		});
		console.log(colors.green('Build completed.'));
		process.exit();
	})
	.catch(err => {
		console.log(colors.red('Build failed.'));
		console.log(err);
		process.exit(1);
	});
