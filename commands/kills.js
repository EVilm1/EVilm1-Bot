const Discord = require("discord.js");
config = require("../config.json");

module.exports.run = (message, args, client, time) => {

    if (!message.member.hasPermission('MANAGE_ROLES')) {
        return message.channel.send(`Vous n'avez pas la permission d'exécuter cette commande ${message.author} ! \`(manage_roles)\``,).then((sent) => {
            sent.delete({ timeout: 3000 }).then(() => {
                message.delete()
            }).catch(err => { throw err })
        });
    }
    if (!args.length) {
        return message.channel.send(`Aucun arguments ${message.author} !`);
    }
    const member = message.mentions.members.first();
    const nbrKills = args[1]
    if (!args[0].startsWith('<@')) {
        return message.channel.send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`**Erreur syntaxe :** Veuillez renseigner un membre ${message.author} !
                **Syntaxe :** *${config.prefix}k [@user] [Nombre de kills (0 - 33)]*`))
    }
    else if (!nbrKills || nbrKills > 33 || nbrKills < 10) {
        return message.channel.send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`**Erreur syntaxe**, Veuillez renseigner un nombre de kills entre 10 et 33 ${message.author} !
                **Syntaxe** : *${config.prefix}k [@user] [Nombre de kills (10 - 33)]*`)).then((sent) => {
                sent.delete({ timeout: 6000 }).then(() => {
                    message.delete()
                }).catch(err => { throw err })
            });
    }
    const rmvRoles = []
    for (let i = 10; i <= 33; i++) {
        rmvRoles.push(message.guild.roles.cache.find(r => r.name === `${i} KILLS`).id)
    }
    var newRole = message.guild.roles.cache.find(r => r.name === `${nbrKills} KILLS`);
    if (!newRole) {
        return message.channel.send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`Aucun résultat pour ce role ${message.author} !`))
    }
    if (!member.roles.cache.some(r => r.id === newRole.id)) {
        member.roles.remove(rmvRoles).then(() => {
            member.roles.add(newRole.id)
        }).catch(err => { throw err })
        message.channel.send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`Le role ${newRole} a été ajouté à ${member}`))
        console.log(`${time} La commande "${config.prefix}k" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}, le role "${newRole.name}" a été ajouté à ${member.displayName} (id:${member.id})`);
        client.channels.cache.get(config.channelLogs).send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`${time} La commande "${config.prefix}k" a été utilisée par ${message.author} (id:${message.author.id}) dans le salon ${message.channel}, le role ${newRole} a été ajouté à ${member} (id:${member.id})`))
    } else {
        message.channel.send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`${member} possede déja le role ${newRole} !`))
    }
}
module.exports.help = {
    name: "k"
}