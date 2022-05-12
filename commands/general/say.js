const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  
  module.exports = {
    name: 'say',
    data: new SlashCommandBuilder()
      .setName('say')
      .setDescription('Converto il messagggio in un embed')
      .addStringOption(option =>
        option.setName('message')
        .setDescription('Scrivi qua il tuo messaggio')
        .setRequired(true))
      .addChannelOption(option =>
        option.setName('stanza')
        .setDescription('Indica la stanza dove vuoi mandare il messaggio. Ignorami se vuoi il messaggio qui')
        .setRequired(false)),


    async execute(interaction) {

        var say = new Discord.MessageEmbed()
            .setColor(config.serverColorMain)
            .setTitle(interaction.guild.name)
            
            .addField("**Admin:**", `${interaction.user.toString()}`, false)
            .addField("**Message:**", "*"+interaction.options.getString('message')+"*", true)  //true e fa rimanere sulla stessa linea le sezioni 
            
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .setFooter("DotBound Services" )
            .setTimestamp();
        if(interaction.option.get)
        interaction.reply({
            embeds:[say]
        })
    },
};