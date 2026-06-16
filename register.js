const { SlashCommandBuilder, REST, Routes } = require('discord.js');

const TOKEN = process.env.DISCORD_BOT_TOKEN;
const CLIENT_ID = "1511530361492869131";

const commands = [
  new SlashCommandBuilder()
    .setName('dh')
    .setDescription('Enviar mensaje por webhook')
    .addStringOption(option =>
      option.setName('webhook')
        .setDescription('URL del webhook')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('mensaje')
        .setDescription('Mensaje')
        .setRequired(true))
].map(cmd => cmd.toJSON());

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('⏳ Registrando comando...');

    await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      { body: commands }
    );

    console.log('✅ Comando /dh creado');
  } catch (error) {
    console.error(error);
  }
})();