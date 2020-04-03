const fs = require('fs-extra');
const Discord = require('discord.js');
require('dotenv').config();

const randomImage = require('./utils/randomImage.js');
const randomQuote = require('./utils/randomQuote.js');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready');
});

client.on('message', (message) => {
  const { content, channel } = message;

  if (content.toLowerCase().startsWith('!commands')) {
    message.channel.send(`
      Here are Tofu Bot\'s available commands:
      **!commands** - See list of Tofu Bot commands
      **!tofu** - Get random picture of Tofu the bunny
      **!axol** - Get random picture of Axol the axolotl
      **!lotl** - Get random picture of Lotl the axolotl
      **!eddy**- Get random picture of Eddy the cat
      **!wheatley** - Get random picture of Wheatley the cat
      **!eli** - Get random picture of Eli the dog
      **!chris** - Get random Chris quote
      **!shawn** - Get random Shawn quote
      **!pirolli** - Get random Pirolli quote
      **!helka** - Get random Helka quote
    `);
  }

  if (content.toLowerCase().startsWith('!tofu')) {
    channel.send(randomImage('tofu'));
  }

  if (content.toLowerCase().startsWith('!axol')) {
    channel.send(randomImage('axol'));
  }

  if (content.toLowerCase().startsWith('!lotl')) {
    channel.send(randomImage('lotl'));
  }

  if (content.toLowerCase().startsWith('!eddy')) {
    channel.send(randomImage('eddy'));
  }

  if (content.toLowerCase().startsWith('!wheatley')) {
    channel.send(randomImage('wheatley'));
  }

  if (content.toLowerCase().startsWith('!eli')) {
    channel.send(randomImage('eli'));
  }

  if (content.toLowerCase().startsWith('!chris')) {
    channel.send(randomQuote('chris'));
  }

  if (content.toLowerCase().startsWith('!shawn')) {
    channel.send(randomQuote('shawn'));
  }

  if (content.toLowerCase().startsWith('!pirolli')) {
    channel.send(randomQuote('pirolli'));
  }

  if (content.toLowerCase().startsWith('!helka')) {
    channel.send(randomQuote('helka'));
  }
});

client.login(process.env.BOT_TOKEN);
