const fs = require('fs-extra');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready');
});

client.on('message', (message) => {
  if (message.content.toLowerCase().startsWith(`${prefix}tofu`)) {
    const imagesFolder = './images/';
    const images = fs.readdirSync(imagesFolder).map((image) => image);
    const randomImage = images[Math.floor(Math.random() * images.length)];
    message.channel.send('So cute!', { files: [`${imagesFolder}${randomImage}`] });
  }
});

client.login(token);
