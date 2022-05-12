const { MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
    name: 'ready',
    async execute(client) {


        console.log("  /$$$$$$$              /$$     /$$$$$$$                            /$$")
        console.log(" | $$__  $$            | $$    | $$__  $$                          | $$")
        console.log(" | $$  \ $$  /$$$$$$  /$$$$$$  | $$  \ $$ /$$   /$$ /$$$$$$$   /$$$$$$$")
        console.log(" | $$  | $$ /$$__  $$|_  $$_/  | $$$$$$$ | $$  | $$| $$__  $$ /$$__  $$")
        console.log(" | $$  | $$| $$  \ $$  | $$    | $$__  $$| $$  | $$| $$  \ $$| $$  | $$")
        console.log(" | $$  | $$| $$  | $$  | $$ /$$| $$  \ $$| $$  | $$| $$  | $$| $$  | $$")
        console.log(" | $$$$$$$/|  $$$$$$/  |  $$$$/| $$$$$$$/|  $$$$$$/| $$  | $$|  $$$$$$$")
        console.log(" |_______/  \______/    \___/  |_______/  \______/ |__/  |__/ \_______/")


        console.log("\n\nAll Rights are reserved.\n\n\n\nBot Avviato correttamente")
        client.user.setPresence({ activities: [{ name: 'DotBund Services' , type: 'WATCHING' }], status: 'dnd' });
        

        
        
        client.guilds.cache.forEach(guild => {
            client.commands.forEach(command => {
                guild.commands.create(command.data)
            })
        })

        

        const oniChan = client.channels.cache.get('971465805000740911')
    
        function sendTicketMSG() {
            var verifica = new Discord.MessageEmbed()
            .setColor("#B965EF")
            .setTitle("**DotBund Verify**")
            .setDescription("Clicca il bottone qua sotto per verificarti.\n *Verificandoti accetterai anche i tos di questo discord.*")
            .setFooter("DotBound Services", client.user.avatarURL())
            .setTimestamp();

            const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                .setLabel('Verificati')
                .setStyle('PRIMARY')
                .setCustomId('verifica')
                .setEmoji('✅'),
            );
    
            oniChan.send({
            embeds: [verifica],
            components: [row]
            })
        }
    
        const toDelete = 10000;
    
        async function fetchMore(channel, limit) {
            if (!channel) {
            throw new Error(`Expected channel, got ${typeof channel}.`);
            }
            if (limit <= 100) {
            return channel.messages.fetch({
                limit
            });
            }
    
            let collection = [];
            let lastId = null;
            let options = {};
            let remaining = limit;
    
            while (remaining > 0) {
            options.limit = remaining > 100 ? 100 : remaining;
            remaining = remaining > 100 ? remaining - 100 : 0;
    
            if (lastId) {
                options.before = lastId;
            }
    
            let messages = await channel.messages.fetch(options);
    
            if (!messages.last()) {
                break;
            }
    
            collection = collection.concat(messages);
            lastId = messages.last().id;
            }
            collection.remaining = remaining;
    
            return collection;
        }
    
        const list = await fetchMore(oniChan, toDelete);
    
        let i = 1;
    
        list.forEach(underList => {
            underList.forEach(msg => {
            i++;
            if (i < toDelete) {
                setTimeout(function () {
                msg.delete()
                }, 1000 * i)
            }
            })
        })
    
        setTimeout(() => {
            sendTicketMSG()
        }, i);
        },
    };