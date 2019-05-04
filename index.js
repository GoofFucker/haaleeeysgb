const Discord = require('discord.js');
const client = new Discord.Client();
const skyrock = new Discord.Client();
const french = new Discord.Client();
const mystic = new Discord.Client();

skyrock.login(process.env.SKYTOCK);
client.login(process.env.TOKEN2);
french.login(process.env.TICKET);
mystic.login(process.env.GEN);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`Hey | By BalanceTonQuoi19`, { type: "STREAMING", url: "https://www.twitch.tv/balancetonquoi19" })
})

skyrock.on("ready", () => {
    console.log("Ready2");
    skyrock.user.setActivity(`Music | By BalanceTonQuoi19`, { type: "STREAMING", url: "https://www.twitch.tv/balancetonquoi19" })
})

mystic.on("ready", () => {
    console.log("Ready2");
    mystic.user.setActivity(`^^help | By BalanceTonQuoi19`, { type: "STREAMING", url: "https://www.twitch.tv/balancetonquoi19" })
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
        if (!message.channel.name.startsWith(`création-ticket`)) return message.delete();
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
    if (message.content === '*help') {
        message.delete();
        const embed2 = new Discord.RichEmbed()
            .setColor(0xCF40FA)
            .setAuthor(`${message.author.tag}`, `${message.author.avatarURL} `)    
            .addField(`Ouvrir un ticket:`, `Commande: §ticket open`)
            .addField(`Fermer un ticket:`, `Commande: §ticket close`)
            .addField(`Rôle nécessaire pour voir les ticket:`, `Rôle: Support Staff`)
            .addField(`Channel ou vous pouvez executer les commandes:`, `Nom: **création-ticket**`)
            .addField(`Ajouter le bot sur son serveur:`, `https://discordapp.com/oauth2/authorize?client_id=573224122612449298&scope=bot&permissions=268463160`)
        message.channel.send({
            embed: embed2
        })}})

mystic.on('message', message => {
    if (message.content === '^^help') {
        message.delete();
        const embed4 = new Discord.RichEmbed()
            .setColor(0xCF40FA)
            .setAuthor(`${message.author.tag}`, `${message.author.avatarURL} `)    
            .addField(`Générer Compte Minecraft:`, `Commande: ^^minecraft`)
            .addField(`Générer Compte Spotify:`, `Commande: ^^spotify **(Out Stock)**`)
            .addField(`Générer Compte Netflix:`, `Commande: ^^netflix **(Out Stock)**`)
            .addField(`Channel ou vous pouvez executer les commandes:`, `Nom:《🌊》𝗚𝗲́𝗻𝗲́𝗿𝗮𝘁𝗲𝘂𝗿`)
            .addField(`Ajouter le bot sur son serveur:`, `https://discordapp.com/oauth2/authorize?client_id=574323767757504536&scope=bot&permissions=268463160`)
        message.channel.send({
            embed: embed4
        })}})
            
mystic.on('message', message => {
    if (message.content === '^^minecraft') { //tu peut remplacer la commande par ce que tu veut
        if (message.channel.name === "《🌊》𝗚𝗲́𝗻𝗲́𝗿𝗮𝘁𝗲𝘂𝗿") {

          var answers = [
          'j_magalang@yahoo.com:Ragnarok004',
          'homann_alex1@web.de:ghfdsertm965',
          'fitfrancois46@gmail.com:francois85',
          'mat.rafale@hotmail.fr:bf23b647',
          'flystarlp@outlook.com:000000abc',
          'alexliam11@yahoo.com:brooke8675309',
          'george.wheen@gmail.com:francais247',
          'shellidan@yahoo.com:Katelyn0424',
          'brennan1104@msn.com:R@nger02',
          'gun667@naver.com:a8862593',
          'ilan.ledragon@live.fr:bidulus09',
          'oyvind_139@hotmail.com:Vivind223',
          'grisha-igvz@mail.ru:720225g',
          'jyniisan@gmail.com:jyniisan1',
          'simka_2003@mail.ru:123qazwsxed',
          'ZeodoHokill@gmail.com:DeathoTrain',
          'ruybarbosa4@hotmail.com:osaiopcra123',
          'blaingarrison@gmail.com:Bleeding13',
          'theabnormalman@hotmail.co.uk:pokemon468',
          'gavstrk@gmail.com:2corin517',
          'orecrafter12@gmail.com:asdfghjkl12',
          'robertlthomas1508@googlemail.com:5tewkesbury',
          'qkelly@sympatico.ca:57chubby',
          'arcanisombre@hotmail.com:781227mort',
          'nicolestrahm@outlook.com:Funfun101',
          'lego.best@live.se:elvis2003',
          'rjb1963@hotmail.co.uk:vectra150',
          'cltaylor9810@gmail.com:hazmatl3ader',
          'sc_egan@hotmail.com:catbox4u',
          'rasmuus_96@hotmail.com:wtfloln00b',
          'experimentalrem@yahoo.com:2817eccj',
          'chip.hafner@web.de:avengers12',
          'p.a.carsin@orange.fr:polcar99',
          'c.behmenburg@gmx.net:thefog666',
          'realsasquatch808@gmail.com:drunko1997',
          'steverhart12@yahoo.com:pillow12',
          'jwtheatre@gmail.com:assman23',
          'killadavidthomas@aol.com:jackwilliam98',
          'Mr.comicon@gmail.com:wazupdude123',
          'bartley111@gmail.com:fructose111',
          'psyex2@telus.net:f59209440',
          'juli_casalone@hotmail.com:zorrolo10',
          'mnunesfilho@hotmail.com:valena12',
          'akizxcvb@gmail.com:asdf1525',
          'mitchellmartin190@gmail.com:shadowdog1',
          'rrainpow@hotmail.no:Eternion1',
          'majornudelholz@gmail.com:Fabian98',
          'jamesdixonballs@hotmail.com.au:ollie123',
          'schoene.zittau@freenet.de:stanley01',
          'ptit-rastaman@hotmail.fr:clemjtm27',
          'dannyhorsford@hotmail.com:Santaspickle111',
          'thordraco@yahoo.com:orionm42',
          'necas68@sapo.pt:gelato26',
          'tomais.peluso@gmail.com:tomais123',
          'Sderg420@gmail.com:Zoktar2121',
          'maju.pm@gmail.com:23kl1677',
          'princessliv@hellokitty.com:iluvsims1',
          'danielsnow1511@gmail.com:Storming1',
          'codekiwi97@gmail.com:peke5000',
          'lendria@live.se:L3rn14.eu',
          'sean_gamerz@yahoo.com:Sean08021992',
          'thor.hoybye@gmail.com:11lining11',
          'warrencooper95@yahoo.co.uk:Mortalkombat098',
          'rchl_prd89@hotmail.com:Valarie06',
          'ben_24@hotmail.ca:kamikaz44',
          'kputtwolfess@aol.com:shark105',
          'captainpeanut@hotmail.co.uk:daisymay345',
          'annhendriks@live.co.uk:walla5808',
          'ruselow1@gmail.com:aprilmay',
          'joker-el@hotmail.com:Festus67',
          'lvxiaomenggame@hotmail.com:Xhtlxm0208lxm',
          'neon.noodles@yahoo.com:bubblegirl1',
          'russain_life@hotmail.com:animefreak123',
          'amitluclay@live.com:Letmein539472',
          'thomasbatrouney64@gmail.com:Jacovelli1',
          'andrewpham288@gmail.com:andrew288',
          'magnusbaungaard@gmail.com:hpjensen12',
          'duvallmika@yahoo.com:mika10000',
          'krnkid900@hotmail.com:krnzzang850',
          'dgil2514@aol.com:brooks16',
          'danielrpinho@outlook.com:doremi2010',
          'felix_7483@hotmail.com:tercel1998',
          'fer_uc_cruz@live.com.mx:Tambor01',
          'ejgalas@yahoo.com:snowboard1',
          'april4490@yahoo.com:anna42711',
          'petitjul51@gmail.com:narujul1996',
          'tibbetts99@gmail.com:b100953D',
          'ahaynes99@hotmail.com:hithere1',
          'dkp1210@yahoo.com:Ds5948938',
          'txp0521@yahoo.com:riddler21',
          'benni100@gmx.net:Anno1602',
          'michaelboyer8@gmail.com:Ilovewwe10',
          'jessy_lew@hotmail.com:Iluvtim1',
          'yinyin1324@yahoo.com.hk:m4a1king',
          'lfcspence01@yahoo.co.uk:Stevengerrard08',
          'ronmelmacbeth@gmail.com:kneern1313',
          'caitlin_curran@live.com:paige0323',
          'ben.artisan@gmail.com:Thaor113',
          'michael121217@gmail.com:mike0707',
          'rodrigoreis1999@gmail.com:ujfalusi',
          'kieranradford@hotmail.com:Sharna13',
          'victor.apsouza@gmail.com:qazwsx_123',
          'jjt1007@optonline.net:myboys9600',
          'josh.w.jackson@gmail.com:@n0nym0us12',
          'kevindaly403@yahoo.com:kjddal25',
          'rkmoflear@gmail.com:rokris1088',
          'jb.bourgois@hotmail.fr:Hurr1c4nn3',
          'jamie_dorrian@yahoo.co.uk:Fe16c2529b',
          'spectrogamer.pt@gmail.com:spectro123',
          'skizzze@gmail.com:N@Q@W0yu',
          'rune920@gmail.com:darkfire98',
          'djwalls2009@live.com:icecream12',
          'addolae@aol.com:glowstick7',
          'b.lafficher@gmail.com:wnqmap10!',
          'pedererkul@hotmail.com:453shums',
          'myhomework.nf@gmail.com:readysetgo',
          'bahcorp@hotmail.com:bahlex28',
          'gaming.avencer@gmail.com:Pirouette1',
          'max_mad619@hotmail.com:martin643d',
          'pontus_h@live.se:hulliganen1',
          'jwill48992@hotmail.com:dragonslayer07',
          'crystalrose10291999@yahoo.com:crystal1029',
          'nathanricoy@hotmail.com:bumbum99',
          'maxus@pyrusboss.com:andres123',
          'ttim2143@yahoo.com:shop2143',
          'dragonballz75@live.com.au:Shark788',
          'zachary_stites@hotmail.com:12qwas!@QWAS',
          'd.nied.d@gmail.com:Soldier88*',
          'Drongesenkh@live.com:Kriller99',
          'boby-88@hotmail.fr:Tuluxa89',
          'davidfire177@yahoo.com:99cookies',
          'mtwagner@asu.edu:gyroman45',
          'igorataides@gmail.com:3c5628a55',
          'charlie@hdholm.se:charlie940122',
          'andygarcia_78@hotmail.com:a0611055',
          'tidus5964@hotmail.fr:(diron)64',
          'otaviohenriquesm0@hotmail.com:suzi1234',
          'ky6ky7@outlook.com:thekid12',
          'kris.moe@hotmail.no:manutdfan1',
          'basweijers@hotmail.com:Sharky1981',
          'jeffhary74@yahoo.com:tarek123',
          'simon_finlay94@hotmail.com:Simfin123',
          'rigelcastelo@hotmail.com:152992',
          'stephenromano@live.com:cookie42',
          'aren_papissian@hotmail.com:joeboxer123',
          'jennihouston@embarqmail.com:newlife06',
          'spock534@hotmail.com:JLG1986^^',
          'fitfrancois46@gmail.com:francois85',
          'mat.rafale@hotmail.fr:bf23b647',
          'flystarlp@outlook.com:000000abc',
          'alexliam11@yahoo.com:brooke8675309',
          'george.wheen@gmail.com:francais247',
          'shellidan@yahoo.com:Katelyn0424',
          'brennan1104@msn.com:R@nger02',
          'gun667@naver.com:a8862593',
          'ilan.ledragon@live.fr:bidulus09',
          'oyvind_139@hotmail.com:Vivind223',
          'grisha-igvz@mail.ru:720225g',
          'jyniisan@gmail.com:jyniisan1',
          'simka_2003@mail.ru:123qazwsxed',
          'ZeodoHokill@gmail.com:DeathoTrain',
          'ruybarbosa4@hotmail.com:osaiopcra123',
          'blaingarrison@gmail.com:Bleeding13',
          'theabnormalman@hotmail.co.uk:pokemon468',
          'gavstrk@gmail.com:2corin517',
          'orecrafter12@gmail.com:asdfghjkl12',
          'robertlthomas1508@googlemail.com:5tewkesbury',
          'qkelly@sympatico.ca:57chubby',
          'arcanisombre@hotmail.com:781227mort',
          'nicolestrahm@outlook.com:Funfun101',
          'lego.best@live.se:elvis2003',
          'rjb1963@hotmail.co.uk:vectra150',
          'cltaylor9810@gmail.com:hazmatl3ader',
          'sc_egan@hotmail.com:catbox4u',
          'rasmuus_96@hotmail.com:wtfloln00b',
          'experimentalrem@yahoo.com:2817eccj',
          'chip.hafner@web.de:avengers12',
          'p.a.carsin@orange.fr:polcar99',
          'c.behmenburg@gmx.net:thefog666',
          'realsasquatch808@gmail.com:drunko1997',
          'steverhart12@yahoo.com:pillow12',
          'jwtheatre@gmail.com:assman23',
          'killadavidthomas@aol.com:jackwilliam98',
          'Mr.comicon@gmail.com:wazupdude123',
          'bartley111@gmail.com:fructose111',
          'psyex2@telus.net:f59209440',
          'juli_casalone@hotmail.com:zorrolo10',
          'mnunesfilho@hotmail.com:valena12',
          'akizxcvb@gmail.com:asdf1525',
          'mitchellmartin190@gmail.com:shadowdog1',
          'rrainpow@hotmail.no:Eternion1',
          'majornudelholz@gmail.com:Fabian98',
          'jamesdixonballs@hotmail.com.au:ollie123',
          'schoene.zittau@freenet.de:stanley01',
          'ptit-rastaman@hotmail.fr:clemjtm27',
          'dannyhorsford@hotmail.com:Santaspickle111',
          'thordraco@yahoo.com:orionm42',
          'necas68@sapo.pt:gelato26',
          'tomais.peluso@gmail.com:tomais123',
          'Sderg420@gmail.com:Zoktar2121',
          'maju.pm@gmail.com:23kl1677',
          'princessliv@hellokitty.com:iluvsims1',
          'danielsnow1511@gmail.com:Storming1',
          'codekiwi97@gmail.com:peke5000',
          'lendria@live.se:L3rn14.eu',
          'sean_gamerz@yahoo.com:Sean08021992',
          'thor.hoybye@gmail.com:11lining11',
          'warrencooper95@yahoo.co.uk:Mortalkombat098',
          'rchl_prd89@hotmail.com:Valarie06',
          'ben_24@hotmail.ca:kamikaz44',
          'kputtwolfess@aol.com:shark105',
          'captainpeanut@hotmail.co.uk:daisymay345',
          'annhendriks@live.co.uk:walla5808',
          'ruselow1@gmail.com:aprilmay',
          'joker-el@hotmail.com:Festus67',
          'lvxiaomenggame@hotmail.com:Xhtlxm0208lxm',
          'neon.noodles@yahoo.com:bubblegirl1',
          'russain_life@hotmail.com:animefreak123',
          'amitluclay@live.com:Letmein539472',
          'thomasbatrouney64@gmail.com:Jacovelli1',
          'andrewpham288@gmail.com:andrew288',
          'magnusbaungaard@gmail.com:hpjensen12',
          'duvallmika@yahoo.com:mika10000',
          'krnkid900@hotmail.com:krnzzang850',
          'dgil2514@aol.com:brooks16',
          'danielrpinho@outlook.com:doremi2010',
          'felix_7483@hotmail.com:tercel1998',
          'fer_uc_cruz@live.com.mx:Tambor01',
          'ejgalas@yahoo.com:snowboard1',
          'april4490@yahoo.com:anna42711',
          'petitjul51@gmail.com:narujul1996',
          'tibbetts99@gmail.com:b100953D',
          'ahaynes99@hotmail.com:hithere1',
          'dkp1210@yahoo.com:Ds5948938',
          'txp0521@yahoo.com:riddler21',
          'benni100@gmx.net:Anno1602',
          'michaelboyer8@gmail.com:Ilovewwe10',
          'jessy_lew@hotmail.com:Iluvtim1',
          'yinyin1324@yahoo.com.hk:m4a1king',
          'lfcspence01@yahoo.co.uk:Stevengerrard08',
          'ronmelmacbeth@gmail.com:kneern1313',
          'caitlin_curran@live.com:paige0323',
          'ben.artisan@gmail.com:Thaor113',
          'michael121217@gmail.com:mike0707',
          'rodrigoreis1999@gmail.com:ujfalusi',
          'kieranradford@hotmail.com:Sharna13',
          'victor.apsouza@gmail.com:qazwsx_123',
          'jjt1007@optonline.net:myboys9600',
          'josh.w.jackson@gmail.com:@n0nym0us12',
          'kevindaly403@yahoo.com:kjddal25',
          'rkmoflear@gmail.com:rokris1088',
          'jb.bourgois@hotmail.fr:Hurr1c4nn3',
          'jamie_dorrian@yahoo.co.uk:Fe16c2529b',
          'spectrogamer.pt@gmail.com:spectro123',
          'skizzze@gmail.com:N@Q@W0yu',
          'rune920@gmail.com:darkfire98',
          'djwalls2009@live.com:icecream12',
          'addolae@aol.com:glowstick7',
          'b.lafficher@gmail.com:wnqmap10!',
          'pedererkul@hotmail.com:453shums',
          'myhomework.nf@gmail.com:readysetgo',
          'bahcorp@hotmail.com:bahlex28',
          'gaming.avencer@gmail.com:Pirouette1',
          'max_mad619@hotmail.com:martin643d',
          'pontus_h@live.se:hulliganen1',
          'jwill48992@hotmail.com:dragonslayer07',
          'crystalrose10291999@yahoo.com:crystal1029',
          'nathanricoy@hotmail.com:bumbum99',
          'maxus@pyrusboss.com:andres123',
          'ttim2143@yahoo.com:shop2143',
          'dragonballz75@live.com.au:Shark788',
          'zachary_stites@hotmail.com:12qwas!@QWAS',
          'd.nied.d@gmail.com:Soldier88*',
          'Drongesenkh@live.com:Kriller99',
          'boby-88@hotmail.fr:Tuluxa89',
          'davidfire177@yahoo.com:99cookies',
          'mtwagner@asu.edu:gyroman45',
          'igorataides@gmail.com:3c5628a55',
          'charlie@hdholm.se:charlie940122',
          'andygarcia_78@hotmail.com:a0611055',
          'tidus5964@hotmail.fr:(diron)64',
          'otaviohenriquesm0@hotmail.com:suzi1234',
          'ky6ky7@outlook.com:thekid12',
          'kris.moe@hotmail.no:manutdfan1',
          'basweijers@hotmail.com:Sharky1981',
          'jeffhary74@yahoo.com:tarek123',
          'simon_finlay94@hotmail.com:Simfin123',
          'rigelcastelo@hotmail.com:152992',
          'stephenromano@live.com:cookie42',
          'aren_papissian@hotmail.com:joeboxer123',
          'jennihouston@embarqmail.com:newlife06',
          'spock534@hotmail.com:JLG1986^^',
          'fitfrancois46@gmail.com:francois85',
          'mat.rafale@hotmail.fr:bf23b647',
          'flystarlp@outlook.com:000000abc',
          'alexliam11@yahoo.com:brooke8675309',
          'george.wheen@gmail.com:francais247',
          'shellidan@yahoo.com:Katelyn0424',
          'brennan1104@msn.com:R@nger02',
          'gun667@naver.com:a8862593',
          'ilan.ledragon@live.fr:bidulus09',
          'oyvind_139@hotmail.com:Vivind223',
          'grisha-igvz@mail.ru:720225g',
          'jyniisan@gmail.com:jyniisan1',
          'simka_2003@mail.ru:123qazwsxed',
          'ZeodoHokill@gmail.com:DeathoTrain',
          'ruybarbosa4@hotmail.com:osaiopcra123',
          'blaingarrison@gmail.com:Bleeding13',
          'theabnormalman@hotmail.co.uk:pokemon468',
          'gavstrk@gmail.com:2corin517',
          'orecrafter12@gmail.com:asdfghjkl12',
          'robertlthomas1508@googlemail.com:5tewkesbury',
          'qkelly@sympatico.ca:57chubby',
          'arcanisombre@hotmail.com:781227mort',
          'nicolestrahm@outlook.com:Funfun101',
          'lego.best@live.se:elvis2003',
          'rjb1963@hotmail.co.uk:vectra150',
          'cltaylor9810@gmail.com:hazmatl3ader',
          'sc_egan@hotmail.com:catbox4u',
          'rasmuus_96@hotmail.com:wtfloln00b',
          'experimentalrem@yahoo.com:2817eccj',
          'chip.hafner@web.de:avengers12',
          'p.a.carsin@orange.fr:polcar99',
          'c.behmenburg@gmx.net:thefog666',
          'realsasquatch808@gmail.com:drunko1997',
          'steverhart12@yahoo.com:pillow12',
          'jwtheatre@gmail.com:assman23',
          'killadavidthomas@aol.com:jackwilliam98',
          'Mr.comicon@gmail.com:wazupdude123',
          'bartley111@gmail.com:fructose111',
          'psyex2@telus.net:f59209440',
          'juli_casalone@hotmail.com:zorrolo10',
          'mnunesfilho@hotmail.com:valena12',
          'akizxcvb@gmail.com:asdf1525',
          'mitchellmartin190@gmail.com:shadowdog1',
          'rrainpow@hotmail.no:Eternion1',
          'majornudelholz@gmail.com:Fabian98',
          'jamesdixonballs@hotmail.com.au:ollie123',
          'schoene.zittau@freenet.de:stanley01',
          'ptit-rastaman@hotmail.fr:clemjtm27',
          'dannyhorsford@hotmail.com:Santaspickle111',
          'thordraco@yahoo.com:orionm42',
          'necas68@sapo.pt:gelato26',
          'tomais.peluso@gmail.com:tomais123',
          'Sderg420@gmail.com:Zoktar2121',
          'maju.pm@gmail.com:23kl1677',
          'princessliv@hellokitty.com:iluvsims1',
          'danielsnow1511@gmail.com:Storming1',
          'codekiwi97@gmail.com:peke5000',
          'lendria@live.se:L3rn14.eu',
          'sean_gamerz@yahoo.com:Sean08021992',
          'thor.hoybye@gmail.com:11lining11',
          'warrencooper95@yahoo.co.uk:Mortalkombat098',
          'rchl_prd89@hotmail.com:Valarie06',
          'ben_24@hotmail.ca:kamikaz44',
          'kputtwolfess@aol.com:shark105',
          'captainpeanut@hotmail.co.uk:daisymay345',
          'annhendriks@live.co.uk:walla5808',
          'ruselow1@gmail.com:aprilmay',
          'joker-el@hotmail.com:Festus67',
          'lvxiaomenggame@hotmail.com:Xhtlxm0208lxm',
          'neon.noodles@yahoo.com:bubblegirl1',
          'russain_life@hotmail.com:animefreak123',
          'amitluclay@live.com:Letmein539472',
          'thomasbatrouney64@gmail.com:Jacovelli1',
          'andrewpham288@gmail.com:andrew288',
          'magnusbaungaard@gmail.com:hpjensen12',
          'duvallmika@yahoo.com:mika10000',
          'krnkid900@hotmail.com:krnzzang850',
          'dgil2514@aol.com:brooks16',
          'danielrpinho@outlook.com:doremi2010',
          'felix_7483@hotmail.com:tercel1998',
          'fer_uc_cruz@live.com.mx:Tambor01',
          'ejgalas@yahoo.com:snowboard1',
          'april4490@yahoo.com:anna42711',
          'petitjul51@gmail.com:narujul1996',
          'tibbetts99@gmail.com:b100953D',
          'ahaynes99@hotmail.com:hithere1',
          'dkp1210@yahoo.com:Ds5948938',
          'txp0521@yahoo.com:riddler21',
          'benni100@gmx.net:Anno1602',
          'michaelboyer8@gmail.com:Ilovewwe10',
          'jessy_lew@hotmail.com:Iluvtim1',
          'yinyin1324@yahoo.com.hk:m4a1king',
          'lfcspence01@yahoo.co.uk:Stevengerrard08',
          'ronmelmacbeth@gmail.com:kneern1313',
          'caitlin_curran@live.com:paige0323',
          'ben.artisan@gmail.com:Thaor113',
          'michael121217@gmail.com:mike0707',
          'rodrigoreis1999@gmail.com:ujfalusi',
          'kieranradford@hotmail.com:Sharna13',
          'victor.apsouza@gmail.com:qazwsx_123',
          'jjt1007@optonline.net:myboys9600',
          'josh.w.jackson@gmail.com:@n0nym0us12',
          'kevindaly403@yahoo.com:kjddal25',
          'rkmoflear@gmail.com:rokris1088',
          'jb.bourgois@hotmail.fr:Hurr1c4nn3',
          'jamie_dorrian@yahoo.co.uk:Fe16c2529b',
          'spectrogamer.pt@gmail.com:spectro123',
          'skizzze@gmail.com:N@Q@W0yu',
          'rune920@gmail.com:darkfire98',
          'djwalls2009@live.com:icecream12',
          'addolae@aol.com:glowstick7',
          'b.lafficher@gmail.com:wnqmap10!',
          'pedererkul@hotmail.com:453shums',
          'myhomework.nf@gmail.com:readysetgo',
          'bahcorp@hotmail.com:bahlex28',
          'gaming.avencer@gmail.com:Pirouette1',
          'max_mad619@hotmail.com:martin643d',
          'pontus_h@live.se:hulliganen1',
          'jwill48992@hotmail.com:dragonslayer07',
          'crystalrose10291999@yahoo.com:crystal1029',
          'nathanricoy@hotmail.com:bumbum99',
          'maxus@pyrusboss.com:andres123',
          'ttim2143@yahoo.com:shop2143',
          'dragonballz75@live.com.au:Shark788',
          'zachary_stites@hotmail.com:12qwas!@QWAS',
          'd.nied.d@gmail.com:Soldier88*',
          'Drongesenkh@live.com:Kriller99',
          'boby-88@hotmail.fr:Tuluxa89',
          'davidfire177@yahoo.com:99cookies',
          'mtwagner@asu.edu:gyroman45',
          'igorataides@gmail.com:3c5628a55',
          'charlie@hdholm.se:charlie940122',
          'andygarcia_78@hotmail.com:a0611055',
          'tidus5964@hotmail.fr:(diron)64',
          'otaviohenriquesm0@hotmail.com:suzi1234',
          'ky6ky7@outlook.com:thekid12',
          'kris.moe@hotmail.no:manutdfan1',
          'basweijers@hotmail.com:Sharky1981',
          'jeffhary74@yahoo.com:tarek123',
          'simon_finlay94@hotmail.com:Simfin123',
          'rigelcastelo@hotmail.com:152992',
          'stephenromano@live.com:cookie42',
          'aren_papissian@hotmail.com:joeboxer123',
          'jennihouston@embarqmail.com:newlife06',
          'spock534@hotmail.com:JLG1986^^',
          'fitfrancois46@gmail.com:francois85',
          'mat.rafale@hotmail.fr:bf23b647',
          'flystarlp@outlook.com:000000abc',
          'alexliam11@yahoo.com:brooke8675309',
          'george.wheen@gmail.com:francais247',
          'shellidan@yahoo.com:Katelyn0424',
          'brennan1104@msn.com:R@nger02',
          'gun667@naver.com:a8862593',
          'ilan.ledragon@live.fr:bidulus09',
          'oyvind_139@hotmail.com:Vivind223',
          'grisha-igvz@mail.ru:720225g',
          'jyniisan@gmail.com:jyniisan1',
          'simka_2003@mail.ru:123qazwsxed',
          'ZeodoHokill@gmail.com:DeathoTrain',
          'ruybarbosa4@hotmail.com:osaiopcra123',
          'blaingarrison@gmail.com:Bleeding13',
          'theabnormalman@hotmail.co.uk:pokemon468',
          'gavstrk@gmail.com:2corin517',
          'orecrafter12@gmail.com:asdfghjkl12',
          'robertlthomas1508@googlemail.com:5tewkesbury',
          'qkelly@sympatico.ca:57chubby',
          'arcanisombre@hotmail.com:781227mort',
          'nicolestrahm@outlook.com:Funfun101',
          'lego.best@live.se:elvis2003',
          'rjb1963@hotmail.co.uk:vectra150',
          'cltaylor9810@gmail.com:hazmatl3ader',
          'sc_egan@hotmail.com:catbox4u',
          'rasmuus_96@hotmail.com:wtfloln00b',
          'experimentalrem@yahoo.com:2817eccj',
          'chip.hafner@web.de:avengers12',
          'p.a.carsin@orange.fr:polcar99',
          'c.behmenburg@gmx.net:thefog666',
          'realsasquatch808@gmail.com:drunko1997',
          'steverhart12@yahoo.com:pillow12',
          'jwtheatre@gmail.com:assman23',
          'killadavidthomas@aol.com:jackwilliam98',
          'Mr.comicon@gmail.com:wazupdude123',
          'bartley111@gmail.com:fructose111',
          'psyex2@telus.net:f59209440',
          'juli_casalone@hotmail.com:zorrolo10',
          'mnunesfilho@hotmail.com:valena12',
          'akizxcvb@gmail.com:asdf1525',
          'mitchellmartin190@gmail.com:shadowdog1',
          'rrainpow@hotmail.no:Eternion1',
          'majornudelholz@gmail.com:Fabian98',
          'jamesdixonballs@hotmail.com.au:ollie123',
          'schoene.zittau@freenet.de:stanley01',
          'ptit-rastaman@hotmail.fr:clemjtm27',
          'dannyhorsford@hotmail.com:Santaspickle111',
          'thordraco@yahoo.com:orionm42',
          'necas68@sapo.pt:gelato26',
          'tomais.peluso@gmail.com:tomais123',
          'Sderg420@gmail.com:Zoktar2121',
          'maju.pm@gmail.com:23kl1677',
          'princessliv@hellokitty.com:iluvsims1',
          'danielsnow1511@gmail.com:Storming1',
          'codekiwi97@gmail.com:peke5000',
          'lendria@live.se:L3rn14.eu',
          'sean_gamerz@yahoo.com:Sean08021992',
          'thor.hoybye@gmail.com:11lining11',
          'warrencooper95@yahoo.co.uk:Mortalkombat098',
          'rchl_prd89@hotmail.com:Valarie06',
          'ben_24@hotmail.ca:kamikaz44',
          'kputtwolfess@aol.com:shark105',
          'captainpeanut@hotmail.co.uk:daisymay345',
          'annhendriks@live.co.uk:walla5808',
          'ruselow1@gmail.com:aprilmay',
          'joker-el@hotmail.com:Festus67',
          'lvxiaomenggame@hotmail.com:Xhtlxm0208lxm',
          'neon.noodles@yahoo.com:bubblegirl1',
          'russain_life@hotmail.com:animefreak123',
          'amitluclay@live.com:Letmein539472',
          'thomasbatrouney64@gmail.com:Jacovelli1',
          'andrewpham288@gmail.com:andrew288',
          'magnusbaungaard@gmail.com:hpjensen12',
          'duvallmika@yahoo.com:mika10000',
          'krnkid900@hotmail.com:krnzzang850',
          'dgil2514@aol.com:brooks16',
          'danielrpinho@outlook.com:doremi2010',
          'felix_7483@hotmail.com:tercel1998',
          'fer_uc_cruz@live.com.mx:Tambor01',
          'ejgalas@yahoo.com:snowboard1',
          'april4490@yahoo.com:anna42711',
          'petitjul51@gmail.com:narujul1996',
          'tibbetts99@gmail.com:b100953D',
          'ahaynes99@hotmail.com:hithere1',
          'dkp1210@yahoo.com:Ds5948938',
          'txp0521@yahoo.com:riddler21',
          'benni100@gmx.net:Anno1602',
          'michaelboyer8@gmail.com:Ilovewwe10',
          'jessy_lew@hotmail.com:Iluvtim1',
          'yinyin1324@yahoo.com.hk:m4a1king',
          'lfcspence01@yahoo.co.uk:Stevengerrard08',
          'ronmelmacbeth@gmail.com:kneern1313',
          'caitlin_curran@live.com:paige0323',
          'ben.artisan@gmail.com:Thaor113',
          'michael121217@gmail.com:mike0707',
          'rodrigoreis1999@gmail.com:ujfalusi',
          'kieranradford@hotmail.com:Sharna13',
          'victor.apsouza@gmail.com:qazwsx_123',
          'jjt1007@optonline.net:myboys9600',
          'josh.w.jackson@gmail.com:@n0nym0us12',
          'kevindaly403@yahoo.com:kjddal25',
          'rkmoflear@gmail.com:rokris1088',
          'jb.bourgois@hotmail.fr:Hurr1c4nn3',
          'jamie_dorrian@yahoo.co.uk:Fe16c2529b',
          'spectrogamer.pt@gmail.com:spectro123',
          'skizzze@gmail.com:N@Q@W0yu',
          'rune920@gmail.com:darkfire98',
          'djwalls2009@live.com:icecream12',
          'addolae@aol.com:glowstick7',
          'b.lafficher@gmail.com:wnqmap10!',
          'pedererkul@hotmail.com:453shums',
          'myhomework.nf@gmail.com:readysetgo',
          'bahcorp@hotmail.com:bahlex28',
          'gaming.avencer@gmail.com:Pirouette1',
          'max_mad619@hotmail.com:martin643d',
          'pontus_h@live.se:hulliganen1',
          'jwill48992@hotmail.com:dragonslayer07',
          'crystalrose10291999@yahoo.com:crystal1029',
          'nathanricoy@hotmail.com:bumbum99',
          'maxus@pyrusboss.com:andres123',
          'ttim2143@yahoo.com:shop2143',
          'dragonballz75@live.com.au:Shark788',
          'zachary_stites@hotmail.com:12qwas!@QWAS',
          'd.nied.d@gmail.com:Soldier88*',
          'Drongesenkh@live.com:Kriller99',
          'boby-88@hotmail.fr:Tuluxa89',
          'davidfire177@yahoo.com:99cookies',
          'mtwagner@asu.edu:gyroman45',
          'igorataides@gmail.com:3c5628a55',
          'charlie@hdholm.se:charlie940122',
          'andygarcia_78@hotmail.com:a0611055',
          'tidus5964@hotmail.fr:(diron)64',
          'otaviohenriquesm0@hotmail.com:suzi1234',
          'ky6ky7@outlook.com:thekid12',
          'kris.moe@hotmail.no:manutdfan1',
          'basweijers@hotmail.com:Sharky1981',
          'jeffhary74@yahoo.com:tarek123',
          'simon_finlay94@hotmail.com:Simfin123',
          'rigelcastelo@hotmail.com:152992',
          'stephenromano@live.com:cookie42',
          'aren_papissian@hotmail.com:joeboxer123',
          'jennihouston@embarqmail.com:newlife06',
          'spock534@hotmail.com:JLG1986^^',
          'fitfrancois46@gmail.com:francois85',
          'mat.rafale@hotmail.fr:bf23b647',
          'flystarlp@outlook.com:000000abc',
          'alexliam11@yahoo.com:brooke8675309',
          'george.wheen@gmail.com:francais247',
          'shellidan@yahoo.com:Katelyn0424',
          'brennan1104@msn.com:R@nger02',
          'gun667@naver.com:a8862593',
          'ilan.ledragon@live.fr:bidulus09',
          'oyvind_139@hotmail.com:Vivind223',
          'grisha-igvz@mail.ru:720225g',
          'jyniisan@gmail.com:jyniisan1',
          'simka_2003@mail.ru:123qazwsxed',
          'ZeodoHokill@gmail.com:DeathoTrain',
          'ruybarbosa4@hotmail.com:osaiopcra123',
          'blaingarrison@gmail.com:Bleeding13',
          'theabnormalman@hotmail.co.uk:pokemon468',
          'gavstrk@gmail.com:2corin517',
          'orecrafter12@gmail.com:asdfghjkl12',
          'robertlthomas1508@googlemail.com:5tewkesbury',
          'qkelly@sympatico.ca:57chubby',
          'arcanisombre@hotmail.com:781227mort',
          'nicolestrahm@outlook.com:Funfun101',
          'lego.best@live.se:elvis2003',
          'rjb1963@hotmail.co.uk:vectra150',
          'cltaylor9810@gmail.com:hazmatl3ader',
          'sc_egan@hotmail.com:catbox4u',
          'rasmuus_96@hotmail.com:wtfloln00b',
          'experimentalrem@yahoo.com:2817eccj',
          'chip.hafner@web.de:avengers12',
          'p.a.carsin@orange.fr:polcar99',
          'c.behmenburg@gmx.net:thefog666',
          'realsasquatch808@gmail.com:drunko1997',
          'steverhart12@yahoo.com:pillow12',
          'jwtheatre@gmail.com:assman23',
          'killadavidthomas@aol.com:jackwilliam98',
          'Mr.comicon@gmail.com:wazupdude123',
          'bartley111@gmail.com:fructose111',
          'psyex2@telus.net:f59209440',
          'juli_casalone@hotmail.com:zorrolo10',
          'mnunesfilho@hotmail.com:valena12',
          'akizxcvb@gmail.com:asdf1525',
          'mitchellmartin190@gmail.com:shadowdog1',
          'rrainpow@hotmail.no:Eternion1',
          'majornudelholz@gmail.com:Fabian98',
          'jamesdixonballs@hotmail.com.au:ollie123',
          'schoene.zittau@freenet.de:stanley01',
          'ptit-rastaman@hotmail.fr:clemjtm27',
          'dannyhorsford@hotmail.com:Santaspickle111',
          'thordraco@yahoo.com:orionm42',
          'necas68@sapo.pt:gelato26',
          'tomais.peluso@gmail.com:tomais123',
          'Sderg420@gmail.com:Zoktar2121',
          'maju.pm@gmail.com:23kl1677',
          'princessliv@hellokitty.com:iluvsims1',
          'danielsnow1511@gmail.com:Storming1',
          'codekiwi97@gmail.com:peke5000',
          'lendria@live.se:L3rn14.eu',
          'sean_gamerz@yahoo.com:Sean08021992',
          'thor.hoybye@gmail.com:11lining11',
          'warrencooper95@yahoo.co.uk:Mortalkombat098',
          'rchl_prd89@hotmail.com:Valarie06',
          'ben_24@hotmail.ca:kamikaz44',
          'kputtwolfess@aol.com:shark105',
          'captainpeanut@hotmail.co.uk:daisymay345',
          'annhendriks@live.co.uk:walla5808',
          'ruselow1@gmail.com:aprilmay',
          'joker-el@hotmail.com:Festus67',
          'lvxiaomenggame@hotmail.com:Xhtlxm0208lxm',
          'neon.noodles@yahoo.com:bubblegirl1',
          'russain_life@hotmail.com:animefreak123',
          'amitluclay@live.com:Letmein539472',
          'thomasbatrouney64@gmail.com:Jacovelli1',
          'andrewpham288@gmail.com:andrew288',
          'magnusbaungaard@gmail.com:hpjensen12',
          'duvallmika@yahoo.com:mika10000',
          'krnkid900@hotmail.com:krnzzang850',
          'dgil2514@aol.com:brooks16',
          'danielrpinho@outlook.com:doremi2010',
          'felix_7483@hotmail.com:tercel1998',
          'fer_uc_cruz@live.com.mx:Tambor01',
          'ejgalas@yahoo.com:snowboard1',
          'april4490@yahoo.com:anna42711',
          'petitjul51@gmail.com:narujul1996',
          'tibbetts99@gmail.com:b100953D',
          'ahaynes99@hotmail.com:hithere1',
          'dkp1210@yahoo.com:Ds5948938',
          'txp0521@yahoo.com:riddler21',
          'benni100@gmx.net:Anno1602',
          'michaelboyer8@gmail.com:Ilovewwe10',
          'jessy_lew@hotmail.com:Iluvtim1',
          'yinyin1324@yahoo.com.hk:m4a1king',
          'lfcspence01@yahoo.co.uk:Stevengerrard08',
          'ronmelmacbeth@gmail.com:kneern1313',
          'caitlin_curran@live.com:paige0323',
          'ben.artisan@gmail.com:Thaor113',
          'michael121217@gmail.com:mike0707',
          'rodrigoreis1999@gmail.com:ujfalusi',
          'kieranradford@hotmail.com:Sharna13',
          'victor.apsouza@gmail.com:qazwsx_123',
          'jjt1007@optonline.net:myboys9600',
          'josh.w.jackson@gmail.com:@n0nym0us12',
          'kevindaly403@yahoo.com:kjddal25',
          'rkmoflear@gmail.com:rokris1088',
          'jb.bourgois@hotmail.fr:Hurr1c4nn3',
          'jamie_dorrian@yahoo.co.uk:Fe16c2529b',
          'spectrogamer.pt@gmail.com:spectro123',
          'skizzze@gmail.com:N@Q@W0yu',
          'rune920@gmail.com:darkfire98',
          'djwalls2009@live.com:icecream12',
          'addolae@aol.com:glowstick7',
          'b.lafficher@gmail.com:wnqmap10!',
          'pedererkul@hotmail.com:453shums',
          'myhomework.nf@gmail.com:readysetgo',
          'bahcorp@hotmail.com:bahlex28',
          'gaming.avencer@gmail.com:Pirouette1',
          'max_mad619@hotmail.com:martin643d',
          'pontus_h@live.se:hulliganen1',
          'jwill48992@hotmail.com:dragonslayer07',
          'crystalrose10291999@yahoo.com:crystal1029',
          'nathanricoy@hotmail.com:bumbum99',
          'maxus@pyrusboss.com:andres123',
          'ttim2143@yahoo.com:shop2143',
          'dragonballz75@live.com.au:Shark788',
          'zachary_stites@hotmail.com:12qwas!@QWAS',
          'd.nied.d@gmail.com:Soldier88*',
          'Drongesenkh@live.com:Kriller99',
          'boby-88@hotmail.fr:Tuluxa89',
          'davidfire177@yahoo.com:99cookies',
          'mtwagner@asu.edu:gyroman45',
          'igorataides@gmail.com:3c5628a55',
          'charlie@hdholm.se:charlie940122',
          'andygarcia_78@hotmail.com:a0611055',
          'tidus5964@hotmail.fr:(diron)64',
          'otaviohenriquesm0@hotmail.com:suzi1234',
          'ky6ky7@outlook.com:thekid12',
          'kris.moe@hotmail.no:manutdfan1',
          'basweijers@hotmail.com:Sharky1981',
          'jeffhary74@yahoo.com:tarek123',
          'simon_finlay94@hotmail.com:Simfin123',
          'rigelcastelo@hotmail.com:152992',
          'stephenromano@live.com:cookie42',
          'aren_papissian@hotmail.com:joeboxer123',
          'jennihouston@embarqmail.com:newlife06',
          'spock534@hotmail.com:JLG1986^^',
          'datfoxygamer@gmail.com:budgie101',
          'absolutekyoshiro@yahoo.com:Animagod123',
          'dodlelp43@gmail.com:Scooby0101',
          'johnsone060@gmail.com:cm062060',
          'xmov007@yahoo.com:Allgod007',
          'aydan0902@yahoo.com:aydan0902',
          'iwbtanthony@gmail.com:Bistro123',
          'crystalstoner@gmail.com:pass5145',
          'kavonb03@gmail.com:kavon123',
          'isorryminecraft@gmail.com:Kayser16',
          'xdarkneszfallsx@hotmail.com:Joshnick1',
          'damian@roxburghonline.co.uk:benjam81',
          'maddog98@ymail.com:6r9wxbye',
          'leanne_andy@yahoo.co.uk:Cta1so26',
          'jumpmansiegel@aim.com:blackcement3',
          'casr144@hotmail.com:dftr1997',
          'arnodeschrijver@outlook.com:Waluigi1',
          'david.mohringer@live.nl:David2000',
          'scott.field@live.co.uk:wolf1599412',
          'derek_24_42@hotmail.com:Darkness4154 ',
          'j.d.jmasse@gmail.com:voodoo818',
          'pardo__95@hotmail.es:kancerber99',
          'endress.tim@icloud.com:10101997Timm',
          'jake-willetts@hotmail.co.uk:Lukeskywalker123',
          'phoenix.mailloux@yahoo.ca:dawson0016',
          'd.tmnao@gmail.com:out092525 ',
          'demonslayer1993@gmail.com:chevy1967',
          'ferretmasta@live.com:Poetry02',
          'elbowsuprubberdown@gmail.com:Extreme103',
          'lilmc1428@gmail.com:emillym1',
          'henning.liljegren@gmail.com:Hslhsl84',
          'bryan.bodell@gmail.com:Wodahs011 ',
          'julyhellboy14@yahoo.com:dondon93',
          'benjamin_921@msn.com:Papou777'
          ];

          let randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
          const cacadembed2 = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(`${message.author.tag}`, `${message.author.avatarURL} `)
            .addField(`:white_check_mark: Compte Généré. Regardez vos MP's`, `Lien pour ajouter le bot: https://discordapp.com/oauth2/authorize?client_id=574323767757504536&scope=bot&permissions=268463160`)
           message.channel.send(cacadembed2) 
           message.author.send('Hey, Voici ton compte Minecraft: ' + randomAnswerPicker)
        }}})
