const name = 'rules';
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
const client =  new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS" ] });

module.exports = (message, args) => {
	const ping = new MessageEmbed()
    .setTitle("Rules")
    .setDescription("Make SURE u follow the rules. u dont want a ban/kick/timeout right?")
    .setFooter("ok thats the rules. they maybe updated!")
    .setColor("RANDOM")
    .setURL("https://discord.com/channels/922770542266810468/922784926271676456")
    
    .addField("---------------------------------", "-")
    .addField(`Click the title`, "It will redirect you to the RULES!!!")
    .addField("-", "---------------------------------")
      message.channel.send( { embeds: [ ping ] } )
  }
// };

console.log('ping cmd from command handling WORKS!!!!')