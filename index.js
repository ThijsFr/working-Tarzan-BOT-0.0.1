const {Client, Intents} = require('discord.js');
const keepAlive = require("./server");
const intents = [Intents.FLAGS.GUILD];
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const ytdl = require("ytdl-core");
const colors = require('colors')
const fs = require('fs');
const welcome = require('./welcome')







const TOKEN = 'OTQ1NzEyODU1NDQzOTg0NDM0.YhUJuw.qZk2SV7qh0uNBpJU1dxASObKli0';
const prefix = ('t.', 'T.')

const client = new Client({
   intents: ['GUILD_VOICE_STATES', Intents.FLAGS.GUILDS] 
   });

const exportFile = require('./exports')(client);


client.on('ready', () => {
  console.log('Bot is online')
 //welcome (client)
})










let db = JSON.parse(fs.readFileSync("./config/database.json", "utf8"));

client.on("message", message => {
    if (message.author.bot) return; // ignore bots

    // if the user is not on db add the user and change his values to 0
    if (!db[message.author.id]) db[message.author.id] = {
        xp: 0,
        rank: 0
      };
    db[message.author.id].xp++;
    let userInfo = db[message.author.id];
    if(userInfo.xp > 100) {
        userInfo.level++
        userInfo.xp = 0
        message.reply("You just leveled up! Type T.rank to see your current rank.")
    }
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd === "rank") {
        let userInfo = db[message.author.id];
        let member = message.mentions.members.first();
        let embed = new Discord.MessageEmbed()
        .setColor(0x4286f4)
        .addField("Level", userInfo.level)
        .addField("XP", userInfo.xp+"/100");
        if(!member) return message.channel.send(embed)
        let memberInfo = db[member.id]
        let embed2 = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Level", memberInfo.level)
        .addField("XP", memberInfo.xp+"/100")
        message.channel.send(embed2)
    }
    fs.writeFile("./config/database.json", JSON.stringify(db), (x) => {
        if (x) console.error(x)
      });
})






 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./bot/commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./bot/commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'play'){
        client.commands.get('play').execute(message, args);
    } 
    else if(command === 'die'){
        client.commands.get('leave').execute(message, args);
    }
});

















const canvacord = require("canvacord")
 

client.on("guildMemberAdd", async member => {
  console.log(`Member join username: %s`, member.user.username);
  if(member.guild.id !== "951189437168091166") return; 
  
  const welcomeCard = new canvacord.Welcomer()
  
  welcomeCard.setUsername(member.user.username)
  welcomeCard.setDiscriminator(member.user.discriminator)
  welcomeCard.setAvatar(member.user.displayAvatarURL({format: "png"}))
  welcomeCard.setColor("title", "welcomeCard")
  welcomeCard.setColor("username-box", "welcomeCard")
  welcomeCard.setColor("discriminator-box", "welcomeCard")
  welcomeCard.setColor("message-box", "welcomeCard")
  welcomeCard.setColor("border", "welcomeCard")
  welcomeCard.setColor("avatar", "welcomeCard")
  welcomeCard.setBackground("https://img.freepik.com/vrije-vector/donker-papierlagenbehang-met-gouden-details_23-2148403401.jpg?w=360")
  welcomeCard.setMemberCount(member.guild.memberCount)
  let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "welcome.png")
   member.guild.channels.cache.get("961943485315944508").send(member.toString(), attachment)
})





// leave 


client.on("guildMemberRemove", async member => {
  console.log(`Member leave username: %s`, member.user.username);
  if(member.guild.id !== "951189437168091166") return; 
  

   member.guild.channels.cache.get("961943502680371231").send(member.user.username)
})

client.on("guildMemberRemove", async member => {
  console.log(`Member remove username: %s`, member.user.username);
  if(member.guild.id !== "951189437168091166") return; 
  

   member.guild.channels.cache.get("961943502680371231").send('Just left the server...... **have a good day without us!** \n\n')
})




























//reaction roles



module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;

    // gets the role for the reaction
    let reactRole = message.mentions.roles.first()

    // if no role provided it will send this
    if(!reactRole) return message.channel.send(`Type: =react @name of the role`)

    // create an embed
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM") // the color of the embed 
    .setDescription(`React with ✅ to get the role ${reactRole}`) // desc of the embed

    // send the embed.
    let msg = await message.channel.send(embed)

    // reacts to the embed with an emoji
    await msg.react('✅')

    // filtering so it only works for the emoji choosen
    const reactionFilter = (reaction, user) => ["✅"].includes(reaction.emoji.name)

    // making a collection for the emoji
    const reactionCollector = msg.createReactionCollector(reactionFilter, { dispose: true })

    // setting the collection that when the reaction was removed
    reactionCollector.on("remove", (reaction, user) => {
        
        // if the bot removed their reaction return
        if(user.bot) return;

        // getting the member of the server who reacted 
        let member = reaction.message.guild.members.cache.find(member => member.id === user.id)

        // remove the role when he/she remove his/her reaction.
        member.roles.remove(reactRole.id)
    })

    reactionCollector.on("collect", (reaction, user) => {
        
        // if a bot reacted return
        if(user.bot) return;

        // getting the member of the server who reacted 
        let member = reaction.message.guild.members.cache.find(member => member.id === user.id)

        // adds the role to the member!
        member.roles.add(reactRole.id)
    })
}

module.exports.help = {
    name: `react`,
    aliases: []
}



keepAlive ();
client.login(process.env.TOKEN)