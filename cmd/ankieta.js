const Discord = require("discord.js");
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {

        let msgC = args.join(" ");
        let embed2 = new Discord.MessageEmbed()
        .setColor("#00d0ff")
        .setAuthor('Wystąpił błąd podczas interpretowania tej komendy!')
        .setDescription('Musisz wpisać treść ankiety!')
        .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
        .setTimestamp()
        if (!msgC) return message.channel.send(embed2)
        const embed = new Discord.MessageEmbed()
            .setAuthor('Ankieta 🎺')
            .setColor('#00d0ff')
            .setDescription(`${msgC}
            
            Jeśli podoba ci się taki pomysł dodaj reakcje \`👍\` jeśli nie \`👎\``)
            .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
            .setTimestamp()

        let wysłano = await client.channels.cache.get(config.poll_channel).send(embed)
        wysłano.react(config.emote_yes);
        wysłano.react(config.emote_no);
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
    name: "ankieta"
};