import Character from '../index';

export default class Undead extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 25;
    this.defence = 25;
  }
}
