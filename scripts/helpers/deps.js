const { lstatSync, readdirSync, readFileSync } = require('fs');
const { join, resolve } = require('path');
const mergePackages = require('@userfrosting/merge-package-dependencies');

module.exports.getAUIDependencies = config => {
  const sorted = []; // sorted list of IDs ( returned value )
  const visited = {}; // hash: id of already visited node => true

  const visit = (name, ancestors) => {
    if (!Array.isArray(ancestors)) {
      ancestors = [];
    }

    ancestors.push(name);

    visited[name] = true;

    config[name].forEach(dep => {
      if (ancestors.indexOf(dep) >= 0) { // if already in ancestors, a closed chain exists.
        throw new Error(`Circular dependency "${dep}" is required by "${name}": ${ancestors.join(' -> ')}`);
      }

      // if already exists, do nothing
      if (visited[dep]) {
        return;
      }

      visit(dep, ancestors.slice(0)); // recursive call
    });

    if (sorted.indexOf(name) < 0) sorted.push(name);
  };

  // 2. topological sort
  Object.keys(config).forEach(visit);

  return sorted;
};

module.exports.getNPMDependencies = ({ preserve = false } = {}) => {
	const packageJson = JSON.parse(readFileSync(resolve(process.cwd(), 'package.json')));

	const isDirectory = source => lstatSync(source).isDirectory();
	const getDirectories = source => readdirSync(source).map(name => join(source, name)).filter(isDirectory);

	const packages = getDirectories(resolve(process.cwd(), 'packages')).map(path => `${path}/`);

	const result = mergePackages.npm(packageJson, packages);

	if (!preserve) {
		return {
			dependencies: result.dependencies || {},
			peerDependencies: result.peerDependencies || {},
		};
	}

	return result;
};
