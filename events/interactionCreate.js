module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
    // ---------- VERIFICA ---------
    if (!interaction.isButton()){ return } 
    else{
      if (interaction.customId == "verifica") {
        if(interaction.member.roles.cache.has('947221078109990933')){
          
          return (
            interaction.reply({content:'Hai già superato la verifica.', ephemeral:true }),
            interaction.followUp({content: 'Perché sei ancora qua ?! Vai ad esplorare il server' + interaction.user.toString(), ephemeral: true}))
          
        }else{
          return(
            interaction.member.roles.add('947221078109990933'),
            interaction.reply({
              content: 'Benvenuto nel server ! Ti sei appena verificato. Fatti un giro, se hai qualche dubbio scrivi pure in un ticket il tuo problema.',
              ephemeral: true
          })
          )
        }
      } 
    } 

    // ----------- COMANDI -----------
    // if (!interaction.isCommand()) { return }
    // else{
    //   if (!interaction.isCommand()) return

    //   const command = client.commands.get(interaction.commandName)
    //   if (!command) return
  
    //   command.execute(interaction)
      
    // }
  }
}
