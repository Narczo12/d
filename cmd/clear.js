const Discord = require("discord.js");
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {

        let embed2 = new Discord.MessageEmbed()
        .setColor("#00d0ff")
        .setAuthor('Wystąpił błąd podczas interpretowania tej komendy!')
        .setDescription('Musisz wpisać liczbę wiadomości!')
        .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
        .setTimestamp()

        let embed1 = new Discord.MessageEmbed()
        .setColor("#00d0ff")
        .setAuthor('Wystąpił błąd podczas interpretowania tej komendy!')
        .setDescription('Liczba wiadomości nie może być mniejsza niż \`1\` ani większa niż \`100\`')
        .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
        .setTimestamp()

        if(!args[0]) return message.channel.send(embed2)
        if(args[0] < "1") return message.channel.send(embed1)
        if(args[0] > "100") return message.channel.send(embed1)


        const wiadomości = await message.channel.messages.fetch({ before: message.id, limit: args[0] });

        await message.channel.bulkDelete(wiadomości, true).then((_message) => {
            let embed2 = new Discord.MessageEmbed()
            .setColor("#00d0ff")
            .setAuthor('Sukces')
            .setDescription(`Usunięto \`${_message.size}\` wiadomości!`)
            .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
            .setTimestamp()
        message.delete();
        message.channel.send(embed2).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 2500);
        });
    });

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
    name: "clear"
};