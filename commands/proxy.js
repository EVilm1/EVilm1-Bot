const Discord = require("discord.js");
config = require("../config.json");

module.exports.run = (message, args, client, time) => {

    message.delete();
    message.channel.send(new Discord.MessageEmbed()
        .setColor("#664DFF")
        .setTitle("**Voici tous les proxy Surviv.io officiels :**")
        .addField("**Liens :** ", "https://surviv.io\nhttps://surviv2.io\nhttps://2dbattleroyale.com\nhttps://2dbattleroyale.org\nhttps://piearesquared.info\nhttps://thecircleisclosing.com\nhttps://secantsecant.com\nhttps://parmainitiative.com\nhttps://ot38.club\nhttps://drchandlertallow.com\nhttps://rarepotato.com\nhttps://archimedesofsyracuse.info\nhttps://nevelskoygroup.com\nhttps://kugahi.com\nhttps://kugaheavyindustry.com\nhttps://chandlertallowmd.com"))

    client.channels.cache.get(config.channelLogs).send(new Discord.MessageEmbed()
        .setColor('#664DFF')
        .setDescription(`${time} La commande "${config.prefix}proxy" a été utilisée par ${message.author} (id:${message.author.id}) dans le salon ${message.channel}`))
    console.log(`${time} La commande "${config.prefix}proxy" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
}

module.exports.help = {
    name: "proxy"
}