/*

const Discord = require('discord.js');
const db = require("quick.db")


module.exports = client => {
client.on('message', message => {
  const user = message.mentions.users.first() || message.author;
  const prefix = db.get(`prefix_${message.guild.id}`)
  
  
  if (message.content.startsWith(prefix + 'botStatus')) {
   

    
    let statembed = new Discord.MessageEmbed()
    .setAuthor(user.username, user.avatarURL())
    .setTitle('***Bot information***')
    
    .setColor('RANDOM')
    .setTimestamp()
    .setImage('https://media.discordapp.net/attachments/945189097394278442/962705094665723964/CS_1.gif'
)
    .addField('---------')
    .addFields(
      {
        name: 'Bot Ping',
        value: client.ws.ping
,
      
        
      },
      {
        name: 'Username',
        value: client.user,
      },
      {
        name: 'Bot TAG',
        value: client.user.tag,
      },
      {
        name: 'Channels:',
        value: client.channels.cache.size,
      },
      {
        name: 'Server count',
        value: client.guilds.cache.size,
      },
      {
        name: 'Uptime',
        value: `${process.uptime().toFixed(2)}s`,
      
      },
      {
        name: 'LastReady',
        value: new Date(client.readyTimestamp).toLocaleDateString(),
      },
      {
        name: 'Server/prefix',
        value: prefix,
        
      },
      
      
          
    )
  






    
    message.channel.send(statembed)
   
      
      
    }
    
  
  
   
});
}

*/