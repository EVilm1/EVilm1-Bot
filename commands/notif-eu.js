const Discord = require("discord.js");
const client = new Discord.Client()
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;

if (talkedRecently.has(message.guild.id)) {
  message.channel.send("La commande est en cooldown " + message.author);
}
else {
  const m = await message.channel.send("<@&698208360343928862> qui veut jouer avec " + message.author.username);
  talkedRecently.add(message.guild.id);
  var timer = setTimeout(() => {
    talkedRecently.delete(message.guild.id);
  }, 5400000);
}

console.log("La commande notif eu a été utilisé par " + message.author.username + " sur le serveur " + message.guild + " dans le salon " + message.channel.name + " !")
}
module.exports.help = {
  name:"notif-eu"
}
