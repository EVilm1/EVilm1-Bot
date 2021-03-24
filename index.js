const { callbackify } = require('util');
//import {DiscordInteractions} from "slash-commands";

const Discord = require('discord.js'),
    client = new Discord.Client({
        partials: ['MESSAGE', 'REACTION']
    }),
    config = require('./config.json'),
    fs = require('fs')

client.login(config.token)
client.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => { // Pour chaque fichier dans le dossier commands

    if (err) console.log(err); // En cas d'erreur
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Impossible de trouver commandes !");
        return;
    }

    jsfile.forEach((f) => { // Pour chaque fichier
        delete require.cache[require.resolve(`./commands/${f}`)]; // On efface la commande si elle a déjà été importée
        let props = require(`./commands/${f}`); // On importe la commande

        console.log(`${f} chargé !`); // La commande est chargée
        client.commands.set(props.help.name, props); // On importe la config de la commande pour savoir à quoi elle correspond
    })
})

client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return;

    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return;
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return;
    if (command.guildOnly && !message.guild) return message.channel.send('Cette commande ne peut être utilisée que dans un serveur')

    d = new Date();
    time = `(${String(d.getHours()).length == 2 ? `${d.getHours()}` : `0${d.getHours()}`}h${String(d.getMinutes()).length == 2 ? `${d.getMinutes()}` : `0${d.getMinutes()}`})`
    command.run(message, args, client, time)
})

/* client.on('guildMemberAdd', member => {

    let role = member.guild.roles.cache.find(r => r.id == "798281103688335420"); //ID role a ajouter au nouvel utilisateur.
    let channel = member.guild.channels.cache.get("798283292985524244"); //ID channel bienvenue
    member.roles.add(role.id).catch(() => console.log("Erreur pour ajouter le role"));
    let embed = new Discord.MessageEmbed()
        .setColor('0D7FFF')
        .setTitle("Un nouveau membre !")  //.setTitle(`<@${member.id}> a rejoint le serveur.`) ou .setTitle(member+ " a rejoint le serveur.")
        .setDescription(`<@${member.id}> a rejoint le serveur. Nous sommes désormais ${member.guild.memberCount} ! 😊`)
    channel.send(embed).catch(() => console.log("Erreur pour ajouter le message dans le channel"));
})

client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(new Discord.MessageEmbed()
        .setDescription(`${member.user.tag} a quitté le serveur... 😢`)
        .setColor('0D7FFF'))
})

client.on('messageReactionAdd', (reaction, user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
    else reaction.users.remove(user)
})

client.on('messageReactionRemove', (reaction, user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem || !reactionRoleElem.removable) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.remove(emoji.roles)
}) */

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`Evilm1's Bot | Préfixe : ${config.prefix}`); // On défini le statut du bot
    client.channels.cache.get(config.channelLogs).send(new Discord.MessageEmbed()
        .setColor('#664DFF')
        .setDescription(`${client.users.cache.find(user => user.username == "EVilm1's BOT")} est connecté au serveur !`))
});