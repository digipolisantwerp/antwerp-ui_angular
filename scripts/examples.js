const { resolve, sep, join } = require('path');
const { writeFileSync } = require('fs');
const colors = require('colors');
const camelCase = require('lodash.camelcase');
const upperFirst = require('lodash.upperfirst');
const snakeCase = require('lodash.snakecase');

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

const rimRafExamples = () => {
	if (!process.env.example) {
		exec(`rimraf examples`);

		console.log(colors.green('Examples folder cleaned.'));
	}

	return Promise.resolve();
}

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
		const route = `${snakeCase(package).toUpperCase()}_EXAMPLES_ROUTES`;
		const moduleName = `${upperFirst(camelCase(package))}ExamplesModule`;

		// TODO: investigate this further, importing from the fesm module seems to solve the path resolving issue but should not be required to make this work
		importConfigModules += `import { ${moduleName} } from '@acpaas-ui/ngx-examples/${package}/fesm2015/${package}';\n`;
		importConfigRoutes += `import { ${route} } from '@acpaas-ui/ngx-examples/${package}/fesm2015/${package}';\n`;
		moduleConfig += `	${moduleName},\n`;
		routeConfig += `	{ path: '${package}', children: ${route}, title: '${upperFirst(package.replace(/-/g, ' '))}', },\n`;
	});

	writeFileSync(srcModules, `${importConfigModules}\nexport const ExamplesModules = [\n${moduleConfig}];\n`, { encoding: 'utf-8' });
	writeFileSync(srcRoutes, `${importConfigRoutes}\nexport const EXAMPLES_ROUTES = [\n${routeConfig}];\n`, { encoding: 'utf-8' });

	console.log(colors.green('Styleguide routes updated.'));

	return Promise.resolve();
};

const updateExamplesPackage = () => {
	console.log(colors.yellow('Writing examples package.json...'));

	const examplesDir = resolve(process.cwd(), 'examples');
	const package = {
		name: '@acpaas-ui/ngx-examples',
		version: '0.0.1',
	};

	writeFileSync(join(examplesDir, 'package.json'), JSON.stringify(package, null, 2), { encoding: 'UTF-8' });

	console.log(colors.green('Examples package.json complete.'));

	return Promise.resolve();
}

promiseQueue([
	rimRafExamples,
	...packages.filter(package => {
		return (!process.env.example || (process.env.example && package === process.env.example))
	}).map(buildExample),
	updateRoutes,
	updateExamplesPackage,
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
