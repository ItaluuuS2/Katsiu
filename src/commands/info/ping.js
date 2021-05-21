module.exports = {
  name: 'ping',
  description: 'Veja meu ping',
  aliases: [''],
  run: async(client, message, args) => {
    message.channel.send(`**🏓 | ${message.author}, meu ping é de ``${client.ws.ping}``.**`)
  }
}