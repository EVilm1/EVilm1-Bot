const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;

let role = message.guild.roles.find(r => r.name === "CASTOR");
let member = message.member;

member.addRole(role).catch(console.error);
message.channel.send("Tu es désormais un castor. Ce role est très précieux, fais-en bon usage. Si la responsabilité de l'avoir est trop lourde, demande à un administrateur de te le retirer. BON COURAGE!")

         console.log ("La commande de castor a été utilisée !");
  }
  module.exports.help = {
      name: "shcouik"
  }
