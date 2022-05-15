const name = 'ping';
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
const client =  new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS" ] });

module.exports = (message, args) => {
	const ping = new MessageEmbed()
    .setTitle("Zane Ping")
    .setDescription("Ran ;ping")
    .setFooter("client APi and latency")
    .setColor("RANDOM")
    
    .addField("---------------------------------", "-")
    .addField(`Client Ping: ${message.createdTimestamp - message.createdTimestamp} ms`, "Thats The Client Ping")
    .addField(`API ping Latency: ${Math.round(client.ws.ping)} ms`, "thats the Latency")
      message.channel.send( { embeds: [ ping ] } )
  }
// };

console.log('ping cmd from command handling WORKS!!!!')