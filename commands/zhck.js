const Discord = require("discord.js");
const client = new Discord.Client()
module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;

  const m = await message.channel.send("ZHCK ?");
       // m.edit(`Pong! La latence est de ${m.createdTimestamp - message.createdTimestamp}ms et la latence de l'API est de ${Math.round(client.ping)}ms.`);
        m.edit(`La zhck est la team d'élite de la shck. Pour en savoir plus, go dans <#642763687068827658> `);
        console.log("La commande zhck a été utilisé par " + message.author.username + " sur le serveur " + message.guild + " dans le salon " + message.channel.name + " !")
}
module.exports.help = {
  name:"zhck"
}
