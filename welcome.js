module.exports = client => {
  const channelId = '961948465678651432' //leave channel


  
  client.on('guildMemberAdd', (member) => {
    console.log('main chat welcome')

    
 

    const channel = member.guild.channels.cache.get(channelId)
    channel.send (`Again welcome ${member.toString()}! What are your experience or are you here to learn? || Tarzan ||`)
 
  })
}













