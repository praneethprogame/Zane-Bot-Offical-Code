const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Bot running on port:${port}`));

const Discord = require('discord.js');
const config = require('./config.json');
const command = require('./command.js');  
const client =  new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS" ] });

client.on('ready', () => {
  console.log('You You Universe Bot ZANE is ready!!. i REALLY hate replit')
  client.user.setActivity("You You's Universe", { type: "WATCHING"});

  const guildid = '922770542266810468'
  const guild = client.guilds.cache.get(guildid)
  let commands

  if (guild) {
    commands = guild.commands
  } else {
    commands = client.application?.commands
  }

  
})


module.exports = (client) => {
  const channelId = '922800716819623956' // welcome channel
  const targetChannelId = '719799889973739560' // rules and info

  client.on('guildMemberAdd', (member) => {
    const message = `Please welcome <@${
      member.id
    }> to the server! Please check out ${member.guild.channels.cache
      .get(targetChannelId)
      .toString()}`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
  })
}

 command(client, ['changelog', 'cg'], (message) => {
      message.channel.send('go to https://zane-discord-bot-change-log.praneethprogame.repl.co/ For The Offcal Change log!!!')
 })

command(client, ['info'], (message) => {
  message.channel.send('Welcome to the universe')
})

 command(client, ['serverinfo', 'si'], (message) => {
    client.guilds.cache.forEach((guild) => {
      message.channel.send(
        `You You’s Universe (Official) has a total of ${guild.memberCount} members`
      )
    })
  })


client.on("messageCreate", message => {
    if(message.content === ";credits") {
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
  
  })
})

const handler = require('./handler')
client.on("messageCreate", handler)

  const channelId = '922800716819623956' 
  const targetChannelId = '719799889973739560'

  client.on('guildMemberAdd', (member) => {
    const message = `Please welcome <@${
      member.id}>
     to this UNIVERSE! Please check out the rules channel and invite ur friends!.`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
  })

client.login(process.env.token);