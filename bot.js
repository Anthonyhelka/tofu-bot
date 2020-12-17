const fs = require('fs-extra');
const { Client, MessageAttachment } = require('discord.js');
require('dotenv').config();

const randomImage = require('./utils/randomImage.js');
const randomQuote = require('./utils/randomQuote.js');

const client = new Client();

client.once('ready', () => {
  console.log('Ready');
});

client.on('message', (message) => {
  const { content, channel, author } = message;

  if (author.bot) { return; }

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
      **!tyler** - Get random Tyler quote
      **!dylan** - Get random Dylan quote
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

  if (content.toLowerCase().startsWith('!tyler')) {
    channel.send(randomQuote('tyler'));
  }

  if (content.toLowerCase().startsWith('!dylan')) {
    channel.send(randomQuote('dylan'));
  }

  if (content.toLowerCase().startsWith('!fish chris')) {
    const image = new MessageAttachment(fs.readFileSync('./images/fish/chris.png'));
    channel.send(image);
  }

  if (content.toLowerCase().startsWith('!fish shawn')) {
    channel.send('Shawn wouldn\'t do something to disturb the environment like catch a fish.');
  }

  if (content.toLowerCase().startsWith('!fish pirolli')) {
    channel.send('Unfortunately, Pirolli has yet to catch a SINGLE fish. Shameful.');
  }

  if (content.toLowerCase().startsWith('!fish helka')) {
    const image = new MessageAttachment(fs.readFileSync('./images/fish/helka.png'));
    channel.send(image);
  }

  if (content.toLowerCase().startsWith('123')) {
    channel.send('456');
  }

  if (content.toLowerCase().startsWith('789')) {
    channel.send('10 and... stop');
  }

  if (content.toLowerCase().includes('swag')) {
    channel.send('Tofu says the word swag is so 2012... just stop.');
  }
});

client.login(process.env.BOT_TOKEN);
