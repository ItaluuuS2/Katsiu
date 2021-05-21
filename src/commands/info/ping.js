const Discord = require("discord.js");
0
module.exports = {
  name: 'ping',
  description: 'Veja meu ping',
  aliases: [''],
  run: async(client, message, args) => {
    message.channel.send(`🏓 | Meu ping é de **${client.ws.ping}**`)
  }
}