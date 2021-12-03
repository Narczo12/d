const ms = require('ms')
const fetch = require('node-fetch')
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require("fs");
const config = require('./config.json')
const dotenv = require('dotenv').config()
client.commands = new Discord.Collection();



const completemsg = `Dziękujemy za zweryfikowanie się na naszym serwerze!`

const shortcode = (n) => {
  const possible = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz0123456789'
  let text = ''
  for (var i = 0; i < n + 1; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))
  return text;
}

//weryfikacja
client.on('guildMemberAdd', (member) => {
  if (member.user.bot || member.guild.id !== config.guild) return
  const token = shortcode(8)
  const wiadomość = `Aby posiadać pełen dostęp do naszego serwera discord musisz przepisać kod poniżej \`${token}\``
  let embed2 = new Discord.MessageEmbed()
  .setColor("#00d0ff")
  .setAuthor('Musisz się zweryfikować!')
  .setDescription(`${wiadomość}`)
  .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, member.user.displayAvatarURL())
  .setTimestamp()
  
  member.send(embed2)
  member.user.token = token
})

const weryfikacja = '{token}'

client.on('message', (message) => {
  if (message.author.bot || !message.author.token || message.channel.type !== `dm`) return
  if (message.content !== (weryfikacja.replace('{token}', message.author.token))) return
  let embed2 = new Discord.MessageEmbed()
  .setColor("#00d0ff")
  .setAuthor('Poprawnie przeszedłeś weryfikacje!')
  .setDescription(`${completemsg}`)
  .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
  .setTimestamp()
  message.channel.send(embed2)
  client.guilds.cache.get(config.guild).member(message.author).roles.add(config.veryfication_role)
      .catch(console.error)
})


process.on('unhandledRejection', (error) => {
  console.error(`Uncaught Promise Error: \n${error.stack}`)
})

process.on('uncaughtException', (err) => {
  let errmsg = (err ? err.stack || err : '').toString().replace(new RegExp(`${__dirname}/`, 'g'), './')
  console.error(errmsg)
})

//powitania
client.on("guildMemberAdd", (member) => {
  const embed = new Discord.MessageEmbed()
      .setColor('#00d0ff')
      .setAuthor(`Witaj ${member.user.username}`)
      .setDescription(`Witamy Cię na serwerze \`HypeCash\`, to oficjalny serwer!`)
      .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, member.user.displayAvatarURL())
      .setTimestamp()
      client.channels.cache.get(config.welcome_channel).send(embed)
});

client.on("guildMemberRemove", (member) => {
  const embed = new Discord.MessageEmbed()
      .setColor('#00d0ff')
      .setAuthor(`Żegnaj ${member.user.username}`)
      .setDescription(`Żegnamy Cię na serwerze \`HypeCash\`, to oficjalny serwer!`)
      .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, member.user.displayAvatarURL())
      .setTimestamp()
      client.channels.cache.get(config.welcome_channel).send(embed)
});


//propozycje
client.on('message', (message) => {
  const {channel, content, member } = message

    if(channel.id === config.suggestions_channel && !member.user.bot) {
      message.delete();

      const embed = new Discord.MessageEmbed()
      .setColor('#00d0ff')
      .setAuthor(`Propozycja: ${member.displayName}`)
      .setDescription(content)
      .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, member.user.displayAvatarURL())

      channel.send(embed).then((message) => {
        message.react('👍').then(() => {
          message.react('👎')
        })
      })
    }
})



client.on('ready', () => {
    console.log(``)
    console.log(`\x1b[37m[\x1b[32mBOT\x1b[37m] Instancja została poprawnie uruchomiona!`)

    client.user.setActivity(config.status, {type: "PLAYING"});
})

fs.readdir("./cmd/", (err, files) => {

    if(err) console.log(err);
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("\x1b[37m[\x1b[33mCMD\x1b[37m] Nie znaleziono żadnych komend!");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./cmd/${f}`);
      function _0x3064(){var _0xa6e381=['216282oUKkmZ','1185198VDwbPJ','385574BYxNmi','5NxXgng','406894sTdkcN','21555csbZgs','log','7746890JQbfAU','728156YCjqPR','1944JMDAmj','9NTNHtq','\x20została\x20poprawnie\x20załadowana!'];_0x3064=function(){return _0xa6e381;};return _0x3064();}function _0x208a(_0x3e773f,_0x193380){var _0x30645d=_0x3064();return _0x208a=function(_0x208af8,_0xa1abe){_0x208af8=_0x208af8-0x100;var _0x33c1af=_0x30645d[_0x208af8];return _0x33c1af;},_0x208a(_0x3e773f,_0x193380);}var _0x212c0f=_0x208a;(function(_0x18ce00,_0x3f1feb){var _0x542a8d=_0x208a,_0x4aac04=_0x18ce00();while(!![]){try{var _0x46972f=-parseInt(_0x542a8d(0x103))/0x1+parseInt(_0x542a8d(0x101))/0x2*(-parseInt(_0x542a8d(0x109))/0x3)+parseInt(_0x542a8d(0x107))/0x4*(-parseInt(_0x542a8d(0x102))/0x5)+parseInt(_0x542a8d(0x10b))/0x6+parseInt(_0x542a8d(0x100))/0x7+parseInt(_0x542a8d(0x108))/0x8*(parseInt(_0x542a8d(0x104))/0x9)+parseInt(_0x542a8d(0x106))/0xa;if(_0x46972f===_0x3f1feb)break;else _0x4aac04['push'](_0x4aac04['shift']());}catch(_0x184175){_0x4aac04['push'](_0x4aac04['shift']());}}}(_0x3064,0x605f5),console[_0x212c0f(0x105)]('\x1b[37m[\x1b[33mCMD\x1b[37m]\x20Komenda:\x20'+f+_0x212c0f(0x10a)));
      client.commands.set(props.help.name, props);
    });
  
  });


  client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if(!cmd.startsWith(config.prefix)) return;
    
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
  
  })

client.login(process.env.token)
