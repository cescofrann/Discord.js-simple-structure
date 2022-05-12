const {
  SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
  name: 'example',
  data: new SlashCommandBuilder()
    .setName('example')
    .setDescription('This is just an example of slash commands'),

  async execute(interaction) {

    const row = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageButton()
        .setLabel('DotBund Services')
        .setStyle('LINK')
        .setURL('https://discord.gg/8wEC2z68Zy')
        .setEmoji('💀'),
    );
    


//  _______              __      _______                             __ 
//  |       \            |  \    |       \                           |  \
//  | $$$$$$$\  ______  _| $$_   | $$$$$$$\ __    __  _______    ____| $$
//  | $$  | $$ /      \|   $$ \  | $$__/ $$|  \  |  \|       \  /      $$
//  | $$  | $$|  $$$$$$\\$$$$$$  | $$    $$| $$  | $$| $$$$$$$\|  $$$$$$$
//  | $$  | $$| $$  | $$ | $$ __ | $$$$$$$\| $$  | $$| $$  | $$| $$  | $$
//  | $$__/ $$| $$__/ $$ | $$|  \| $$__/ $$| $$__/ $$| $$  | $$| $$__| $$
//  | $$    $$ \$$    $$  \$$  $$| $$    $$ \$$    $$| $$  | $$ \$$    $$
//   \$$$$$$$   \$$$$$$    \$$$$  \$$$$$$$   \$$$$$$  \$$   \$$  \$$$$$$$
                                                                      
                                                                      
                                                                      
 
      var say = new Discord.MessageEmbed()
          .setColor("#B965EF")
          .setTitle(interaction.guild.name)
          .setDescription("Please join our discord to be gratefull <3")
          .addField("**What is Lorem Ipsum?:**", `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, false)
          .addField("*Why do we use it?*", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", true)   
          .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
          .setFooter("DotBound Services" )
          .setTimestamp();
      interaction.reply({
          embeds:[say],
          components:[row]
      })
  },
};






































































































































































































































                                                                                                                       
// 8 888888888o.          ,o888888o. 8888888 8888888888 8 888888888o   8 8888      88 b.             8 8 888888888o.      
// 8 8888    `^888.    . 8888     `88.     8 8888       8 8888    `88. 8 8888      88 888o.          8 8 8888    `^888.   
// 8 8888        `88. ,8 8888       `8b    8 8888       8 8888     `88 8 8888      88 Y88888o.       8 8 8888        `88. 
// 8 8888         `88 88 8888        `8b   8 8888       8 8888     ,88 8 8888      88 .`Y888888o.    8 8 8888         `88 
// 8 8888          88 88 8888         88   8 8888       8 8888.   ,88' 8 8888      88 8o. `Y888888o. 8 8 8888          88 
// 8 8888          88 88 8888         88   8 8888       8 8888888888   8 8888      88 8`Y8o. `Y88888o8 8 8888          88 
// 8 8888         ,88 88 8888        ,8P   8 8888       8 8888    `88. 8 8888      88 8   `Y8o. `Y8888 8 8888         ,88 
// 8 8888        ,88' `8 8888       ,8P    8 8888       8 8888      88 ` 8888     ,8P 8      `Y8o. `Y8 8 8888        ,88' 
// 8 8888    ,o88P'    ` 8888     ,88'     8 8888       8 8888    ,88'   8888   ,d8P  8         `Y8o.` 8 8888    ,o88P'   
// 8 888888888P'          `8888888P'       8 8888       8 888888888P      `Y88888P'   8            `Yo 8 888888888P'      
