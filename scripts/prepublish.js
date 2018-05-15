const mergePackages = require('@userfrosting/merge-package-dependencies');
const cpx = require('cpx');
const fs = require('fs');
const { lstatSync, readdirSync } = require('fs');
const { join, resolve } = require('path');

cpx.copy('LICENSE', 'dist');
cpx.copy('README.md', 'dist');
cpx.copy('CHANGELOG.md', 'dist');

const packageJson = JSON.parse(fs.readFileSync('package.json'));
delete packageJson['scripts'];
delete packageJson['private'];

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source => readdirSync(source).map(name => join(source, name)).filter(isDirectory);

const packages = getDirectories(resolve(process.cwd(), 'packages')).map(path => `${path}/`);

const result = mergePackages.npm(packageJson, packages);

delete result['devDependencies'];

fs.writeFileSync('dist/package.json', JSON.stringify(result, undefined, 2));

process.exit();
