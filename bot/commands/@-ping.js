const db = require("quick.db")
const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js")
module.exports = client => {
  client.on('message', message => {
    const prefix = db.get(`prefix_${message.guild.id}`) 
    let mentionEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('My prefix is ' + prefix)
    .setTimestamp()
    if (message.mentions.has(client.user)) {
        message.channel.send(mentionEmbed);
    }
  })
};





