const colors = require('./colors');

const log = (...message) => {
  console.log(`
    ${message.join(' ')}
  `);
}

class Friend {
  constructor(name) {
    this.name = name;
    this.feeling = 'happy';
  }

  lieTo(friend) {
    log(`${colors.FgRed}${this.name} lied to ${friend.name} :(`)
    friend.feeling = 'sad';
  }

  apologizeTo(friend) {
    log(`${colors.FgGreen}${this.name} apologized to ${friend.name} :)`);
    friend.feeling = 'happy';
  }
}

David = new Friend('David');
Ahimelek = new Friend('Ahimelek');

const FRIENDS = [
  David,
  Ahimelek
];

exports.add = (name) => {
  FRIENDS.push(new Friend(name));
}

exports.get = (name) => {
  return FRIENDS.filter(f => f.name === name)[0];
}

exports.list = () => {
  log(`The friends in the story are:`)
  log(FRIENDS.map(f => f.name).join(', '));
}

exports.feeling = () => {
  FRIENDS.forEach(f => {
    let color = f.feeling === 'happy' ? colors.FgGreen : colors.FgRed;
    log(`${color}${f.name}`, 'is feeling', f.feeling);
  })
}
