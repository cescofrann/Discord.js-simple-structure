module.exports = {
    name: "ticket",
    data: {
        name: "ticket",
        description: "Aprirai un ticket; in poco avrai una risposta dal nostro Team di staff"
    },
    async execute(interaction) {
        console.log("0")
        await interaction.deferReply({ephemeral: true});
        let allChannels = client.channels.cache.filter(m => m.type == "text" && m.name.includes("ticket-")).map(m => m.name.split("ticket-")[1]);
        console.log("1")
        
        let already = allChannels.some(v => interaction.user.id.includes(v.toLowerCase()))
        if(already === true) {
            interaction.editReply({content: "You can only have **1** ticket at a time!", ephemeral: true})
            console.log("2")
        }else{
            console.log("22")
            var server = client.guilds.cache.get(config.guildId);
            let ticketChannel = await server.channels.create(`ticket-${interaction.user.username}`, {
                type: "GUILD_TEXT",
                topic: `${interaction.user.username}'s ticket`,
                parent: config.category,
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: ["SEND_MESSAGES","VIEW_CHANNEL"]
                    },
                    {
                        id: interaction.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    },
                    {
                        id: config.roleSupport,
                        allow: ["SEND_MESSAGES","VIEW_CHANNEL"]
                    }
                ]
             } 
            )
            console.log("32")
            
            interaction.editReply({content: "Ho appena creato il tuo ticket", ephemeral: true});
        }
    }
  }
// const {
//     SlashCommandBuilder
//   } = require('@discordjs/builders');
  
//   module.exports = {
//       name: 'ticket',

//     data: { 
//         name: "ticket",
//         description: 'Aprirai un ticket e lo staff sarà pronto ad aiutarti.'
//     },
//     async execute(interaction) {
//         console.log("0")
//         await interaction.deferReply({ephemeral: true});
//         let allChannels = client.channels.cache.filter(m => m.type == "text" && m.name.includes("ticket-")).map(m => m.name.split("ticket-")[1]);
//         console.log("1")
        
//         let already = allChannels.some(v => interaction.user.id.includes(v.toLowerCase()))
//         if(already === true) {
//             interaction.editReply({content: "You can only have **1** ticket at a time!", ephemeral: true})
//             console.log("2")
//         }else{
//             console.log("22")
//             let ticketChannel = await client.guild.channels.create(`ticket-${interaction.user.id}`, {
//                 type: "text",
//                 topic: `${interaction.user.username}'s ticket`,
//                 parent: client.config.category,
//                 permissionOverwrites: [
//                     {
//                         id: interaction.user.id,
//                         allow: ["SEND_MESSAGES","VIEW_CHANNEL"]
//                     },
//                     {
//                         id: interaction.guild.roles.everyone,
//                         deny: ["VIEW_CHANNEL"]
//                     },
//                     {
//                         id: client.config.supportRole,
//                         allow: ["SEND_MESSAGES","VIEW_CHANNEL"]
//                     }
//                 ]
//             })
//             console.log("32")
            
//             interaction.editReply({content: "Ho appena creato il tuo ticket", ephemeral: true});
//         }
//     }
// }