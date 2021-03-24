const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;

var embed = new Discord.RichEmbed()

  .setColor("#FFE000")
  .setTitle("**Voici le serveur semi-privé twitch !**", "-")
  .addField("lien : ", "[Serveur surviv.io twitch](https://c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/index_twitch.html )")

      message.channel.send(embed)

       console.log ("La commande twitch a été utilisée");
}
module.exports.help = {
    name: "twitch"
}
