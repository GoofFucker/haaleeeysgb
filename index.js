const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN2);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`Développé par BalanceTonQuoi19`, { type: "STREAMING", url: "https://www.twitch.tv/BalanceTonQuoi19" })
})

client.on('guildMemberRemove', member => {
    member.guild.channels.get('571118782961942528').send({embed: {
        color: 3447003,
        author: {
          name: "(Annonce)",
          icon_url: client.user.avatarURL,
        },
        fields: [{
            name: "Merci de ta visite !",
            value: ":x: Au plaisir de vous revoir " + member + " Merci d\'être passé ! :x:\n"
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: member.user.avatarURL,
          text: member.user.username,
        }
      }
    });
    //member.guild.channels.get('551164240786882601').send(":flag_us: Goodbye " + member + " Thanks for coming ! :x: \n :flag_fr: Au-revoir " + member + " Merci d\'être passé ! :x:");
    console.log("SendLeave"); 
});

client.on('guildMemberAdd', member => {
    if (member.user.username.includes("RCON")) {
        member.ban("Account being a bot.")}})

client.on('guildMemberAdd', member => {
    member.guild.channels.get('571118782961942528').send({embed: {
        color: 3447003,
        author: {
          name: "(Annonce)",
          icon_url: client.user.avatarURL,
        },
        fields: [{
            name: "Bienvenue à toi !",
            value: ":tada: Salut " + member + " Bienvenue sur notre **Discord** ! :tada:\n"
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: member.user.avatarURL,
          text: member.user.username,
        }
      }
    });
    console.log("SendJoin"); 
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
                .addField(`${message.author.avatarURL}${message.author.tag}`, `:white_check_mark: Ticket support ouvert. #${c.name}.`)
            message.channel.send({
                embed: embed2
            });
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Bienvenue dans votre ticket, veuillez expliquer votre problème en détails.`)
            c.send({
                embed: embed
            });
        }).catch(console.error); // Send errors to console
    }

    // Close ticket command
    if (message.content === '§ticket close') {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Vous pouvez uniquement utiliser cette commande dans votre salon de support.`);
        // Confirm delete - with timeout (Not command)
        message.channel.send(`Pour confirmer tapez la commande ___***§confirm***___. Vous avez 10 secondes pour confirmer`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '§confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })
                    .then((collected) => {
                        message.channel.delete();
                    })
                    .catch(() => {
                        m.edit('Le ticket a pas été supprimé.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }

});

function isCommand(message) {
    return message.content.toLowerCase().startsWith(prefix);
}

function isCommand(message, cmd) {
    return message.content.toLowerCase().startsWith(prefix + cmd);
}
