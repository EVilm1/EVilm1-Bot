const Discord = require("discord.js");
config = require("../config.json");

module.exports.run = (message, args, client, time) => {

    const input = args[0]
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send(`Vous n'avez pas la permission d'exécuter cette commande ${message.author} ! \`(manage_messages)\``,).then((sent) => {
            sent.delete({ timeout: 3000 }).then(() => {
                message.delete()
            }).catch(err => { throw err })
        });
    }
    if (isNaN(input)) {
        return message.channel.send('Aucun nombre précisé, veuiller entrer le nombre de message(s) à supprimer').then((sent) => {
            sent.delete({ timeout: 2500 }).then(() => {
                message.delete()
            }).catch(err => { throw err })
        });
    }
    if (Number(input) < 0 || Number(input) == 0) {
        return message.channel.send('Entrez un nombre valide').then((sent) => {
            sent.delete({ timeout: 2500 }).then(() => {
                message.delete()
            }).catch(err => { throw err })
        });
    }
    if (Number(input) > 100) {
        return message.channel.send('Entrez un nombre entre 1 et 100').then((sent) => {
            sent.delete({ timeout: 2500 }).then(() => {
                message.delete()
            }).catch(err => { throw err })
        });
    }
    const amount = Number(input) >= 100 ? 100 : Number(input) + 1;

    message.channel.bulkDelete(amount, true).then((_message) => {

        repNbr = _message.size - 1 == 1 ? `message supprimé` : `messages supprimés`
        message.channel.send(`${_message.size - 1} ${repNbr}`).then((sent) => {
            sent.delete({ timeout: 2000 }).then(() => {
                logs(NbrMsgLog = _message.size - 1)
            }).catch(err => { throw err })
        });
    });

    function logs(NbrMsgLog) {
        console.log(`${time} La commande "${config.prefix}clear ${NbrMsgLog}" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
        client.channels.cache.get(config.channelLogs).send(new Discord.MessageEmbed()
            .setColor('#664DFF')
            .setDescription(`${time} La commande "${config.prefix}clear ${NbrMsgLog}" a été utilisée par ${message.author} (id:${message.author.id}) dans le salon ${message.channel}`));
    }
}

module.exports.help = {
    name: "clear"
}