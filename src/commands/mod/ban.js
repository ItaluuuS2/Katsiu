const Discord = require("discord.js")

module.exports = {
  name: 'ban',
  description: 'Bane um usuário do servidor.',
  aliases: [''],
  run: async(client, message, args) => {
    var a = message.id
    
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`**<:erro:776925019204747276> │ \`${message.author}\`, Você não Possui a Permissão \`BAN_MEMBERS\`.**`)
    
    const user = message.mentions.users.first() || client.users.cache.get(args[0])
    
    
    if (!user) return message.channel.send(`**<:erro:776925019204747276> │ ${message.author}, Não encontrei esse usuário.**`)
    
    const motivo = args.slice(1).join('')
    
    const jad = "";
    
    const embed = new Discord.MessageEmbed()
    .setTitle('**<:ban2:845271291702542336> │ Banimento**')
    .addField('**<:DE_IconMembers:838442250933108767> │ Usuário:**', user.tag)
    .addField('**<:emoji_9:790927969165508608> │ Usuário que baniu:**', message.author)
    .addField('<:mdEdit:780822135958142999> │ Motivo:**', motivo)
    
    message.channel.messages.fetch(a).then(msg => msg.delete({ timeout: 1000 }));
    
    message.guild.members.ban(user).catch(err => {
      jad = err;
    });
    if(!jad) {
      return message.channels.send(embed)
    }
    
  }
}