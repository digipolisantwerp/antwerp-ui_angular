const cpx = require('cpx');
const { readFileSync, writeFileSync } = require('fs');
const { getNPMDependencies } = require('./helpers/deps');

cpx.copy('LICENSE', 'dist');
cpx.copy('README.md', 'dist');
cpx.copy('CHANGELOG.md', 'dist');

const packageJson = JSON.parse(readFileSync('package.json'));
const dependencies = getNPMDependencies({ preserve: true });

delete packageJson['scripts'];
delete packageJson['private'];
delete packageJson['devDependencies'];
delete packageJson['publishConfig'];

writeFileSync('dist/package.json', JSON.stringify(result, undefined, 2));

process.exit();
