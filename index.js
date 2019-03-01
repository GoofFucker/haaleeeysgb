const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN2);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`SBG > All`)
    client.user.setStatus('dnd');
})

client.on('guildMemberRemove', member => {
    var ayy2 = client.emojis.find(emoji => emoji.name === "x");
    member.guild.channels.get('549914111492882442').send("Au-revoir " + member + " Merci d'être passé ! " + ayy2);
    member.send('Hey, si tu souhaites revenir nous voir ^^\n https://discord.gg/Qwkcg8b');
    console.log("SendLeave"); 
});

client.on('guildMemberAdd', member => {
    if (member.user.username.includes("RCON")) {
        member.ban("Account being a bot.")}})

client.on('guildMemberAdd', member => {
    var ayy = client.emojis.find(emoji => emoji.name === "tada");
    member.guild.channels.get('549914111492882442').send("Salut " + member + " Bienvenue sur **NegativeNT** ! " + ayy);
    member.send('Hey, ce message n\'est pas terminé');
    console.log("SendJoin"); 
});
