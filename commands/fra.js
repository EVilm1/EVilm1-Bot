const Discord = require("discord.js");
config = require("../config.json");

module.exports.run = (message, args, client, time) => {

    message.delete();
    message.channel.send(new Discord.MessageEmbed()
        .setColor("#804CFF")
        .setTitle("**Voici le serveur surviv.io Frankfurt :**")
        .setDescription("**Lien** : [Serveur surviv.io Europe](https://surviv.io/?region=eu&zone=fra)"))

    client.channels.cache.get(config.channelLogs).send(new Discord.MessageEmbed()
        .setColor('#664DFF')
        .setDescription(`${time} La commande "${config.prefix}fra" a été utilisée par ${message.author} (id:${message.author.id}) dans le salon ${message.channel}`))
    console.log(`${time} La commande "${config.prefix}fra" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
}

module.exports.help = {
    name: "fra"
}