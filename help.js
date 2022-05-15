const Discord = require('discord.js');

module.exports = async (message, tokens) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("All Commands")
    .setDescription("Looks Like U Need Some Help Here's All the cmds ")
    .setFooter("Ok thats it More CMDS Will Be Added In The Future!")
    .setColor("RANDOM")
    
    .addField("---------------------------------", "-")
    .addField("Ping", "Shows U The Bot Ping!!!")
    .addField("serverinfo or si", "Show's you The Server's Info!!")
    .addField("Ban", "Ban A Person")
    .addField("Kick", "Kick a Person")
    .addField("rules", "Shows You The Server Rules")
    .addField("changelog or cg", "Show You The ChangeLog Website!")
    .addField("-", "---------------------------------")
      message.channel.send( { embeds: [ embed ] } )
}

console.log('Help cmd from command handling WORKS!!!!')