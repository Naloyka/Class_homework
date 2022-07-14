(() => {
  const e = new class extends class {
    constructor(e, t, h, s) { if (e.length < 2 || e.length > 10) throw new Error('Некорректное имя'); if (this.name = e, !['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(t)) throw new Error('Некорректный тип'); this.type = t, this.defence, this.attack, this.health = 100, this.level = 100; }

    levelUp() { if (this.level === 0) throw new Error('Вы проиграли!'); this.level += 1, this.attack += 0.2 * this.attack, this.health = 100; }

    damage(e) { this.health <= 0 || (this.health -= e * (1 - this.defence / 100)); }
  } {constructor(...e) { super(...e), this.attack = 40, this.defence = 10; }}('Helen', 'Zombie'); console.log(e), e.levelUp(), e.damage(7), console.log(e);
})();
