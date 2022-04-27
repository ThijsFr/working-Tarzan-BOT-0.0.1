/* 

module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("I can't die if i didn't live :)");
        await voiceChannel.leave();
    message.channel.send('Leaving channel :smiling_face_with_tear:')
 
    } 
}
*/


//working
module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("I can't die if i didn't live :)");
        await voiceChannel.leave();
        await message.channel.send('**have fun without me!**')
    }
}