// module.exports = {
//   name: "ban",
//   data: {
//       name: "ban",
//       description: "Banneremo una persona per te."
//   },
//   execute(interaction) {
//     const user = client.guilds.cache.get(interaction.guildId).members.cache.get(interaction.options.getUser('target').id);
//     const executer = client.guilds.cache.get(interaction.guildId).members.cache.get(interaction.user.id);

//     if (!executer.permissions.has(client.discord.Permissions.FLAGS.BAN_MEMBERS)) return interaction.reply({
//       content: 'Non hai i permessi per fare questo comando ! (`BAN_MEMBERS`)',
//       ephemeral: true
//     });

//     if (user.roles.highest.rawPosition > executer.roles.highest.rawPosition) return interaction.reply({
//       content: 'La persona che vuoi bannare è sopra di me !',
//       ephemeral: true
//     });

//     if (!user.bannable) return interaction.reply({
//       content: 'La persona che vuoi bannare è sopra di me e non la posso bannare.',
//       ephemeral: true
//     });

//     if (interaction.options.getString('motivo')) {
//       user.ban({
//         reason: interaction.options.getString('motivo'),
//         days: 1
//       });
//       interaction.reply({
//         content: `**${user.user.tag}** è stato **BANNATO** !`,
//         ephemeral: true
//       });
//     } else {
//       user.ban({
//         days: 1
//       });
//       interaction.reply({
//         content: `**${user.user.tag}** è stato **BANNATO** !`,
//         ephemeral: true
//       });
//     };    
//   }
// }
const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  
  module.exports = {
    name: 'ban',
    data: new SlashCommandBuilder()
      .setName('ban')
      .setDescription('Ban una persona.')
      .addUserOption(option =>
        option.setName('target')
        .setDescription('Membro da bannare')
        .setRequired(true))
      .addStringOption(option =>
        option.setName('motivo')
        .setDescription('Motivo del ban')
        .setRequired(true)),
    async execute(interaction ) {
      const user = client.guilds.cache.get(interaction.guildId).members.cache.get(interaction.options.getUser('target').id);
      const executer = client.guilds.cache.get(interaction.guildId).members.cache.get(interaction.user.id);

      var dm = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("**DotBund Ban System Warning**")
        .addField("**ATTENZIONE:**", `*Sei appena stato bannato dal server: **__${interaction.guild.name}__**.\nPensa a quello che hai fatto e prova a contattare in dm qualche staffer tra qualche settimana.*`, false)

        .addField("**Reason:**", "*`` "+interaction.options.getString('motivo')+" ``*", true)  //true e fa rimanere sulla stessa linea le sezioni 
        .addField("**Admin:**", `${interaction.user.toString()}`, true)
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setFooter("DotBound Services", interaction.guild.iconURL())
        .setTimestamp();
      const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
            .setLabel('UnBan')
            .setStyle('SECONDARY')
            .setCustomId('unban')
            .setEmoji('💀'),
        );

      client.on('interactionCreate', async interaction => {
        if (!interaction.isButton) return;
        else if(interaction.customId == "unban"){ 
          await interaction.guild.members.unban(user).catch(e=> 
            interaction.reply({content: "Ho già sbannato questo utente", ephemeral: true}))
        }
        interaction.reply({content: "Ho sbannato " + user.toString(), ephemeral: true}).catch(e=> console.log(interaction.user.username+" Sta provado ad usare una interazione già usata precedentemente per sbannare "+ user.toString()));
      })
      if (!executer.permissions.has("BAN_MEMBERS") ) return interaction.reply({
        content: 'Non hai i permessi per fare questo comando ! (`BAN_MEMBERS`)',
        ephemeral: true
      });

      if (user.roles.highest.rawPosition > executer.roles.highest.rawPosition) return interaction.reply({
        content: 'La persona che vuoi bannare è sopra di me !',
        ephemeral: true
      });

      if (!user.bannable) return interaction.reply({
        content: 'La persona che vuoi bannare è sopra di me e non la posso bannare.',
        ephemeral: true
      });

      if (interaction.options.getString('motivo')) {
        await user.send({embeds: [dm]})
        user.ban({
          reason: interaction.options.getString('motivo'),
          days: 1
        });
        interaction.reply({
          content: `**${user.user.tag}** è stato **BANNATO** !`,
          ephemeral: true,
          components: [row]
        });
      } else {
        user.ban({
          days: 1
        });
        interaction.reply({
          content: `**${user.user.tag}** è stato **BANNATO** !`          ,
          ephemeral: true,
          components: [row]
        });
      };
    },
};