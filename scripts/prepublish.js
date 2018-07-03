const cpx = require('cpx');
const { resolve } = require('path');
const { writeFileSync } = require('fs');
const { getNPMDependencies } = require('./helpers/deps');

cpx.copySync('LICENSE.md', 'dist');
cpx.copySync('README.md', 'dist');
cpx.copySync('CHANGELOG.md', 'dist');

const packageJson = getNPMDependencies({ preserve: true });

delete packageJson['scripts'];
delete packageJson['private'];
delete packageJson['devDependencies'];
delete packageJson['publishConfig'];

writeFileSync(resolve('dist', 'package.json'), JSON.stringify(packageJson, undefined, 2));

process.exit();
