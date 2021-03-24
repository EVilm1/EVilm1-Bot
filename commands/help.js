const Discord = require("discord.js");
config = require("../config.json");

module.exports.run = (message, args, client, time) => {
    if (!args[0]) {
        //message.delete();
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Toutes les commandes de SHCK BOT :**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`Pour toute info supplémentaire faites : *${config.prefix}help [commande]*\n([ ] = argument qui suit n'importe quelle commande)`)
            .addFields(
                { name: 'Commandes Régions :', value: `
                **${config.prefix}fra :** Lien surviv.io Europe
                **${config.prefix}waw :** Lien surviv.io Polonais
                **${config.prefix}twitch :** Les 2 liens partie privée twitch
                **${config.prefix}regions :** Tous les serveurs surviv.io selon les régions
                **${config.prefix}proxy :** Tous les liens alternatifs (proxy) surviv.io`},
                
                { name: 'Commandes Notifications jeu / in-game :', value: `
                **${config.prefix}notif-eu :** Envoi une notification de jeu Europe <@&821097817111658523>
                **${config.prefix}notif-na :** Envoi une notification de jeu Amérique <@&821097817111658522>
                **${config.prefix}scout :** Envoi un message clair "SCOUTING EN COURS"
                **${config.prefix}join :** Envoi un message clair "JOIN !"`},

                { name: 'Commandes Give rôles :', value: `
                **${config.prefix}joueur :** Give un des deux rôle joueur : "PC" ou "Mobile"`},
                
                { name: 'Commandes Admin :', value: `
                **${config.prefix}add-role :** Ajoute un rôle à un membre
                **${config.prefix}rmv-role :** Retire un rôle d'un membre
                **${config.prefix}k :** Change le rôle "kills" d'un membre
                **${config.prefix}d :** Change le rôle "dégats" d'un membre`})
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }

    //Commandes Régions :

    if (args[0] == "fra") {
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Commande de SHCK BOT :  /help fra**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`**Description :**  Lien surviv.io Europe\n**Syntaxe :**  *${config.prefix}fra*`)
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help fra" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }
    if (args[0] == "waw") {
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Commande de SHCK BOT :  /help waw**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`**Description :**  Lien surviv.io Polonais\n**Syntaxe :**  *${config.prefix}waw*`)
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help waw" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }
    if (args[0] == "twitch") {
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Commande de SHCK BOT :  /help twitch**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`**Description :**  Les 2 liens de partie privée twitch\n**Syntaxe :**  *${config.prefix}twitch*`)
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help twitch" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }
    if (args[0] == "regions") {
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Commande de SHCK BOT :  /help regions**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`**Description :**  Tous les serveurs surviv.io selon les régions\n**Syntaxe :**  *${config.prefix}regions*`)
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help regions" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }
    if (args[0] == "proxy") {
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Commande de SHCK BOT :  /help proxy**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`**Description :**  Tous les liens alternatifs (proxy) surviv.io, (permet d'acceder au jeu via une autre url)\n**Syntaxe :**  *${config.prefix}proxy*`)
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help proxy" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }

    //Commandes Notifications jeu / in-game :

    if (args[0] == "notif-eu") {
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Commande de SHCK BOT :  /help notif-eu**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`**Description :**  Envoi une notification de jeu aux joueurs Europe (avec le role <@&821097817111658523>)\n**Syntaxe :**  *${config.prefix}notif-eu*`)
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help notif-eu" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }
    if (args[0] == "notif-na") {
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Commande de SHCK BOT :  /help notif-na**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`**Description :**  Envoi une notification de jeu aux joueurs Americains (avec le role <@&821097817111658522>)\n**Syntaxe :**  *${config.prefix}notif-na*`)
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help notif-na" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }
    if (args[0] == "scout") {
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Commande de SHCK BOT :  /help s**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`**Description :**  Envoi un message mis en avant **"SCOUTING EN COURS"**, permet d'informer les joueurs que le "scouter" est en train de chercher une partie.\n**Syntaxe :**  *${config.prefix}scout*`)
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help scout" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }
    if (args[0] == "join") {
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Commande de SHCK BOT :  /help join**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`**Description :**  Envoi un message mis en avant **"JOIN !!!"**, permet d'informer les joueurs qu'il faut rejoindre la partie.\n**Syntaxe :**  *${config.prefix}join*`)
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help join" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }

    //Commandes Give rôles :

    if (args[0] == "joueur") {
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Commande de SHCK BOT :  /help joueur**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`**Description :**  Give un des deux rôles : \n"Joueur PC" __ou__ "Joueur Mobile" \n**Syntaxe :**  *${config.prefix}joueur [PC] [Mobile]*`)
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help joueur" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }

    //Commandes Admin :

    if (args[0] == "add-role") {
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Commande de SHCK BOT :  /help add-role**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`**Description :**  Ajoute un rôle à un membre\n**Syntaxe :**  *${config.prefix}add-role [@user] [rôle ou id]*`)
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help add-role" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }
    if (args[0] == "rmv-role") {
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Commande de SHCK BOT :  /help rmv-role**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`**Description :**  Retire un rôle d'un membre\n**Syntaxe :**  *${config.prefix}rmv-role [@user] [rôle ou id]*`)
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help rmv-role" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }

    if (args[0] == "k") {
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Commande de SHCK BOT :  /help k**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`**Description :**  Change le rôle "kills" d'un membre\n**Syntaxe :**  *${config.prefix}k [@user] [Nombre de kills] (entre 10 et 33)*`)
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help k" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }
    if (args[0] == "d") {
        message.channel.send(new Discord.MessageEmbed()
            .setColor("#664DFF")
            .setTitle("**Commande de SHCK BOT :  /help d**")
            .setThumbnail('https://cdn.discordapp.com/attachments/761717664363184129/820478274349563904/LOGO_SHCK_test3.png')
            .setDescription(`**Description :**  Change le rôle "dégats" d'un membre\n**Syntaxe :**  *${config.prefix}d [@user] [Nombre de Dégâts] (entre 1000 et 4500, par palier de 500)*`)
            .setFooter('By EVilm1', 'https://cdn.discordapp.com/attachments/761717664363184129/820477523338985492/logo.png'))
        console.log (`${time} La commande "${config.prefix}help d" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
    }

}

module.exports.help = {
    name: "help"
}