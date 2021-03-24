const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {const botconfig = require("../config.json");
if(!message.content.startsWith(botconfig.prefix)) return;

let roleToAdd = message.guild.roles.find(r => r.name === "Simples Visiteurs");
let roleToRemove = message.guild.roles.find(r => r.name === "Vérification");
let executer = message.member;ze
let member = message.mentions.members.first();

if(executer.hasPermission("MANAGE_MESSAGES")) {
  member.addRole(roleToAdd).catch(console.error);
  member.removeRole(roleToRemove).catch(console.error);
  message.channel.send(member + ' a été vérifié.')
  console.log("La commande verify a été utilisée par " + executer + " sur " + member)
}
else {
  message.channel.send("Tu n'as pas le droit d'executer cette commande")
  console.log("La commande verify a été utilisée par " + executer + " qui n'avait pas le droit de le faire")
}

         console.log ("La commande de verify a été utilisée");
  }
  module.exports.help = {
      name: "verify"
  }
