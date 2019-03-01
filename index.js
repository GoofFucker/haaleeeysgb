const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN2);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`SBG > All`, { type: "STREAMING", url: "https://www.twitch.tv/saygoodbye" })
    client.user.setStatus('dnd');
})

client.on('guildMemberRemove', member => {
    var ayy2 = client.emojis.find(emoji => emoji.name === "error");
    member.guild.channels.get('549914111492882442').send(ayy2 + member + " à fait ses adieux. " + ayy2);
});

client.on('guildMemberAdd', member => {
    if (member.user.username.includes("RCON")) {
        member.ban("Account being a bot.")}})

client.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Rookie');
    var ayy = client.emojis.find(emoji => emoji.name === "success");
    member.guild.channels.get('549914111492882442').send(ayy + member + " arrive pour niquer des mères. " + ayy); 
    member.addRole(role)
});

client.on('message', message => {
    if (message.content.startsWith(">role")) {
        var args = message.content.split(" ");
        var server = message.guild;
        var name = message.author.username;
        message.delete();
            if (args[1] === '(All)') {
                message.delete();
                message.author.send(message.author + " Bien tenté, mais je ne suis pas stupide ^^.") }
            if (args[1] === '» Leader - SGB++') {
                message.delete();
                message.author.send(message.author + " Bien tenté, mais je ne suis pas stupide ^^.") }
            if (args[1] === 'Haaleey') {
                message.delete();
                message.author.send(message.author + " Bien tenté, mais je ne suis pas stupide ^^.") }
            if (args[1] === '» SGB+') {
                message.delete();
                message.author.send(message.author + " Bien tenté, mais je ne suis pas stupide ^^.") }
            if (args[1] === '» SGB') {
                message.delete();
                message.author.send(message.author + " Bien tenté, mais je ne suis pas stupide ^^.") }
            if (args[1] === '» Fournisseur de Machines') {
                message.delete();
                message.author.send(message.author + " Bien tenté, mais je ne suis pas stupide ^^.") }
            if (args[1] === '» HackTools') {
                message.delete();
                message.author.send(message.author + " Bien tenté, mais je ne suis pas stupide ^^.") }
            if (args[1] === '» Fournisseur d\'Alts') {
                message.delete();
                message.author.send(message.author + " Bien tenté, mais je ne suis pas stupide ^^.") }
            if (args[1] === '» Androïde') {
                message.delete();
                message.author.send(message.author + " Bien tenté, mais je ne suis pas stupide ^^.") }
            if (args[1] === '» Humilied') {
                message.delete();
                message.author.send(message.author + " Bien tenté, mais je ne suis pas stupide ^^.") }
            if (args[1] === 'JS') {
                message.delete();
                message.member.addRole(message.guild.roles.find(role => role.name === args[1]));
                message.author.send(message.author + " Je vous ait ajouté le rôle **" + args[1] + '** ^^')}
            if (args[1] === 'HTML') {
                message.delete();
                message.member.addRole(message.guild.roles.find(role => role.name === args[1]));
                message.author.send(message.author + " Je vous ait ajouté le rôle **" + args[1] + '** ^^')}
            if (args[1] === 'PHP') {
                message.delete();
                message.member.addRole(message.guild.roles.find(role => role.name === args[1]));
                message.author.send(message.author + " Je vous ait ajouté le rôle **" + args[1] + '** ^^')}
            if (args[1] === 'Python') {
                message.delete();
                message.member.addRole(message.guild.roles.find(role => role.name === args[1]));
                message.author.send(message.author + " Je vous ait ajouté le rôle **" + args[1] + '** ^^')}
            if (args[1] === 'SQL') {
                message.delete();
                message.member.addRole(message.guild.roles.find(role => role.name === args[1]));
                message.author.send(message.author + " Je vous ait ajouté le rôle **" + args[1] + '** ^^')}
            if (args[1] === 'Java') {
                message.delete();
                message.member.addRole(message.guild.roles.find(role => role.name === args[1]));
                message.author.send(message.author + " Je vous ait ajouté le rôle **" + args[1] + '** ^^')}
            if (args[1] === 'DiscordJS') {
                message.delete();
                message.member.addRole(message.guild.roles.find(role => role.name === args[1]));
                message.author.send(message.author + " Je vous ait ajouté le rôle **" + args[1] + '** ^^')}
            if (args[1] === 'Skript') {
                message.delete();
                message.member.addRole(message.guild.roles.find(role => role.name === args[1]));
                message.author.send(message.author + " Je vous ait ajouté le rôle **" + args[1] + '** ^^')}}
    if (message.content === ">role") {
        message.delete();
        message.author.send(message.author + " Merci de choisir un role")}          
})
