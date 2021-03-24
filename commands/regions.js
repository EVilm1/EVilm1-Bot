const Discord = require("discord.js");
config = require("../config.json");

module.exports.run = (message, args, client, time) => {

    message.delete();
    message.channel.send(new Discord.MessageEmbed()
        .setColor("#664DFF")
        .setTitle("**Voici tous les serveurs surviv.io :**")
        .addField("**Liens EU (Europe) :**", "[EU OUEST](https://surviv.io/?region=eu&zone=fra)\n[Polonais](https://surviv.io/?region=eu&zone=waw)")
        .addField("**Liens NA (North America) :**", "[NA EST](https://surviv.io/?region=na&zone=nyc)\n[NA CENTRAL](https://surviv.io/?region=na&zone=chi)\n[NA OUEST](https://surviv.io/?region=na&zone=sfo)\n[NA SUD EST](https://surviv.io/?region=na&zone=mia)")
        .addField("**Liens SA (South America) :**", "[Bresil](https://surviv.io/?region=sa&zone=sao)")
        .addField("**Liens AS (Asia) :**", "[Japon](https://surviv.io/?region=as&zone=nrt)\n[Vietnam](https://surviv.io/?region=as&zone=vnm)\n[Singapour](https://surviv.io/?region=as&zone=sgp)")
        .addField("**Liens KO (South Korea) :**", "[KO SUD](https://surviv.io/?region=ko&zone=sel)")
        .addField("**Liens Twitch :**", "[Twitch 1 (sans bandeau)](https://c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/index_twitch.html)\n[Twitch 2 (avec bandeau)](https://www.twitch.tv/popout/survivio/extensions/c79geyxwmp1zpas3qxbddzrtytffta/panel)"))

    client.channels.cache.get(config.channelLogs).send(new Discord.MessageEmbed()
        .setColor('#664DFF')
        .setDescription(`${time} La commande "${config.prefix}regions" a été utilisée par ${message.author} (id:${message.author.id}) dans le salon ${message.channel}`))
    console.log(`${time} La commande "${config.prefix}regions" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
}

module.exports.help = {
    name: "regions"
}