const randomQuote = (person) => {
  let name = `${person.charAt(0).toUpperCase()}${person.slice(1)}`;
  let quotesArray;

  switch (person) {
    case 'chris':
      quotesArray = [
        '"I didn\'t punch a hole in my wall. A random guy came in one day and did it. It\'s just a coincidence that it happened after my SR on Overwatch dropped below 2500."',
        '"Why do I have to tip waitresses? I work 85 hours a week and you don\'t see me asking for any handouts."',
        '*Someone: "Hey how are you doing?"*\n"Fine >:( ... remembering shit that happened 7 years ago and refuses to let go."',
        '*Draws a shitty stiff image of an unoriginal character he made up*\n"Yeah. Famous cartoonist in the making."',
        '*Has a light cough*\n"I don\'t know I think I might REALLY have Covid this time guys..."'
      ];
      break;
    case 'shawn':
      quotesArray = [
        '"Sorry guys can\'t hangout. I\'ve got to clean my dad\'s grill today."',
        '*Vaguely hears conversation*\n"Haha, yeah. And that\'s why Hillary Clinton lost I guess."',
        '*Sees friends goofing off*\n"WOAH JEEZ RELAX CALM DOWN GUYS JESUS"',
        '"I would come hangout, but I have to study guys. Who knows how tough my brother\'s test is going to be."',
        '*Someone tries to start a conversation with shawn*\nYeah, that\'s just how it is."\n*Immediately ends conversation*"',
        '"I really don\'t think we should work on this generator together.."\n"I really don\'t think we should heal eachother here..."\n"I really don\'t think we should run away together..."\n"I really don\'t think we should escape together..."',
        '"Guys I\'ll be right back, there\'s a tree outside with a branch thats about to break and I think I can save it.'
      ];
      break;
    case 'pirolli':
      quotesArray = [
        '"I don\'t touch my dogs testicles because I like it... he needs it to be done."',
        '"Sorry guys, I can\'t hang out tonight. I\'m watching the masked singer with my dad and we __never__ miss an episode."',
        '*Disappears for 6 months*\n"Sorry I\'ve been working on my rock climbing skills."',
        '*Steals joke from Chris*\n"God damn I am funny."',
        '*intervalrupts conversation that had nothing to do with meat*\n"I don\'t eat meat anymore. I guess I just decided being a murderer wasnt cool..."'
      ];
      break;
    case 'helka':
      quotesArray = [
        '*Gets into a new hobby*\n"Alright, how can I make this into a get rich quick scheme..."',
        '"Have you guys tried the new application I made?"',
        '*Watches cartoon aimed at children*\n"Wait this story doesnt make logical sense..."',
        '*Joins discord with his shitty phone while he\'s at work*\n*Loud static*\n"You guys are gay."',
        '"I\'ve caught fish before. I just don\'t have any pictures and you guys weren\'t there."',
        '*Spills soda all over someone\'s property*\n"I really don\'t see how this is MY fault!"',
        '"Oh my god have you seen this picture of my bunny? She\'s such a rascal, always opening doors and starting cars."'
      ];
      break;
    case 'tyler':
      quotesArray = [
        '"Bro I\'m gonna leave this job, just watch next week."\n*4 years later*\n"I\'m just waiting for the perfect moment!"',
        ':billed_cap:',
        "Dude my buddy is a cop, I\'d watch your fucking back, punk."
      ];
      break;
    case 'dylan':
      quotesArray = [
        '*Pretends to be gay for hours and has sex with guy friend*\n"Hehe I\'m just playing... I\'m straight :)"',
        '"Hehehe I\'m sowwy for being a bad boy please don\'t punish me oWo ;)"',
        '*Dylan ingredients:* 50% fuck boy, 50% sad boy, 100% gay boy.'
      ];
      break;
    default:
      break;
  }

  return `**${name}:**\n${quotesArray[Math.floor(Math.random() * quotesArray.length)]}`;
}

module.exports = randomQuote;
