const cpx = require('cpx');
const { writeFileSync } = require('fs');
const { getNPMDependencies } = require('./helpers/deps');

cpx.copy('LICENSE', 'dist');
cpx.copy('README.md', 'dist');
cpx.copy('CHANGELOG.md', 'dist');

const packageJson = getNPMDependencies({ preserve: true });

delete packageJson['scripts'];
delete packageJson['private'];
delete packageJson['devDependencies'];
delete packageJson['publishConfig'];

writeFileSync('dist/package.json', JSON.stringify(packageJson, undefined, 2));

process.exit();
