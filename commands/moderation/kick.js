// module.exports = {
//   name: "kick",
//   data: {
//       name: "kick",
//       description: "Kick di un singolo utente"
//   },
//   execute(interaction) {
//     const user = client.guilds.cache.get(interaction.guildId).members.cache.get(interaction.options.getUser('user').id);
//     const executer = client.guilds.cache.get(interaction.guildId).members.cache.get(interaction.user.id);

//     if (!executer.permissions.has(client.discord.Permissions.FLAGS.KICK_MEMBERS)) return interaction.reply({
//       content: 'Non hai il permesso per fare questo comando! (`KICK_MEMBERS`)',
//       ephemeral: true
//     });

//     if (user.roles.highest.rawPosition > executer.roles.highest.rawPosition) return interaction.reply({
//       content: 'La persona che vuoi kikkare ha più poteri di te !',
//       ephemeral: true
//     });

//     if (!user.kickable) return interaction.reply({
//       content: 'La persona che vuoi kikkare è sopra di me quindi non posso kikkarla',
//       ephemeral: true
//     });

//     if (interaction.options.getString('motivo')) {
//       user.kick(interaction.options.getString('motivo'))
//       interaction.reply({
//         content: `**${user.user.tag}** 	L'ho **kikkato** con successo !`
//       });
//     } else {
//       user.kick()
//       interaction.reply({
//         content: `**${user.user.tag}** l'ho **kikkato** con successo !`
//       });
//     };
//   }
// }
const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  
  module.exports = {
    name: 'kick',
    data: new SlashCommandBuilder()
      .setName('kick')
      .setDescription('Kickare una persona.')
      .addUserOption(option =>
        option.setName('user')
        .setDescription('Membro da kickare')
        .setRequired(true))
      .addStringOption(option =>
          option.setName('motivo')
          .setDescription('Motivo del kick')
          .setRequired(true)),
    async execute(interaction) {
      const user = client.guilds.cache.get(interaction.guildId).members.cache.get(interaction.options.getUser('user').id);
      const executer = client.guilds.cache.get(interaction.guildId).members.cache.get(interaction.user.id);
  
      if (!executer.permissions.has("BAN_MEMBERS")) return interaction.reply({
        content: 'Non hai il permesso per fare questo comando! (`KICK_MEMBERS`)',
        ephemeral: true
      });
  
      if (user.roles.highest.rawPosition > executer.roles.highest.rawPosition) return interaction.reply({
        content: 'La persona che vuoi kikkare ha più poteri di te !',
        ephemeral: true
      });
  
      if (!user.kickable) return interaction.reply({
        content: 'La persona che vuoi kikkare è sopra di me quindi non posso kikkarla',
        ephemeral: true
      });
  
      if (interaction.options.getString('motivo')) {
        user.kick(interaction.options.getString('motivo'))
        interaction.reply({
          content: `**${user.user.tag}** 	L'ho **kikkato** con successo !`
        });
      } else {
        user.kick()
        interaction.reply({
          content: `**${user.user.tag}** l'ho **kikkato** con successo !`
        });
      };
    },
  };