const fs = require('fs-extra');
const Discord = require('discord.js');

const randomImage = (animal) => {
  const imagesFolder = `./images/${animal}/`;
  const images = fs.readdirSync(imagesFolder).map((image) => image);
  const image = images[Math.floor(Math.random() * images.length)];
  return { files: [`${imagesFolder}${image}`] };
}

module.exports = randomImage;
