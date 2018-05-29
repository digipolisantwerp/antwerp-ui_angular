const { resolve } = require('path');
const exec = require('./helpers/bash');
const { getDirectories } = require('./helpers/dir');
const promiseQueue = require('./helpers/queue');

const directories = getDirectories(resolve(process.cwd(), 'packages'));

promiseQueue(directories.map(directory => {
    return () => exec(`cd ${directory} && npm install`);
}))
    .then(() => {
        console.log('Bootstrap completed.');
        process.exit();
    })
    .catch(err => {
        console.log('Bootstrap failed.');
        console.error(err);
        process.exit(1);
    });
