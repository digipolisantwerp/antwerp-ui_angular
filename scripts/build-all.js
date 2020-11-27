const fs = require('fs');
const path = require('path');
const cli = require('child_process');
const rxjs = require('rxjs');
const operators = require('rxjs/operators');
const cliProgress = require('cli-progress');
const chalk = require('chalk');

/**
 * This script basically runs 'ng build' for every
 * library that is known in this project.
 * It doesn't do any custom magic and is just
 * more convenient to run than to manually run ng build for every
 * package.
 */

const EXCLUDED_DIRS = [];

const BUILD_AS_FIRST = [
  'ngx-utils' // Basically every lib is dependent on this one, so build first
];

const BUILD_AS_LAST = [
  'ngx-forms',
  'ngx-layout',
  'ngx-leaflet',
  'ngx-navigation-menu' // Menu is dependent on layout, so build as last
];

function buildAngularPackage(packageName) {
  return new rxjs.Observable((observer) => {
    console.log(chalk.yellow(`\nBuilding ${packageName}...`));
    cli.exec(`ng build ${packageName}`, error => {
      if (error) {
        return observer.error(error);
      }
      console.log(chalk.green(`${packageName} built!`));
      observer.next();
      observer.complete();
    });
  });
}

function getAllPackages() {
  return fs.readdirSync(path.resolve(__dirname, '../packages/')).filter(dir => dir.startsWith('ngx-'));
}

function getMainPackages() {
  const dirs = getAllPackages();
  for (const EX of [...EXCLUDED_DIRS, ...BUILD_AS_LAST, ...BUILD_AS_FIRST]) {
    dirs.splice(dirs.findIndex(dir => dir === EX), 1);
  }

  return dirs;
}

function welcomeMessage() {
  console.log(chalk.cyan(`
  ----------------ACPAAS-UI---------------
  Angular Components Build
  ----------------------------------------
  `));
}

let bar;

function run() {
  welcomeMessage();
  let progress = 0;
  bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  bar.start(getAllPackages().length, 0);
  const packages = getMainPackages();
  const observables = [
    ...BUILD_AS_FIRST.map(packageName => buildAngularPackage(packageName)),
    ...packages.map(packageName => buildAngularPackage(packageName)),
    ...BUILD_AS_LAST.map(packageName => buildAngularPackage(packageName))
  ];
  return rxjs.concat(...observables).pipe(
    operators.tap(() => bar.update(++progress))
  );
}

run().subscribe({
  complete: () => {
    bar.update(getAllPackages().length);
    bar.stop()
  }
});
