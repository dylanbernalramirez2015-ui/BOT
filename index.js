const { 
  Client, 
  GatewayIntentBits, 
  SlashCommandBuilder, 
  REST, 
  Routes 
} = require('discord.js');

const axios = require('axios');

const TOKEN = "MTUxMTUzMDM2MTQ5Mjg2OTEzMQ.Gjbwy7.YuQRr3gIVgvM97RE1ppqF5ilsl5IW4GV51pZ88";
const CLIENT_ID = "1511530361492869131";

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`🔥 DH listo como ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'dh') {
    const webhook = interaction.options.getString('webhook');
    const mensaje = interaction.options.getString('mensaje');

    try {
      await axios.post(webhook, {
        content: mensaje,
        username: "DH Bot"
      });

      await interaction.reply({
        content: "✅ Mensaje enviado",
        ephemeral: true
      });

    } catch (err) {
      await interaction.reply({
        content: "❌ Webhook inválido",
        ephemeral: true
      });
    }
  }
});

client.login(TOKEN);