const { resolve } = require('path');
const { readFileSync, writeFileSync } = require('fs');
const colors = require('colors');
const camelCase = require('lodash.camelcase');
const capitalize = require('lodash.capitalize');

const { getDirectories } = require('./helpers/dir');
const promiseQueue = require('./helpers/queue');
const exec = require('./helpers/bash');

const directories = getDirectories(resolve(process.cwd(), 'packages'), {
	nestedPath: 'examples',
});
const packages = directories.map(d => d.split('/').pop());

const buildExample = package => () => {
	console.log(colors.yellow(`Building examples for ${package}...`));

	return exec(`./node_modules/.bin/ng build ${package} -c examples`);
};

const updateRoutes = () => {
	// TODO: fix lazy imports if this ever gets fixed: https://github.com/angular/angular-cli/issues/6373
	console.log(colors.yellow('Updating styleguide routes...'));

	const src = resolve(process.cwd(), 'styleguide', 'app', 'examples.routes.ts');

	const routeConfig = packages.map(package => {
		const packageName = capitalize(camelCase(package));

		return {
			path: package,
			loadChildren: `@acpaas-ui/ngx-examples/${package}/esm2015/${package}#${packageName}ExamplesModule`,
			data: {
				title: packageName,
			},
		};
	});

	writeFileSync(src, `export const EXAMPLES_ROUTES = ${JSON.stringify(routeConfig, null, 2)};\n`, { encoding: 'utf-8' });

	console.log(colors.green('Styleguide routes updated.'));

	return Promise.resolve();
};

promiseQueue([
	...packages.map(buildExample),
	updateRoutes,
])
	.then(() => {
		console.log(colors.green('Examples completed.'));
		process.exit();
	})
	.catch(err => {
		console.log(colors.red('Examples failed.'));
		console.log(err);

		process.exit(1);
	});
