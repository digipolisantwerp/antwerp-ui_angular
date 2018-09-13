const commandLineArgs = require('command-line-args');
const exec = require('../helpers/bash');

const cmd = commandLineArgs([{
	name: 'name',
	defaultOption: true
}], {
	stopAtFirstUnknown: true
});

if (!cmd.name) {
    console.error("Package name is required.");
    process.exit(1);
}

// TODO: remove force flag once https://github.com/angular/angular-cli/issues/11337 is fixed
exec(`npm run ng -- generate @acpaas-ui/schematics:example --name=${cmd.name} --force`)
  .then(() => {
    process.exit();
  })
  .catch(err => {
    process.exit(1);
  });
