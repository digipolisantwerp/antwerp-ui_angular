const { resolve } = require('path');
const colors = require('colors');
const exec = require('./helpers/bash');
const { getDirectories } = require('./helpers/dir');
const promiseQueue = require('./helpers/queue');

const directories = getDirectories(resolve(process.cwd(), 'packages'));

promiseQueue(directories.map(directory => {
    return () => exec(`cd ${directory} && npm install`);
}))
    .then(() => {
        console.log(colors.green('Bootstrap completed.'));
        process.exit();
    })
    .catch(err => {
        console.log(colors.red('Bootstrap failed.'));
        process.exit(1);
    });
