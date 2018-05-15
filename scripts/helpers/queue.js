module.exports = fns => fns.reduce((p, f) => p.then(f), Promise.resolve());
