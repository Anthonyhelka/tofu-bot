const randomQuote = (person) => {
  let name = `${person.charAt(0).toUpperCase()}${person.slice(1)}`;
  let quotesArray;

  switch (person) {
    case 'chris':
      quotesArray = [
        '"I didn\'t punch a hole in my wall. A random guy came in one day and did it. It\'s just a coincidence that it happened after my SR on Overwatch dropped below 2500."',
        '"Why do I have to tip waitresses? I work 85 hours a week and you don\'t see me asking for any handouts."',
        '"Do you guys think they\'re gonna save Eri?"'
      ];
      break;
    case 'shawn':
      quotesArray = [
        '"Sorry guys can\'t hangout. I\'ve got to clean my dad\'s grill today."',
        '*Vaguely hears conversation*\n"Haha, yeah. And that\'s why Hillary Clinton lost I guess."',
        '*Sees friends goofing off*\n"WOAH JEEZ RELAX CALM DOWN GUYS JESUS"'
      ];
      break;
    case 'pirolli':
      quotesArray = [
        '"I don\'t touch my dogs testicles because I like it... he needs it to be done."',
        '"Sorry guys, I can\'t hang out tonight. I\'m watching the masked singer with my dad and we __never__ miss an episode."',
        '*Disappears for 6 months*\n"Sorry I\'ve been working on my rock climbing skills."'
      ];
      break;
    case 'helka':
      quotesArray = [
        '*Gets into a new hobby*\n"Alright, how can I make this into a get rich quick scheme..."',
        '"Have you guys tried the new application I made?"',
        '*Watches cartoon aimed at children*\n"Wait this story doesnt make logical sense..."'
      ];
      break;
    default:
      break;
  }

  return `**${name}:**\n${quotesArray[Math.floor(Math.random() * quotesArray.length)]}`;
}

module.exports = randomQuote;