const exec = require('child_process').exec;

module.exports = (cmd, ...args) => new Promise((resolve, reject) => {
  exec(cmd, (err, stdout) => {
    if (err) {
      return reject(err);
    }

    console.log(stdout);

    resolve();
  });
});
