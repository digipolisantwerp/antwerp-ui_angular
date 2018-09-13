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

exec(`npm run ng -- generate @acpaas-ui/schematics:package --name=${cmd.name}`)
  .then(() => {
    process.exit();
  })
  .catch(err => {
    process.exit(1);
  });
