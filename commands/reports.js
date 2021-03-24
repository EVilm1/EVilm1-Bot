const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;
        let rUser = message.mentions.members.first();
        if(!rUser) return message.channel.send("Veuillez mentionner un utilisateur.");
        let rreason = args.slice(2).join(" ");
        if (!rreason) return message.channel.send('Veuillez indiquer une raison.');
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Report")
        .setColor("000000")
        .addField("Utilisateur signalé :", `${rUser} avec l'ID: ${rUser.id}`)
        .addField("Signalé par :", `${message.author} avec l'ID: ${message.author.id}`)
        .addField("Salon :", message.channel)
        .addField("Date :", message.createdAt)
        .addField("Raison :", rreason);

        let reportschannel = message.guild.channels.find("name", "reports");
        if(!reportschannel) return message.channel.send("Aucun salon ``reports`` trouvé !");

        message.delete();
        reportschannel.send(reportEmbed);
    console.log("la commande report a été utilisée sur le serveur " + message.guild)
        return;
      }

module.exports.help = {
    name: "report"
    }
