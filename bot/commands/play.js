const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'play',
    description: 'Joins and plays a video from youtube',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

//
         const execute = new MessageEmbed()
          .setColor('')
          .setAuthor(`Join voice channel to let the command work đšī¸`)
        if (!voiceChannel) return message.channel.send(execute);
//

        const permissions = voiceChannel.permissionsFor(message.client.user);
//
        
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissions');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissions');


          const argsmessage = new MessageEmbed()
          .setColor('')
          .setAuthor(`Enter the name u want to listen to đ§`)

        if (!args.length) return message.channel.send(argsmessage);
 
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('leaving channel');
            });
 
            await message.reply('playing your song/playlist*');

    
            return
        }
 
        
        const  connection = await voiceChannel.join();
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });
 
 Â  Â  Â  Â  Â  await message.reply(`Okay! i'm Now Playing ***${video.title}***`)
          console.log('playing a song');

Â  Â  Â  Â  } else {

Â  Â  Â  Â  Â  Â  message.channel.send('No video results found, try being more specific');

Â  Â  Â  Â  }

Â  Â  }
}