import { Character } from './index';

class Bowman extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 40;
    this.defence = 25;
  }
}

class Magician extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 10;
    this.defence = 40;
  }
}

class Daemon extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 25;
    this.defence = 25;
  }
}
export class Zombie extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 40;
    this.defence = 10;
  }
}

const person = new Zombie('Helen', 'Zombie');
