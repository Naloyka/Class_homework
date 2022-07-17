import Zombie from '../js/Zombie';

test('create new class', () => {
  const result = new Zombie('Helen', 'Zombie');

  const sample = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 100,
    name: 'Helen',
    type: 'Zombie',
  };

  expect(result).toEqual(sample);
});

test('catch the Error with name', () => {
  const result1 = () => new Zombie('L', 'Zombie');
  expect(result1).toThrow('Некорректное имя');
});

test('catch the Error with type', () => {
  const result2 = () => new Zombie('Lena', 'Character');
  expect(result2).toThrow('Некорректный тип');
});

test('catch the Error with level', () => {
  const result = new Zombie('Helen', 'Zombie');
  result.level = 0;
  const testing = () => result.levelUp();
  expect(testing).toThrow('Вы проиграли!');
});

test('catch the Error with damage', () => {
  const result = new Zombie('Helen', 'Zombie');
  result.health = 0;
  const test = () => result.damage(2);
  expect(test).toThrow('Ошибка');
});

test('test levelUp', () => {
  const result = new Zombie('Helen', 'Zombie');
  result.levelUp();
  const sample = {
    name: 'Helen',
    type: 'Zombie',
    health: 100,
    level: 101,
    attack: 48,
    defence: 10,
  };
  expect(result).toEqual(sample);
});

test('test damage', () => {
  const result = new Zombie('Helen', 'Zombie');
  result.damage(4);
  const sample = {
    name: 'Helen',
    type: 'Zombie',
    health: 96.4,
    level: 100,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(sample);
});
