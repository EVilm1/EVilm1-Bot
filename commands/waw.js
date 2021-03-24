const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;

var embed = new Discord.RichEmbed()

  .setColor("#00E8FF")
  .setTitle("**Voici le serveur surviv.io polonais :**", "-")
  .addField("lien : ", "[Serveur surviv.io polonais](https://surviv.io/?region=eu&zone=waw)")

      message.channel.send(embed)

       console.log ("La commande waw a été utilisée");
}
module.exports.help = {
    name: "waw"
}
