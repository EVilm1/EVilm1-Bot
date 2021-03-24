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

    mention0 = args[0]
    const roleNameOrId = args.splice(1).join(" ");
    const member = message.mentions.members.first();

    if (!mention0.startsWith('<@')) {
        return message.channel.send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`**Erreur syntaxe :** Veuillez renseigner un membre ${message.author} !
                **Syntaxe :** *${config.prefix}add-role [@user] [role ou id]*`))
    }
    else if (!roleNameOrId) {
        return message.channel.send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`**Erreur syntaxe**, Veuillez renseigner un role ${message.author} !
                **Syntaxe** : *${config.prefix}add-role [@user] [role ou id]*`))
    }
    var regExp = /[a-zA-Z]/g;
    if (regExp.test(roleNameOrId)) {
        var NewRole = message.guild.roles.cache.find(r => r.name.toLowerCase() === roleNameOrId.toLowerCase());
    } else {
        var NewRole = message.guild.roles.cache.find(r => r.id.toLowerCase() === roleNameOrId.toLowerCase());
    }
    if (!NewRole) {
        return message.channel.send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`Aucun résultat pour ce role ${message.author} !`))
    }
    if (!member.roles.cache.some(role => role.id === NewRole.id)) {
        member.roles.add(NewRole.id);
        message.channel.send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`Le role ${NewRole} a été ajouté à ${member}`))
        console.log(`${time} La commande "${config.prefix}add-role" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}, le role "${NewRole.name}" a été ajouté à ${member.displayName} (id:${member.id})`);
        client.channels.cache.get(config.channelLogs).send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`${time} La commande "${config.prefix}add-role" a été utilisée par ${message.author} (id:${message.author.id}) dans le salon ${message.channel}, le role ${NewRole} a été ajouté à ${member} (id:${member.id})`))
    } else {
        message.channel.send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`${member} possede déja le role ${NewRole} !`))
    }
}

module.exports.help = {
    name: "add-role"
}