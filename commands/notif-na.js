const Discord = require("discord.js");
config = require("../config.json");
const { Util } = require('discord.js')

const executes = new Discord.Collection();

function checkExecute(message, client, time) {
    
    if (executes.has(message.guild.id)) {
        const executeGuildData = executes.get(message.guild.id);
        const timeLeft = executeGuildData.date - new Date().getTime();
        if (timeLeft <= 0) {
            if (executes.delete(message.guild.id)) {
                checkExecute(message);
                return;
            }
            throw 'Something went wrong';
        }
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        message.channel.send(`The notif is in cooldown, you can execute it in **${hours <= 0 ? '' : `${hours} hour and `}${minutes <= 0 ? '' : `${minutes}`} ${minutes > 1 ? 'minutes' : `minute`}** !`).then((sent) => {
            setTimeout(() => {
                sent.delete();
                message.delete()
            }, 5000);
        });
        return;
    }
    notifNA = message.guild.roles.cache.find(r => r.name === "Notif'Jeu NA");
    message.channel.send(`**${notifNA} Someone want to play with ${message.author} ?**`);
    executes.set(message.guild.id, {
        date: new Date().getTime() + 5400000,
    });
    logs(message, client, time);
}

function logs(message, client, time) {
    console.log(`${time} La commande "${config.prefix}notif-na" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    client.channels.cache.get(config.channelLogs).send(new Discord.MessageEmbed()
        .setColor('#664DFF')
        .setDescription(`${time} La commande "${config.prefix}notif-na" a été utilisée par ${message.author} (id:${message.author.id}) dans le salon ${message.channel}`))
}

module.exports.run = (message, args, client, time) => {
    checkExecute(message, client, time)
}

module.exports.help = {
    name: "notif-na"
}