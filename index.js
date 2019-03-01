const Discord = require('discord.js');
const client = new Discord.Client();

// client.login(process.env.TOKEN3);
client.login(process.env.TOKEN6);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`J'ai ${client.guilds.size} serveurs`, { type: "STREAMING", url: "https://www.twitch.tv/gotagatv" })
})

client.on('guildMemberRemove', member => {
    member.send('Hey Jeune discordeur\n \n Le discord de la ``SBG`` cherche des membres passioné par le développement\n Nous fournissons des alts et des tools par rapport aux invites.\n \n https://discord.gg/TuD72nN');
    console.log("SendLeave"); 
});

client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`J'ai ${client.guilds.size} serveurs`, { type: "STREAMING", url: "https://www.twitch.tv/gotagatv" })
  });

  client.on("guildDelete", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild leave: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`J'ai ${client.guilds.size} serveurs`, { type: "STREAMING", url: "https://www.twitch.tv/gotagatv" })
  });
