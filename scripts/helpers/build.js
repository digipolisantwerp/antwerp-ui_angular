const exec = require('./bash');

module.exports = package => {
  console.log(`Building ${package}...`);

  return () => exec(`ng build ${package}`);
};
