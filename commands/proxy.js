const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;

var embed = new Discord.RichEmbed()

  .setColor("#C51D1D")
  .setTitle("**Voici tout les proxy surviv.io officiels :**", "-")
  .addField("**Liens :** ", "https://surviv2.io\nhttps://2dbattleroyale.com\nhttps://2dbattleroyale.org\nhttps://piearesquared.info\nhttps://thecircleisclosing.com\nhttps://secantsecant.com\nhttps://parmainitiative.com\nhttps://ot38.club\nhttps://drchandlertallow.com\nhttps://rarepotato.com\nhttps://archimedesofsyracuse.info\nhttps://nevelskoygroup.com\nhttps://kugahi.com\nhttps://kugaheavyindustry.com\nhttps://chandlertallowmd.com")

      message.channel.send(embed)

       console.log ("La commande proxy a été utilisée sur SHCK");
}
module.exports.help = {
    name: "proxy"
}
