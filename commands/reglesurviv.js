const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;

var embed = new Discord.RichEmbed()

  .setColor("#000000")
  .setTitle("**__RÈGLES SURVIV.IO DE LA TEAM SHCK :__**", "_ _")
  .addField("_ _", "*Si ses règles ne sont pas respecté, vous serez sanctionner.*\n\n_ _")
  .addField("**__LE CHEAT :__**", "\n\n_ _")
  .addField("**Art 1.**", "Si vous installez un hack, et que vous l'utilisez quelques heures juste pour essayer, puis que vous le désinstaller, vous serez quand même sanctionner, de normalement un tempban de quelques semaines.")
  .addField("**Art 2.**", "Toute forme de hack sera banni de la team SHCK.")
  .addField("**Art 3.**", "Si vous avez arrêter de hack après votre bannissement de la SHCK, vous serez debanni au bout de quelques mois. Mais il ne faut pas recommencer sinon vous serez banni a vie !\n\n\n_ _")
  .addField("**__LES TOURNOIS :__**", "\n\n_ _")
  .addField("**Art 1.**", "Les tournois se passeront dans le salon vocal TOURNOI, et dans le salon textuel <#680517505382481980>")
  .addField("**Art 2.**", "La plupart du temps, il y a 10 manches")
  .addField("**Art 3.**", "Au début de chaque tournois il y a 2 games d'échauffement.")
  .addField("**Art 4.**", "La mention <@&668101750317907980> est utilisable par les organisateurs et le staff, si vous envoyer un ping notif-tournoi vous serez sanctionner.")
  .addField("**Art 5.**", "Les infos sur le tournoi seront toujours dans <#681213129413230623>\n\n\n_ _")
  .addField("**__LES TEAMERS :__**","\n\n_ _")
  .addField("**Art 1.**", "Teamer est très mal vue sur le serveur, si un SHCK vous voit teamer et vous report, vous serez en général sanctionner")
  .addField("**Art 2.**", "Vous pouvez malgré tout ne pas vous entretuer quand vous vous retrouver ensembles pour 1v1, mais vous ne devez pas vous allier pour tuer les randoms qui viennent vous déranger (même si sa peux être chiant)")
  .setFooter("Pensez à lire le règlement en entier et valider avec l'emote en réaction.")

      message.channel.send(embed)

       console.log ("La commande rd a été utilisée");
}
module.exports.help = {
    name: "reglesurviv"
}
