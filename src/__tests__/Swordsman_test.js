import Swordsman from '../js/Swordsman';

test('create new class', () => {
  const result = new Swordsman('Helen', 'Swordsman');

  const sample = {
    name: 'Helen',
    type: 'Swordsman',
    health: 100,
    level: 100,
    attack: 40,
    defence: 25,
  };

  expect(result).toEqual(sample);
});

test('catch the Error with name', () => {
  const result1 = () => new Swordsman('H', 'Swordsman');
  expect(result1).toThrow('Некорректное имя');
});

test('catch the Error with type', () => {
  const result2 = () => new Swordsman('Helen', 'Character');
  expect(result2).toThrow('Некорректный тип');
});

test('catch the Error with level', () => {
  const result = new Swordsman('Helen', 'Swordsman');
  result.level = 0;
  const testing = () => result.levelUp();
  expect(testing).toThrow('Вы проиграли!');
});

test('catch the Error with damage', () => {
  const result = new Swordsman('Helen', 'Swordsman');
  result.health = 0;
  const test = () => result.damage(2);
  expect(test).toThrow('Ошибка');
});

test('test levelUp', () => {
  const result = new Swordsman('Helen', 'Swordsman');
  result.levelUp();
  const sample = {
    name: 'Helen',
    type: 'Swordsman',
    health: 100,
    level: 101,
    attack: 48,
    defence: 25,
  };
  expect(result).toEqual(sample);
});

test('test damage', () => {
  const result = new Swordsman('Helen', 'Swordsman');
  result.damage(4);
  const sample = {
    name: 'Helen',
    type: 'Swordsman',
    health: 97,
    level: 100,
    attack: 40,
    defence: 25,
  };
  expect(result).toEqual(sample);
});
