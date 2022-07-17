import Bowman from '../js/Bowman';

test('create new class', () => {
  const result = new Bowman('Helen', 'Bowman');

  const sample = {
    name: 'Helen',
    type: 'Bowman',
    health: 100,
    level: 100,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(sample);
});

test('catch the Error with name', () => {
  const result1 = () => new Bowman('H', 'Bowman');
  expect(result1).toThrow('Некорректное имя');
});

test('catch the Error with type', () => {
  const result2 = () => new Bowman('Helen', 'Character');
  expect(result2).toThrow('Некорректный тип');
});

test('catch the Error with level', () => {
  const result = new Bowman('Helen', 'Bowman');
  result.level = 0;
  const testing = () => result.levelUp();
  expect(testing).toThrow('Вы проиграли!');
});

test('catch the Error with damage', () => {
  const result = new Bowman('Helen', 'Bowman');
  result.health = 0;
  const test = () => result.damage(2);
  expect(test).toThrow('Ошибка');
});

test('test levelUp', () => {
  const result = new Bowman('Helen', 'Bowman');
  result.levelUp();
  const sample = {
    name: 'Helen',
    type: 'Bowman',
    health: 100,
    level: 101,
    attack: 30,
    defence: 25,
  };
  expect(result).toEqual(sample);
});

test('test damage', () => {
  const result = new Bowman('Helen', 'Bowman');
  result.damage(4);
  const sample = {
    name: 'Helen',
    type: 'Bowman',
    health: 97,
    level: 100,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(sample);
});
