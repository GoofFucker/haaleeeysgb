const Discord = require('discord.js');
const client = new Discord.Client();
const skyrock = new Discord.Client();
const french = new Discord.Client();

skyrock.login(process.env.SKYTOCK);
client.login(process.env.TOKEN2);
french.login(process.env.TICKET);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`Hey | By BalanceTonQuoi19`, { type: "STREAMING", url: "https://www.twitch.tv/balancetonquoi19" })
})

skyrock.on("ready", () => {
    console.log("Ready2");
    skyrock.user.setActivity(`Music | By BalanceTonQuoi19`, { type: "STREAMING", url: "https://www.twitch.tv/balancetonquoi19" })
})


french.on("ready", () => {
    console.log("Ready2");
    french.user.setActivity(`*help | By BalanceTonQuoi19`, { type: "STREAMING", url: "https://www.twitch.tv/balancetonquoi19" })
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

french.on('message', message => {
    if (message.content === '§ticket open') {
        if (!message.channel.name.startsWith(`《🌐》𝗖𝗿𝗲́𝗮𝘁𝗶𝗼𝗻-𝗧𝗶𝗰𝗸𝗲𝘁`)) return message.delete();
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

client.on('message', message => {
    if (message.content === '§ticket open') {
        if (!message.channel.name.startsWith(`《🌐》Création-ticket`)) return message.delete();
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



client.on('message', message => {
    if(message.content.startsWith("§suggest")) {
        if (!message.channel.name.startsWith(`《📡》𝗖𝗼`)) return message.delete();
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            message.delete()
            const suggest = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .setAuthor(`${message.author.tag}`, `${message.author.avatarURL} `)    
                .addField(`:white_check_mark: Suggestion envoyé !.`, `Commande: §suggest`)
            message.guild.channels.find("name", "《📡》𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝗲𝘀-𝗕𝗢𝗧").sendEmbed(suggest)
            message.guild.channels.find("name", "《🙏》𝗦𝘂𝗴𝗴𝗲𝘀𝘁𝗶𝗼𝗻").send("@here")
            var sondageembed = new Discord.RichEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL)
                .addField("Suggestion: " + thingToEcho, "Qu'en pensez vous ?")
                .setColor("0xff0000")
            message.guild.channels.find("name", "《🙏》𝗦𝘂𝗴𝗴𝗲𝘀𝘁𝗶𝗼𝗻").sendEmbed(sondageembed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
            }).catch(function() { 
                });
            }})

client.on('message', message => {
    if(message.content.startsWith("§sondage")) {
        if (!message.channel.name.startsWith(`《📡》𝗖𝗼`)) return message.delete();
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            message.delete()
            const suggest = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .setAuthor(`${message.author.tag}`, `${message.author.avatarURL} `)    
                .addField(`:white_check_mark: Sondage envoyé !.`, `Commande: §sondage`)
            message.guild.channels.find("name", "《📡》𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝗲𝘀-𝗕𝗢𝗧").sendEmbed(suggest)
            message.guild.channels.find("name", "《❓》𝗦𝗼𝗻𝗱𝗮𝗴𝗲𝘀").send("@here")
            var sondageembed = new Discord.RichEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL)
                .addField("Question: " + thingToEcho, "Choisissez votre camp !")
                .setColor("0xff0000")
            message.guild.channels.find("name", "《❓》𝗦𝗼𝗻𝗱𝗮𝗴𝗲𝘀").sendEmbed(sondageembed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
            }).catch(function() { 
                });
            }})

french.on('message', message => {
    if (message.content === '§help') {
        message.delete();
        const embed2 = new Discord.RichEmbed()
            .setColor(0xCF40FA)
            .setAuthor(`${message.author.tag}`, `${message.author.avatarURL} `)    
            .addField(`Ouvrir un ticket:`, `Commande: §ticket open`)
            .addField(`Fermer un ticket:`, `Commande: §ticket close`)
            .addField(`Rôle nécessaire pour voir les ticket:`, `Rôle: Support Staff`)
            .addField(`Channel ou vous pouvez executer les commandes:`, `Nom: 《🌐》Création-ticket`)
            .addField(`Ajouter le bot sur son serveur:`, `https://discordapp.com/oauth2/authorize?client_id=573224122612449298&scope=bot&permissions=268463160`)
        message.channel.send({
            embed: embed2
        })}})
            
            
