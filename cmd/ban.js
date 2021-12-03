const Discord = require("discord.js");
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
        const osoba = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        let embed = new Discord.MessageEmbed()
        .setColor("#00d0ff")
        .setAuthor('Wystąpił błąd podczas interpretowania tej komendy!')
        .setDescription(`Musisz oznaczyć!`)
        .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
        .setTimestamp()

        if(!args[0]) return message.channel.send(embed);

        let embed1 = new Discord.MessageEmbed()
        .setColor("#00d0ff")
        .setAuthor('Wystąpił błąd podczas interpretowania tej komendy!')
        .setDescription(`Nie mogę znaleźć takiej osoby!`)
        .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
        .setTimestamp()

        let embed2 = new Discord.MessageEmbed()
        .setColor("#00d0ff")
        .setAuthor('Wystąpił błąd podczas interpretowania tej komendy!')
        .setDescription(`Ta osoba nie może zostać zbanowana!`)
        .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
        .setTimestamp()

        if(!osoba) return message.channel.send(embed1);
        if(!osoba.bannable) return message.channel.send(embed2);

        let embed3 = new Discord.MessageEmbed()
        .setColor("#00d0ff")
        .setAuthor('Wystąpił błąd podczas interpretowania tej komendy!')
        .setDescription(`Nie możesz zbanować samego siebie!`)
        .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
        .setTimestamp()

        if(osoba.id === message.author.id) return message.channel.send(embed3);

        let powód = args.slice(1).join(" ");

        if(!powód) powód = 'Nie podano';

        osoba.ban({reason: `Powód: ${powód} @${message.author.tag}` })

        let embed4 = new Discord.MessageEmbed()
        .setColor("#00d0ff")
        .setAuthor('Sukces')
        .setDescription(`Osoba zbanowana: <@${osoba.id}>
        Zbanowana przez: <@${message.author.id}>
        Powód: \`${powód}\``)
        .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
        .setTimestamp()

        message.channel.send(embed4)

    } else {

        let embed = new Discord.MessageEmbed()
        .setColor("#00d0ff")
        .setAuthor('Wystąpił błąd podczas interpretowania tej komendy!')
        .setDescription('Musisz posiadać permisję aby użyć tej komendy (\`ADMINISTRATOR\`).')
        .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
        .setTimestamp()

        return message.channel.send(embed)
    }
};

module.exports.help = {
    name: "ban"
};