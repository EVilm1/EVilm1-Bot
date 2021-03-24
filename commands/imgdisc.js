const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;

var embed = new Discord.RichEmbed()

  .setColor("#000000")
  .setImage("https://cdn.discordapp.com/attachments/698260364894404700/713452122175307856/shck_banniere_regles_discord.png")

      message.channel.send(embed)

       console.log ("La commande rd a été utilisée");
}
module.exports.help = {
    name: "imgdisc"
}
