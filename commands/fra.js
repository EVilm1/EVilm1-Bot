const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;

var embed = new Discord.RichEmbed()

  .setColor("#C51D1D")
  .setTitle("**Voici le serveur surviv.io frankfurt :**", "-")
  .addField("lien : ", "[Serveur surviv.io francophone](https://surviv.io/?region=eu&zone=fra)")

      message.channel.send(embed)

       console.log ("La commande fr a été utilisée");
}
module.exports.help = {
    name: "fra"
}
