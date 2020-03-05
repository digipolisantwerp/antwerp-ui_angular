const fs = require('fs');
const path = require('path');
const cli = require('child_process');

const EXCLUDED_DIRS = [
  'styleguide',
  'ngx-notifications'
];

function buildAngularPackage(packageName) {
  return new Promise((resolve, reject) => {
    cli.exec(`ng build ${packageName}`, error => error ? reject(error) : resolve())
  });
}

function getAllPackages() {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../packages/'));
  for (const EX of EXCLUDED_DIRS) {
    dirs.splice(dirs.findIndex(dir => dir === EX), 1);
  }

  return dirs;
}

function run() {
  const packages = getAllPackages();
  return Promise.all(packages.map(packageName => buildAngularPackage(packageName)))
}

run();
