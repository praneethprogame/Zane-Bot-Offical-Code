const name = 'credits';
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
const client =  new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS" ] });

module.exports = (message, args) => {
    let embed2 = new Discord.MessageEmbed()
    .setTitle("Credits")
    .setDescription("These Are The Cool People who made Zane ")
    .setFooter("without these cool people zane Wouldnt be MADE")
    .setColor("RANDOM")
    
    .addField("---------------------------------", "-")
    .addField("`Mr.Seaweed Brain PJO#7298`", "You You's Universe Server OWNER")
    .addField("`iiHullex#0801`", "You You's Universe Server Co-Owner")
    .addField("`praneethprogamer#0476`", "Main Dev/Bot Creator")
    .addField("`Windows 11#3775`", "Main Helper Dev/Improver")
    .addField("`shourgamer2#6474`", "Helper Dev/improver")
    .addField("-", "---------------------------------")
      message.channel.send( { embeds: [ embed2 ] } )
  }
// };

console.log('credits cmd from command handling WORKS!!!!')