const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const ytdl = require("ytdl-core");
const colors = require('colors')
const fs = require('fs');

const prefix = ('t.', 'T.')

module.exports = client => {

 client.on("ready", async () => {
    console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);


    client.user.setPresence({
      activity: {
        name: `Type"T.usage"`,
        type: `PLAYING`
      },
      status: `online`
    });
});




//welcome



//aantal servers
client.on('message', message =>{
  const member = message.guild.member
  if(message.content === prefix + 'server count'){
    message.channel.send(`**__${client.user.username}__** is used in:\n${client.guilds.cache.size} servers.\nAnd is used by ${client.users.cache.size} users atm`)
    console.log('reacting');
  }
  
});


client.on('message', message =>{
  const member = message.guild.member
  if(message.content === prefix + 'username'){
    message.channel.send(`My real username is: **__${client.user.username}__**`)
    console.log('Username');
  }
  
});

//rules

client.on('message', message =>{
  const member = message.guild.member
  if(message.content === prefix + 'rules'){
    const infoEmbed = new MessageEmbed()
      .setColor('')
      .setAuthor ('Rules\nBullying and imitating is an immediately timeout for 2 days!\nSame for spam\nDisrespecting members in any way is not allowed\nIt is not allowed to use an offensive name or pfp!\nKeep it fun for everyone!\nUse the channel for what they are meant for!') 
        console.log('reacting');


    message.channel.send(infoEmbed);

  }
  
});



//server

client.on('message', message =>{
  const member = message.guild.member
  if(message.content === prefix + 'Tarzans community'){
    const infoEmbed = new MessageEmbed()
      .setColor('')
      .setAuthor('If you want to join my server(tarzan#0878), here is the invite link.\n\nhttps://discord.gg/yTEtMszW9b') 
        console.log('reacting');


    message.channel.send('https://discord.gg/yTEtMszW9b');

  }
  
});



//usage
client.on('message', message =>{
  const member = message.guild.member
  if(message.content === prefix + 'usage'){
    const infoEmbed = new MessageEmbed()
      .setColor('')
      .setAuthor('These are all my commands.\n\nT.usage\nT.creatorinfo\nshow me myself!\nme\nT.play(a song)\nT.die(stops playing)\nPing\nT.learn to code\nT.server count\nT.Tarzans community\nT.my creator\nT.dank memer\n\nThe "T"has to be a capital letter\n\nFurther questions?\nDm:Tarzan#0878')
    console.log('reacting');

    message.channel.send(infoEmbed);

  }
  
});

//bot info
client.on('message', message =>{
  const member = message.guild.member
  if(message.content === prefix + 'dank memer'){
    const infoEmbed = new MessageEmbed()
      .setColor('')
      .setAuthor('Commands for dank memer:\n8ball\nclap\ndankrate\nplsmeme\nplsjail\nplshack\n find all commands on:\nhttps://dankmemer.lol/commands')
        console.log('reacting');

    message.channel.send(infoEmbed);

  }
  
});


client.on('message', message =>{
  const member = message.guild.member
  if(message.content === 'Ping'){
    message.channel.send(`Pong🏓.`) 
        console.log('ping pong!');
  }
  
});
/*
client.on('message', message =>{
  const member = message.guild.member
  if(message.content === prefix + 'random'){
    message.channel.send('random1') | message.channel.send('random2')
  }

});
*/
client.on('message', message =>{
  const member = message.guild.member
  if(message.content === 'ping'){
    message.channel.send(`Pong🏓.`) 
        console.log('ping pong!');
  }
  
}); 




client.on("message", message => {
 if (message.author.id === '904036370182471792'){
  if (message.content === 'test'){
    message.channel.send('omg t werkt')
  }
 }
  
  
  
})


/*
//random response

// your messages should go into this array
const messages = ["random1", "random2", "random3", "random4"]

const randomMessage = messages[Math.floor(Math.random() * messages.length)];
if(message.content === prefix + 'test'{
message.channel.send(randomMessage))
}
*/


//hi
client.on('message', message =>{
  const member = message.guild.member
  if(message.content === prefix + 'hi'){
    message.channel.send(`Hi. I am the Tarzan | BOT made by Tarzan#0878\n if you have questions, you can dm them to me.`) 
        console.log('reacting');
  }
  
});


client.on('message', message =>{
  const member = message.guild.member
  if(message.content === prefix + 'my creator'){
    message.channel.send(`https://cdn.discordapp.com/attachments/940152764217036832/953254718476541983/unknown.png`) 
        console.log('reacting');
  }
  
});




//website

client.on('message', message =>{
  const member = message.guild.member
  if(message.content === prefix + 'website'){
    message.channel.send(`This is the official invite and info website for Tarzan! https://tarzan-webinfo.thijsfr.repl.co/ \n\n If the website doesnt work, dm me:\nTarzan#0878`)
  }
  
});



client.on('message', message =>{
  const member = message.guild.member
  if(message.content === prefix + 'hoi')
  {message.channel.send('hi')
  }

});


//date

client.on('message', message =>{
   const member = message.guild.member
  if(message.content === prefix + 'Date')
  {message.channel.send('Todays date is:' + Date())
  }

});


//welcome



//new command



client.on('message', (message, member) => {

if (message.content.startsWith('show me myself!')) {
  message.delete()
    const user = message.mentions.users.first() || message.author || user.id;
    const avatarEmbed = new MessageEmbed()
      .setColor('')
      .setAuthor(`This you?`)
      .setImage(
        `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
      );
    message.channel.send(avatarEmbed);
    }
})



//command handler for music





//secret command
client.on('message', async message => {
 if (message.content.startsWith(prefix + 'meme')){


         https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                var response = JSON.parse(body)
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

                if (index.post_hint !== 'image') {

                    var text = index.selftext
                    const textembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor('')
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send(textembed)
                }

                var image = index.preview.images[0].source.url.replace('&amp;', '&')
                var title = index.title
                var link = 'https://reddit.com' + index.permalink
                var subRedditName = index.subreddit_name_prefixed

                if (index.post_hint !== 'image') {
                    const textembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor('')
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send(textembed)
                }
               
                const imageembed = new Discord.MessageEmbed()
                    .setTitle(subRedditName)
                    .setImage(image)
                    .setColor('')
                    .setDescription(`[${title}](${link})`)
                    .setURL(`https://reddit.com/${subRedditName}`)
                message.channel.send(imageembed)
            }).on('error', function (e) {
                console.log('Got an error: ', e)
            })
        })
    }
})
//status


//Note, you have to define cilent



//status


//random
const randomStrings = ['Theres a company that turns dead bodies into an ocean reef.', 'The name "bonobo" resulted from a misspelling.', 'There is an annual Coffee Break Festival.', 'You can buy a flying bicycle.', 'Vacuum cleaners were originally horse-drawn.', 'The largest padlock in the world weighs 916 pounds.', 'Pandas poop most of what they eat.', 'McDonalds introduced drive-through service due to the military.', 'Alfred Hitchcock was frightened of eggs.', 'Pigs dont sweat.', 'The fuller the fridge, the more energy-efficient it is.', 'Theres a LEGO bridge in Germany that you can walk across.', 'Umbrellas were once only used by women.', 'For 20 years, a cat served as mayor of an Alaskan town', 'Squirrels are behind most power outages in the U.S.', 'Spider webs were used as bandages in ancient times.', 'A woman who lost her wedding ring found it 16 years later on a carrot in her garden.', 'One quarter of all your bones are located in your feet.', 'Blood donors in Sweden receive a text when their blood is used.', 'You are more likely to get a computer virus from visiting religious sites than porn sites.', 'The inventor of the Pringles can is now buried in one.', 'Sunglasses were originally designed for Chinese judges to hide their facial expressions in court.', 'Cotton candy was invented by a dentist.', 'Shakespeares epitaph contains a curse for grave robbers.', 'A New Orleans hotel offered a $15,000 stay to a whoever stole the "most outrageous" item from them.', 'Children of identical twins are genetically siblings, not cousins.', 'A giant tortoise thought to be extinct for 100 years was recently discovered in the Galápagos.', 'The Goodyear Blimp is the official bird of Redondo Beach, California.'];
const getRandomInt = (max) => Math.floor(Math.random() * max);

client.on('message', (message) => {
  const member = message.guild.member;
  if (message.content === prefix + 'random fact') {
    message.channel.send(randomStrings[getRandomInt(randomStrings.length)]);
  }
});

































































































client.on('message', (message, member) => {

if (message.content.startsWith( 'me')) {
  message.delete()
    const user = message.mentions.users.first() || message.author || user.id;
    const avatarEmbed = new MessageEmbed()
      .setColor('')
      .setAuthor(`${user.username}?? Ayo legend this you?? Keep up the good work!!`)
      .setImage(
        `https://cdn.discordapp.com/attachments/955409257774346260/956991248210747422/unknown.png`
      );
    message.channel.send(avatarEmbed);
    }
})








client.on("message", message => {
  if(message.content === 'test'){
    message.channel.send("works")
    console.log("logged the message")
  }
})

client.on("message", message => {

const list = message.guild;
    list.members.cache.each(member => {
    pinging = member.user.id

         if(message.content.includes(member.user.username)){
          message.channel.send(`<@${pinging}>`)
         }
    })
  
})

  
}



