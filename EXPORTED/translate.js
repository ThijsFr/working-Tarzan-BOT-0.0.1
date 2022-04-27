module.exports = client => {


const translate = require("@iamtraction/google-translate")

client.on("message", async message => {
   const prefix = "T."
   const args = message.content.slice(prefix.length).trim().split(/ +/g);
 
   const command = args.shift().toLowerCase(); 

    if (command === "translate") {
      const query = args.join(" ")
      
      if (!query) return message.reply("please provide a text!")

      const translated = await translate(query, {to: "en"});
      const transEmbed = new Discord.MessageEmbed()
      .setAuthor(translated.text)
       message.channel.send(transEmbed)
     }
})
  
}




