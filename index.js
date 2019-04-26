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
