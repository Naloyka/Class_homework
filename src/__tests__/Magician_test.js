import Magician from '../js/Magician';

test('create new class', () => {
  const result = new Magician('Helen', 'Magician');

  const sample = {
    name: 'Helen',
    type: 'Magician',
    health: 100,
    level: 100,
    attack: 10,
    defence: 40,
  };

  expect(result).toEqual(sample);
});

test('catch the Error with name', () => {
  const result1 = () => new Magician('H', 'Magician');
  expect(result1).toThrow('Некорректное имя');
});

test('catch the Error with type', () => {
  const result2 = () => new Magician('Helen', 'Character');
  expect(result2).toThrow('Некорректный тип');
});

test('catch the Error with level', () => {
  const result = new Magician('Helen', 'Magician');
  result.level = 0;
  const testing = () => result.levelUp();
  expect(testing).toThrow('Вы проиграли!');
});

test('catch the Error with damage', () => {
  const result = new Magician('Helen', 'Magician');
  result.health = 0;
  const test = () => result.damage(2);
  expect(test).toThrow('Ошибка');
});

test('test levelUp', () => {
  const result = new Magician('Helen', 'Magician');
  result.levelUp();
  const sample = {
    name: 'Helen',
    type: 'Magician',
    health: 100,
    level: 101,
    attack: 12,
    defence: 40,
  };
  expect(result).toEqual(sample);
});

test('test damage', () => {
  const result = new Magician('Helen', 'Magician');
  result.damage(4);
  const sample = {
    name: 'Helen',
    type: 'Magician',
    health: 97.6,
    level: 100,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(sample);
});
