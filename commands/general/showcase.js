const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  
  module.exports = {
        name: 'showcase',
    data: new SlashCommandBuilder()
      .setName('showcase')
      .setDescription('Questo Comando manda tutte le clip e le descrizioni dei nostri servizi nelle rispettive stanze.'),
      async execute(interaction, client) {
          
      }
    }
