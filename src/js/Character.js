export default class Character {
  constructor(name, type) {
    const arrType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('Некорректное имя');
    } else {
      this.name = name;
    }

    if (arrType.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Некорректный тип');
    }
    this.health = 100;
    this.level = 100;
    this.attack = 0;
    this.defence = 0;
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
      throw new Error('Ошибка');
    }
    this.health -= (points * (1 - this.defence / 100));
  }
}
