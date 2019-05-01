const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN2);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`§help | By BalanceTonQuoi19`)
})

client.on('guildMemberAdd', member => {
    // Paumés
    member.guild.channels.get('572875192737595436').send({embed: {
        color: 3447003,
        author: {
            name: member.user.tag,
            icon_url: member.user.avatarURL,
        },
        fields: [{
            name: ":white_check_mark: Bienvenue chez ***Les Paumés***.",
            value: "Merci de lire le règlement avant de vous aventurer.",
          },
        ],
    }});
});

client.on('guildMemberRemove', member => {
    // Paumés
    member.guild.channels.get('572875192737595436').send({embed: {
        color: 3447003,
        author: {
            name: member.user.tag,
            icon_url: member.user.avatarURL,
        },
        fields: [{
            name: ":no_entry_sign: ***Les Paumés*** vous remercie de votre visite.",
            value: "Ce n'est qu'un au-revoir.",
          },
        ],
    }});
});

client.on('message', message => {
    if (message.content === '§ticket open') {
        if (!message.channel.name.startsWith(`❔`)) return message.delete();
        const reason = message.content.split(" ").slice(1).join(" ");
        if (!message.guild.roles.exists("name", "Support Staff")) return message.channel.send(`NO`);
        if (message.guild.channels.exists("name", "ticket-" + message.author.username)) return message.channel.send(`Vous possedez actuellement un ticket`);
            message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.delete();
            const embed2 = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .setAuthor(`${message.author.tag}`, `${message.author.avatarURL} `)    
                .addField(`:white_check_mark: Ticket support ouvert. #${c.name}.`, `Commande: §ticket open`)
            message.channel.send({
                embed: embed2
            });
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .setAuthor(`${message.author.tag}`, `${message.author.avatarURL} `)    
                .addField(`Bienvenue dans votre salon`, `Veuillez expliquer votre problème en détails pour qu'un membre du support s'en charge.`)
            c.send({
                embed: embed
            });
        }).catch(console.error); // Send errors to console
    }

    // Close ticket command
    if (message.content === '§ticket close') {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Vous pouvez uniquement utiliser cette commande dans votre salon de support.`);
        // Confirm delete - with timeout (Not command)
        message.channel.delete();
    }

});

function isCommand(message) {
    return message.content.toLowerCase().startsWith(prefix);
}

function isCommand(message, cmd) {
    return message.content.toLowerCase().startsWith(prefix + cmd);
}


//              MODERATORS            //
