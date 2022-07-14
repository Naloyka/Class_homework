class Character {
    constructor(name, type, attack, defence) {

        if (name.length < 2 || name.length > 10) {
            throw new Error("Некорректное имя")
        } else {
            this.name = name
        };

        if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            this.type = type
        } else {
            throw new Error("Некорректный тип")
        }
        this.defence;
        this.attack;
        this.health = 100;
        this.level = 100;
    }

    levelUp() {
        if (this.level === 0) {
            throw new Error("Вы проиграли!")
        }

        this.level = this.level + 1;
        this.attack = this.attack + (this.attack * 0.2);
        this.health = 100;
    }

    damage(points) {
        if (this.health <= 0) {
            return
        }
        this.health = this.health - (points * (1 - this.defence / 100))
    }
}

class Bowman extends Character {
    constructor(...args) {
        super(...args)
        this.attack = 25;
        this.defence = 25;
    }
}

class Swordsman extends Character {
    constructor(...args) {
        super(...args)
        this.attack = 40;
        this.defence = 25;
    }
}

class Magician extends Character {
    constructor(...args) {
        super(...args)
        this.attack = 10
        this.defence = 40
    }
}

class Daemon extends Character {
    constructor(...args) {
        super(...args)
        this.attack = 10
        this.defence = 40
    }
}

class Undead extends Character {
    constructor(...args) {
        super(...args)
        this.attack = 25
        this.defence = 25
    }
}
export default class Zombie extends Character {
    constructor(...args) {
        super(...args)
        this.attack = 40
        this.defence = 10
    }
}

const person = new Zombie("Helen", "Zombie")