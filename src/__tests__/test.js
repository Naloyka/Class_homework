import { Zombie } from '../clases';

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
