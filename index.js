const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN2);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`Urania | Surveillance`, { type: "STREAMING", url: "https://www.twitch.tv/UraniaMC" })
})


    client.user.setStatus('dnd');
})

client.on('guildMemberRemove', member => {
    member.guild.channels.get('570326840212848642').send({embed: {
        color: 3447003,
        author: {
          name: "Leave",
          icon_url: client.user.avatarURL,
        },
        fields: [{
            name: "FR",
            value: ":flag_fr: Au-revoir " + member + " Merci d\'être passé ! :x:\n"
          },
          {
            name: "EN",
            value: ":flag_us: Goodbye " + member + " Thanks for coming ! :x:"
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
    member.guild.channels.get('570326840212848642').send({embed: {
        color: 3447003,
        author: {
          name: "Join",
          icon_url: client.user.avatarURL,
        },
        fields: [{
            name: "FR",
            value: ":flag_fr: Salut " + member + " Bienvenue sur **CTL Reloaded** ! :tada:\n"
          },
          {
            name: "EN",
            value: ":flag_us: Hi " + member + " Welcome to **CTL Reloaded** ! :tada:"
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: member.user.avatarURL,
          text: member.user.username,
        }
      }
    });
    //member.guild.channels.get('551164240786882601').send(":flag_us: Hi " + member + " Welcome to **NegativeNT** ! :tada:\n :flag_fr: Salut " + member + " Bienvenue sur **NegativeNT** ! :tada:");
    console.log("SendJoin"); 
});
