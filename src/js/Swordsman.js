import Character from './Character';

export default class Swordsman extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 40;
    this.defence = 25;
  }
}
