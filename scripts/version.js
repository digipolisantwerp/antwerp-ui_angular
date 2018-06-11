const commandLineArgs = require('command-line-args');
const exec = require('./helpers/bash');

const definitions = [
  { name: 'major', type: Boolean },
  { name: 'minor', type: Boolean },
  { name: 'patch', type: Boolean },
  { name: 'message', alias: 'm', type: String }
];
const options = commandLineArgs(definitions);

const bump = Object.keys(options).find(key => ['major', 'minor', 'patch'].indexOf(key) >= 0) || 'patch';

exec(`npm version ${bump}`)
  .then(() => {
    process.exit();
  })
  .catch(err => {
    process.exit(1);
  });
