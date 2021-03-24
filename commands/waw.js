const Discord = require("discord.js");
config = require("../config.json");

module.exports.run = (message, args, client, time) => {

    message.delete();
    message.channel.send(new Discord.MessageEmbed()
        .setColor("#664DFF")
        .setTitle("**Voici le serveur surviv.io Polonais :**")
        .setDescription("**Lien :** [Serveur surviv.io Polonais](https://surviv.io/?region=eu&zone=waw)"))
    console.log (`${time} La commande "${config.prefix}waw" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    client.channels.cache.get(config.channelLogs).send(new Discord.MessageEmbed()
        .setColor('#664DFF')
        .setDescription(`${time} La commande "${config.prefix}waw" a été utilisée par ${message.author} (id:${message.author.id}) dans le salon ${message.channel}`))
}

module.exports.help = {
    name: "waw"
}