const commandLineArgs = require('command-line-args');
const exec = require('./helpers/bash');

const definitions = [
  { name: 'name', alias: 'n', type: String },
];
const options = commandLineArgs(definitions);

if (!options.name) {
    console.error("Package name is required.");
    process.exit(1);
}

exec(`npm run ng -- generate @acpaas-ui/schematics:package --name=${options.name}`)
  .then(() => {
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
