const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;
     if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
    let count = parseInt(args[1])
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer.")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide.")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100.")
        message.channel.send("Des messages on été supprimés.")
        message.channel.bulkDelete(count + 2, true)


}
module.exports.help = {
    name: "clear"
    }
