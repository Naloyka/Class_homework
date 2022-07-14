export class Character {
  constructor(name, type, attack, defence) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Некорректное имя');
    } else {
      this.name = name;
    }

    if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      this.type = type;
    } else {
      throw new Error('Некорректный тип');
    }
    this.defence;
    this.attack;
    this.health = 100;
    this.level = 100;
  }

  levelUp() {
    if (this.level === 0) {
      throw new Error('Вы проиграли!');
    }

    this.level += 1;
    this.attack += (this.attack * 0.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      return;
    }
    this.health -= (points * (1 - this.defence / 100));
  }
}
