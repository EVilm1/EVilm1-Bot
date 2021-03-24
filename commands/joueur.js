const Discord = require("discord.js");
config = require("../config.json");
const { Util } = require('discord.js')

module.exports.run = (message, args, client, time) => {

    if (!args[0] || args[0].toLowerCase() != "pc" && args[0].toLowerCase() != "mobile") {
        return message.channel.send(`Aucun argument, veuillez renseigner **[PC]** ou **[Mobile]** ${message.author} !`);
    }
    rolePC = message.guild.roles.cache.find(r => r.name === "Joueur PC");
    roleMobile = message.guild.roles.cache.find(r => r.name === "Joueur Mobile");
    if (!rolePC || !roleMobile) { return message.channel.send(`Aucun rôle trouvé ${message.author} !`) }
    if (args[0].toLowerCase() == "pc") {
        var newRole = rolePC
        if (message.member.roles.cache.some(role => role.name === "Joueur Mobile")) {
            message.member.roles.remove(roleMobile.id)
        }
    }
    if (args[0].toLowerCase() == "mobile") {
        var newRole = roleMobile
        if (message.member.roles.cache.some(role => role.name === "Joueur PC")) {
            message.member.roles.remove(rolePC.id)
        }
    }
    message.member.roles.add(newRole.id).then(() => {
        message.channel.send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`${message.author}, tu es désormais un ${newRole} !`))
        console.log(`La commande "${config.prefix}joueur ${args[0]}" a été utilisée dans le salon #${message.channel.name}, le role "${newRole.name}" a été ajouté à ${message.author.username} (id:${message.author.id})`);
        client.channels.cache.get(config.channelLogs).send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`${time} La commande "${config.prefix}joueur ${args[0]}" a été utilisée dans le salon ${message.channel}, le role "${newRole}" a été ajouté à ${message.author} (id:${message.author.id})`));
    });
}

module.exports.help = {
    name: "joueur"
}