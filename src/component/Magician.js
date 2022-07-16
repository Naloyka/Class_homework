import Character from '../index';

export default class Magician extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 10;
    this.defence = 40;
  }
}
