import { orderByProps } from '../app';

test('arrayProp', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  expect(orderByProps(obj, ['name', 'level'])).toEqual({
    name: 'мечник',
    level: 2,
    attack: 80,
    defence: 40,
    health: 10,
  }); // Ок
});
