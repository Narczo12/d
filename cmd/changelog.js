   
const Discord = require("discord.js");
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {

        if(!args[0]) {
            let embed = new Discord.MessageEmbed()
            .setColor("#00d0ff")
            .setAuthor('Wystąpił błąd podczas interpretowania tej komendy!')
            .setDescription(`Poprawne użycie ${config.prefix}changelog [dodaj/usun/zmien] [treść]\``)
            .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
            .setTimestamp()
    
            return message.channel.send(embed)
        }

        if(args[0] === "dodaj") {
            let msgC = args.splice(1).join(" ")
            let embed = new Discord.MessageEmbed()
            .setColor("#00d0ff")
            .setAuthor('Wystąpił błąd podczas interpretowania tej komendy!')
            .setDescription('Musisz wpisać treść changelogu!')
            .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
            .setTimestamp()
            if(!msgC) return message.channel.send(embed)


            let embed1 = new Discord.MessageEmbed()
            .setColor("#00d0ff")
            .setAuthor('Changelog [dodano]')
            .setDescription(msgC)
            .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
            .setTimestamp()

            client.channels.cache.get(config.changelog_channel).send(embed1)
        }
        
        if(args[0] === "usun") {

            let msgC = args.splice(1).join(" ")
            let embed = new Discord.MessageEmbed()
            .setColor("#00d0ff")
            .setAuthor('Wystąpił błąd podczas interpretowania tej komendy!')
            .setDescription('Musisz wpisać treść changelogu!')
            .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
            .setTimestamp()
            if(!msgC) return message.channel.send(embed)


            let embed1 = new Discord.MessageEmbed()
            .setColor("#00d0ff")
            .setAuthor('Changelog [usunięto]')
            .setDescription(msgC)
            .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
            .setTimestamp()

            client.channels.cache.get(config.changelog_channel).send(embed1)
            
        }

        if(args[0] === "zmien") {

            let msgC = args.splice(1).join(" ")
            let embed = new Discord.MessageEmbed()
            .setColor("#00d0ff")
            .setAuthor('Wystąpił błąd podczas interpretowania tej komendy!')
            .setDescription('Musisz wpisać treść changelogu!')
            .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
            .setTimestamp()


            let embed1 = new Discord.MessageEmbed()
            .setColor("#00d0ff")
            .setAuthor('Changelog [zmieniono]')
            .setDescription(msgC)
            .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
            .setTimestamp()

            client.channels.cache.get(config.changelog_channel).send(embed1)
            
        }



    } else {

        let embed = new Discord.MessageEmbed()
        .setColor("#00d0ff")
        .setAuthor('Wystąpił błąd podczas interpretowania tej komendy!')
        .setDescription('Musisz posiadać permisję aby użyć tej komendy (\`ADMINISTRATOR\`).')
        .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
        .setTimestamp()

        return message.channel.send(embed)
    }
}

module.exports.help = {
  name:"changelog"
}