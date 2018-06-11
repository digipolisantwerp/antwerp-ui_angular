const { spawn } = require('child_process');

module.exports = (cmdString, cmdOptions) => new Promise((resolve, reject) => {
	const cmd = {
		name: cmdString.split(' ')[0],
		args: cmdString.split(' ').slice(1),
	};
	const options = Object.assign({}, cmdOptions, {
		stdio: 'inherit',
		shell: true,
	});

	const child = spawn(cmd.name, cmd.args, options);

	child.on('close', resolve);
	child.on('error', () => {
		console.log('REJECTED');
		reject();
	});
});
