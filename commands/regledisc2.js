const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;

var embed = new Discord.RichEmbed()

  .setColor("#000000")
  .setTitle("**__RÈGLES DU SERVEUR DISCORD SHCK :__**", "_ _")
  .addField("_ _", "*Si vous ne respecté pas ces règles, le staff prendra une sanction en fonction de vos torts. Si vous n’êtes pas d’accord avec la sanction, vous pouvez contester la sanction (poliment bien sûr) mais le staff aura toujours le dernier mot en cas de désaccord.*\n\n_ _")
  .addField("**__SALONS TEXTUELS :__**", "Les règles à respecter dans le chat\n\n_ _")
  .addField("**Art 1.**", "Les salons sont faits pour être respectés, alors respectez-les en fonction du nom et de la description d’un salon.")
  .addField("**Art 2.**", "Les rôles <@&698208360343928862> et <@&698208511514902618> permettent d’être notifié et de notifier les membres pour pouvoir jouer ensemble. Pour cela, rendez-vous dans <#593478255231631360> et faites ``#notif-eu`` ou ``#notif-na``. Les commandes sont utilisables 1 fois toutes les 1h30, et tout abus sera sanctionné. Il est bien évidemment interdit de mentionner le rôle sans utiliser le bot.")
  .addField("**Art 3.**", "Merci d’être (évidemment) poli et courtois entre vous. S’il y a une embrouille pour n’importe quelle raison, merci de régler tout ça en messages privés discord plutôt que dans les salons avec tout le monde.")
  .addField("**Art 4.**", "Les commandes de bots sont a effectuer uniquement dans <#593488181614346271> et <#681135070848745494>. Si vous tapez une commande dans un autre salon, vous serez sanctionner.")
  .addField("**Art 5.**", "Les insultes et le langage injurieux envers les autres membres n’est pas toléré. Si un membre de la team vous insulte ou vous provoque et que le staff n’a pas vu, n'hésitez pas à le report avec la commande ``#report @user [raison]`` *(mettre un lien de screen est le bienvenue)* pour que le staff puisse prendre la bonne décision. Tout troll sera sanctionner.")
  .addField("**Art 6.**", "Le spam et le flood sont à éviter, et les tentatives de raid sont immédiatement bannis.")
  .addField("**Art 7.**", "La pub de serveur en mp et sur les salons du serveursest interdite, il existe un Channel réservé à cela.\n**Voici les sanctions en cas de pubs MP :**\n**1 pub MP :** warn\n**2 pubs MP :** warn + privé de pubs\n**3 pubs MP :** tempban une semaine\n**4 pubs MP :** ban a vie")
  .addField("**Art 8.**", "Merci également d'éviter les mentions inutiles, personne n'aime ça.")
  .addField("**Art 9.**", "Si un staff juge un ping staff inutile, libre a lui de sanctionner.")
  .addField("**Art 10.**", "L’image de profil et le pseudo doivent être respectueux envers les membres du serveur. Kick immédiat si un membre ne souhaite pas changer malgré les demandes du staff. L’usurpation d’identité est punie par la loi, donc il en est de même dans ce serveur.")
  .addField("**Art 11.**", "Les emojis, ou contenu à caractère sexuel seront systématiquement sanctionnés sévèrement, d'un mute de 12h minimum")
  .addField("**Art 12.**", "Toute personne refusant de coopérer avec le staff dans une affaire contre un sujet, sont immédiatement considéré comme coopérant avec ce sujet et donc encours les même sanction que ce sujet. Des sanctions provisoires peuvent s'appliquer jusqu'à la résolution de cette affaire.\n\n\n_ _")
  .addField("**__SALONS VOCAUX :__**", "Les règles a respecté en vocal\n\n_ _")
  .addField("**Art 1.**", "Les modificateurs de voix sont interdits, si un staff vous demande de l'enlever et que vous refuser vous ne pourrez plus parler.")
  .addField("**Art 2.**", "Merci de bien évidement être poli est courtois avec les autres gens en vocal.")
  .addField("**Art 3.**", "Durant les tournois, tout le monde est mute, sa ne sert a rien de demander a être demute, le staff ou l'organisateur refusera.")
  .addField("**Art 4.**", "Tout screamer en vocal est interdit.")
  .addField("**Art 5.**", "Pour écouter de la musique vous devez être dans le vocal 『:notes:』Musique ou 『:notes:』Musique 2, Si vous voulez écouter de la musique et en même temps parler a quelqu'un ou alors si tout les salons de musique sont plein, vous pouvez exceptionnellement allez dans les autres vocaux DU MOMENT QUE VOUS NE GENEZ PAS.")
  .setFooter("Pensez à lire le règlement en entier et valider avec l'emote en réaction.")

      message.channel.send(embed)

       console.log ("La commande rd a été utilisée");
}
module.exports.help = {
    name: "regledisc"
}
