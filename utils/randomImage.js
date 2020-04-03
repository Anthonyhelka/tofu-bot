const fs = require('fs-extra');
const { MessageAttachment } = require('discord.js');

const randomImage = (animal) => {
  const imagesPath = `./images/${animal}/`;
  const imagesArray = fs.readdirSync(imagesPath).map((image) => image);
  const image = imagesArray[Math.floor(Math.random() * imagesArray.length)];
  return new MessageAttachment(fs.readFileSync(`${imagesPath}${image}`));
}

module.exports = randomImage;
