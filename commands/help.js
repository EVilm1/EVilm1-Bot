const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;

var embed = new Discord.RichEmbed()

  .setColor("#000000")
  .setTitle("**Commande help de SHCK Bot :**", "-")
  .addField("**Commandes principales :**\n", "-")
  .addField("`#zhck`", "Description ZHCK.")
  .addField("`#shcouik`", "Pour devenir un castor tout mignon avec même des oreilles et une queue plate!")
  .addField("`#report @user [raison]`", "Report un membre du serveur, sa peut être pour cheat, mais aussi pour des plaintes sur le serveur (pub mp, insultes etc...) Le mieux est de mettre une preuve dans votre report (un lien de screen, de vidéo...)")
  .addField("**Commandes de jeux :**\n", "-")
  .addField("`#notif-eu`", "Notifier les joueurs surviv.io EU.\n")
  .addField("`#notif-na`", "Notifier les joueurs surviv.io NA.\n\n")
  .addField("**Liens :**\n", "-")
  .addField("`#fra`", "Le lien du serveur surviv.io frankfurt.")
  .addField("`#waw`", "Le lien du serveur surviv.io polonais.")
  .addField("`#twitch`", "Le lien du serveur surviv.io semi-privé ( NA ) twitch.")
  .addField("`#proxy`", "Avoir tout les proxy officiels de surviv.io.")
  .addField("`#regions`", "Avoir les serveurs principales de surviv.io.")
  .addField("**Commandes SHCK Game :**\n", "-")
  .addField("`#8ball [texte]`", "Poser une question au bot.")
  .addField("`#rpg`", "Un message random en rapport avec surviv.io.")
  .addField("`#invite`", "Le lien d'invitation de SHCK Game.")
  .addField("`#avatar @user`", "Récuperer l'avatar d'un utilisateur.")
  .addField("`#cat / #dog`", "Avoir une image de chien ou de chat.")
  .addField("`#imgsay [texte]`", "Ecrire un texte avec une image.")
  .addField("**Commandes du staff :**\n", "-")
  .addField("`#verify @user`", "Pour verifiez les membres du serveur en cours de vérification.")
  .addField("`#clear [1-100]`", "Supprimer une grande quantité de messages.")
  .setFooter("SHCK Bot | By 🍪 YoseidonMU-SHCK#2412 | SHCK Game | By Canne ツ#6192")

      message.channel.send(embed)

       console.log ("La commande help a été utilisée");
}
module.exports.help = {
    name: "help"
}
