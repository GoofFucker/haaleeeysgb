const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN2);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`SPACEBLOCK.EU`)
    client.user.setStatus('dnd');
})

client.on('guildMemberRemove', member => {
    var ayy2 = client.emojis.find(emoji => emoji.name === "x");
    var us2 = client.emojis.find(emoji => emoji.name === "flag_us");
    var fr2 = client.emojis.find(emoji => emoji.name === "flag_fr");
    member.guild.channels.get('551164240786882601').send(us2 + " Goodbye " + member + " Thanks for coming ! " + ayy2);
    member.guild.channels.get('551164240786882601').send(fr2 + " Au-revoir " + member + " Merci d'être passé ! " + ayy2);
    member.send('Hey, si tu souhaites revenir nous voir ^^\n https://discord.gg/Qwkcg8b');
    console.log("SendLeave"); 
});

client.on('guildMemberAdd', member => {
    if (member.user.username.includes("RCON")) {
        member.ban("Account being a bot.")}})

client.on('guildMemberAdd', member => {
    var ayy = client.emojis.find(emoji => emoji.name === "tada");
    var us = client.emojis.find(emoji => emoji.name === "flag_us");
    var fr = client.emojis.find(emoji => emoji.name === "flag_fr");
    member.guild.channels.get('551164240786882601').send(us2 + " Hi " + member + " Welcome to **NegativeNT** ! " + ayy);
    member.guild.channels.get('551164240786882601').send(fr2 + " Salut " + member + " Bienvenue sur **NegativeNT** ! " + ayy);
    member.send('Hey, ce message n\'est pas terminé');
    console.log("SendJoin"); 
});
