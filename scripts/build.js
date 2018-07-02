const { readFileSync } = require('fs');
const { resolve, sep } = require('path');
const colors = require('colors');

const { getDirectories } = require('./helpers/dir');
const { getAUIDependencies } = require('./helpers/deps');
const promiseQueue = require('./helpers/queue');
const buildPackage = require('./helpers/build');

const directories = getDirectories(resolve(process.cwd(), 'packages'));
const packages = directories.map(directory => directory.split(sep).pop());
const configs = directories.map(directory => readFileSync(resolve(directory, 'package.json'), {
  encoding: 'UTF-8'
}));
const localDependencies = getAUIDependencies(configs.reduce((acc, curr) => {
  const config = JSON.parse(curr);

  return Object.assign({}, acc, {
    [config.name]: (config['acpaas-ui'] || {}).dependencies || [],
  });
}, {}));

const queue = promiseQueue(localDependencies.map(package => buildPackage(package)))
	.then(() => {
		console.log(colors.green('Build completed.'));
		process.exit();
	})
	.catch(err => {
		console.log(colors.red('Build failed.'));
		console.log(err);

		process.exit(1);
	});
