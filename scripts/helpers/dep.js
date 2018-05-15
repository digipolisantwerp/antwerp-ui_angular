module.exports = config => {
  const sorted = []; // sorted list of IDs ( returned value )
  const visited = {}; // hash: id of already visited node => true

  const visit = (name, ancestors) => {
    if (!Array.isArray(ancestors)) {
      ancestors = [];
    }

    ancestors.push(name);

    visited[name] = true;

    config[name].forEach(dep => {
      if (ancestors.indexOf(dep) >= 0) { // if already in ancestors, a closed chain exists.
        throw new Error(`Circular dependency "${dep}" is required by "${name}": ${ancestors.join(' -> ')}`);
      }

      // if already exists, do nothing
      if (visited[dep]) {
        return;
      }

      visit(dep, ancestors.slice(0)); // recursive call
    });

    if (sorted.indexOf(name) < 0) sorted.push(name);
  };

  // 2. topological sort
  Object.keys(config).forEach(visit);

  return sorted;
};
