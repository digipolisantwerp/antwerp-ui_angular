const fs = require('fs');
const path = require('path');
const cli = require('child_process');
const rxjs = require('rxjs');
const operators = require('rxjs/operators');
const cliProgress = require('cli-progress');
const chalk = require('chalk');
const rimraf = require('rimraf');

/**
 * This script basically runs 'ng build' for every
 * library that is known in this project.
 * It doesn't do any custom magic and is just
 * more convenient to run than to manually run ng build for every
 * package.
 */

const EXCLUDED_DIRS = [
  'styleguide', // Don't build the styleguide
  'ngx-notifications' // This package was deprecated, but dir still exists
];

const BUILD_AS_FIRST = [
  'ngx-utils' // Basically every lib is dependent on this one, so build first
];

const BUILD_AS_LAST = [
  'ngx-forms',
  'ngx-layout',
  'ngx-navigation-menu' // Menu is dependent on layout, so build as last
];

function clearDistFolder() {
  console.log(chalk.yellow('\nClearing /dist directory...'));
  return new rxjs.Observable((obs) => rimraf(path.resolve(__dirname, '../dist'), {}, (err) => {
    if (err)
      obs.error(err);

    console.log(chalk.green('Dist directory cleared!'));
    obs.next();
  }));
}

function buildAngularPackage(packageName) {
  return new rxjs.Observable((observer) => {
    console.log(chalk.yellow(`\nBuilding ${packageName}...`));
    const command = cli.exec(`ng build ${packageName}`, error => {
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
  const dirs = fs.readdirSync(path.resolve(__dirname, '../packages/'));
  return dirs;
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
  return clearDistFolder().pipe(
    operators.take(1),
    operators.switchMap(() => rxjs.concat(...observables)),
    operators.tap(() => bar.update(++progress))
  );
}

run().subscribe({
  complete: () => {
    bar.update(getAllPackages().length);
    bar.stop()
  }
});