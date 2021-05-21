const Discord = require("discord.js");

module.exports = {
  name: 'avatar',
  description: 'Veja seu avatar, ou de um usuário.',
  aliases: ['av'],
  run: async(client, message, args) => {
  try {
 const user = message.mentions.users.first() || (!isNaN(args[0])?await client.users.fetch(String(args[0])):message.author)
 
 const embed = new Discord.MessageEmbed()
 .setTitle(`🖼️│Avatar de ${user.tag}`)
 .setImage(user.displayAvatarURL({ size: 4096, dinamyc: true, format: 'png'}))
 .setColor(RANDOM)
 .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
 message.channel.send(embed)
  } catch {
    message.channel.send(`**❌ │Não encontrei esse usuário.**`)
  }
 }
}