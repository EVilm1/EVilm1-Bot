const Discord = require("discord.js");
config = require("../config.json");

module.exports.run = (message, args, client, time) => {
    
    message.delete();
    message.channel.send(new Discord.MessageEmbed()
        .setColor("#664DFF")
        .setTitle("**Voici le serveur semi-privé twitch !**")
        .setDescription("**Lien :** [Serveur surviv.io Twitch (sans bandeau)](https://c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/index_twitch.html)"))
    console.log (`${time} La commande "${config.prefix}twitch" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    client.channels.cache.get(config.channelLogs).send(new Discord.MessageEmbed()
        .setColor('#664DFF')
        .setDescription(`${time} La commande "${config.prefix}twitch" a été utilisée par ${message.author} (id:${message.author.id}) dans le salon ${message.channel}`))
}

module.exports.help = {
    name: "twitch"
}