const fs = require('fs-extra');
const Discord = require('discord.js');
require('dotenv').config();

const randomImage = require('./utils/randomImage.js');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready');
});

client.on('message', (message) => {
  if (message.content.toLowerCase().startsWith('!commands')) {
    message.channel.send(`
      Here are Tofu Bot\'s available commands:
      **!commands** - See list of Tofu Bot commands
      **!tofu** - Get random picture of Tofu the bunny
      **!axol** - Get random picture of Axol the axolotl
      **!lotl** - Get random picture of Lotl the axolotl
      **!eddy**- Get random picture of Eddy the cat
      **!wheatley** - Get random picture of Wheatley the cat
    `);
  }

  if (message.content.toLowerCase().startsWith('!tofu')) {
    message.channel.send(randomImage('tofu'));
  }

  if (message.content.toLowerCase().startsWith('!axol')) {
    message.channel.send(randomImage('axol'));
  }

  if (message.content.toLowerCase().startsWith('!lotl')) {
    message.channel.send(randomImage('lotl'));
  }

  if (message.content.toLowerCase().startsWith('!eddy')) {
    message.channel.send(randomImage('eddy'));
  }

  if (message.content.toLowerCase().startsWith('!wheatley')) {
    message.channel.send(randomImage('wheatley'));
  }
});

client.login(process.env.BOT_TOKEN);
