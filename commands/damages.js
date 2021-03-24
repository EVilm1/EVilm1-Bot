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
    const nbrDeg = args[1]
    if (!args[0].startsWith('<@')) {
        return message.channel.send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`**Erreur syntaxe :** Veuillez renseigner un membre ${message.author} !
                **Syntaxe :** *${config.prefix}d [@user] [Dégâts (1000 - 4500)]*`))
    }
    else if (!nbrDeg || nbrDeg != 1000 && nbrDeg != 1500 && nbrDeg != 2000 && nbrDeg != 2500 && nbrDeg != 3000 && nbrDeg != 3500 && nbrDeg != 4000 && nbrDeg != 4500) {
        return message.channel.send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`**Erreur syntaxe**, Veuillez renseigner les dégâts entre **1000** et **4500** (par palier de 500)${message.author} !
                **Syntaxe** : *${config.prefix}d [@user] [Dégâts (1000 - 4500)]*`)).then((sent) => {
                sent.delete({ timeout: 6000 }).then(() => {
                    message.delete()
                }).catch(err => { throw err })
            });
    }
    const rmvRoles = []
    for (let i = 1000; i <= 4500; i = i += 500) {
        rmvRoles.push(message.guild.roles.cache.find(r => r.name == `+${i} Dégâts`).id)
    }
    var newRole = message.guild.roles.cache.find(r => r.name === `+${nbrDeg} Dégâts`);
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
        console.log(`${time} La commande "${config.prefix}d" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}, le role "${newRole.name}" a été ajouté à ${member.displayName} (id:${member.id})`);
        client.channels.cache.get(config.channelLogs).send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`${time} La commande "${config.prefix}d" a été utilisée par ${message.author} (id:${message.author.id}) dans le salon ${message.channel}, le role ${newRole} a été ajouté à ${member} (id:${member.id})`))
    } else {
        message.channel.send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`${member} possede déja le role ${newRole} !`))
    }
}

module.exports.help = {
    name: "d"
}