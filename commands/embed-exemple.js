const Discord = require("discord.js");
config = require("../config.json");

module.exports.run = (message) => {

	message.delete();
	message.channel.send(new Discord.MessageEmbed()
	.setColor('#664DFF')
		.setTitle('Some title')
		.setURL('https://discord.js.org/')
		.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
		.setDescription('Some description here')
		.setThumbnail('https://i.imgur.com/wSTFkRM.png')
		.addFields(
			{ name: 'Regular field title', value: 'Some value here' },
			{ name: 'bjr', value: 'test' },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
		)
		.addField('Inline field title', 'Some value here', true)
		.setImage('https://i.imgur.com/wSTFkRM.png')
		.setTimestamp()
		.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png'))
	console.log (`La commande "${config.prefix}embed-exemple" a été utilisée par ${message.author.username} (id:${message.author.id}) dans le salon #${message.channel.name}`);
}

module.exports.help = {
    name: "embed-exemple"
}