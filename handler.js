const fs = require('fs');
const commands = { };
for (const path of fs.readdirSync('commands')) {
	if (!path.endsWith('.js')) continue;
	const [command] = path.split('.');
	commands[command] = require(`./commands/${path}`);
}
module.exports = (message) => {
	const tokens = message.content.split(' ');
	let command = tokens.shift();
	if (command.charAt(0) === ';') {
		command = command.substring(1);
		if (typeof commands[command] === 'function') {
			message.delete();
			commands[command](message, tokens);
		} else if (message.author.bot) {
			return;
		} else {
			return message.reply('Wrong command! Enter `;help` for commands.');
		}
	} else {
		return;
	}
};

console.log('command handler WORKING!')