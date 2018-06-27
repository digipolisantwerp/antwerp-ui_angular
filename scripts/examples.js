const { resolve, sep } = require('path');
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
const packages = directories.map(d => d.split(sep).pop());

const buildExample = package => () => {
	console.log(colors.yellow(`Building examples for ${package}...`));

	return exec(`ng build ${package} -c examples`);
};

const updateRoutes = () => {
	// TODO: fix lazy imports if this ever gets fixed: https://github.com/angular/angular-cli/issues/6373
	console.log(colors.yellow('Updating styleguide routes...'));

	const srcModules = resolve(process.cwd(), 'styleguide', 'app', 'examples.modules.ts');
	const srcRoutes = resolve(process.cwd(), 'styleguide', 'app', 'examples.routes.ts');

	let importConfigModules = '';
	let moduleConfig = '';
	let importConfigRoutes = '';
	let routeConfig = '';
	packages.forEach(package => {
		const route = `${package.toUpperCase()}_EXAMPLES_ROUTES`;
		const moduleName = `${capitalize(camelCase(package))}ExamplesModule`;

		importConfigModules += `import { ${moduleName} } from '@acpaas-ui/ngx-examples/${package}';\n`;
		importConfigRoutes += `import { ${route} } from '@acpaas-ui/ngx-examples/${package}';\n`;
		moduleConfig += `	${moduleName},\n`;
		routeConfig += `	{ path: '${package}', children: ${route} },\n`;
	});

	writeFileSync(srcModules, `${importConfigModules}\nexport const ExamplesModules = [\n${moduleConfig}];\n`, { encoding: 'utf-8' });
	writeFileSync(srcRoutes, `${importConfigRoutes}\nexport const EXAMPLES_ROUTES = [\n${routeConfig}];\n`, { encoding: 'utf-8' });

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
