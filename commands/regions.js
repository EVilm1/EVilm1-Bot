const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;

var embed = new Discord.RichEmbed()

  .setColor("#C51D1D")
  .setTitle("**Voici touts les regions de surviv.io :**", "-")
  .addField("**Liens EU :**", "[EU OUEST](https://surviv.io/?region=eu&zone=fra)\n[Polonais](https://surviv.io/?region=eu&zone=waw)")
  .addField("**Liens NA :**", "[NA EST](https://surviv.io/?region=na&zone=nyc)\n[NA CENTRAL](https://surviv.io/?region=na&zone=chi)\n[NA OUEST](https://surviv.io/?region=na&zone=sfo)\n[NA SUD EST](https://surviv.io/?region=na&zone=mia)")
  .addField("**Liens SA :**", "[Bresil](https://surviv.io/?region=sa&zone=sao)")
  .addField("**Liens AS :**", "[Japon](https://surviv.io/?region=as&zone=nrt)\n[Vietnam](https://surviv.io/?region=as&zone=vnm)\n[Singapour](https://surviv.io/?region=as&zone=sgp)")
  .addField("**Liens KO :**", "[KO SUD](https://surviv.io/?region=ko&zone=sel)")
  .addField("**Liens twitch :**", "[Sans la bande blanche](https://c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/index_twitch.html)\n[Avec la bande blanche](https://www.twitch.tv/popout/survivio/extensions/c79geyxwmp1zpas3qxbddzrtytffta/panel)")

      message.channel.send(embed)

       console.log ("La commande regions a été utilisée");
}
module.exports.help = {
    name: "regions"
}
