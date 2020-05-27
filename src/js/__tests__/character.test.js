import {
  describe, expect,
} from '@jest/globals';
import Magician from '../characters/magician';

describe('Генератор кодов', () => {
  test('Проверка на нормальную атаку до 10', () => {
    const received = new Magician('Санька');
    received.attack = 2;
    expect(received)
      .toEqual({
        atack: 90,
        name: 'Санька',
        stoned: false,
        type: 'Magician',
      });
  });

  test('Проверка на нормальную атаку до 10 c туманом', () => {
    const received = new Magician('Санька');
    received.stonedMode = true;
    received.attack = 2;
    expect(received)
      .toEqual({
        atack: 85,
        name: 'Санька',
        stoned: true,
        type: 'Magician',
      });
  });

  test('Проверка на дальность выстрела', () => {
    const received = new Magician();
    expect(() => { received.attack = 11; })
      .toThrowError(new Error('Так далеко нельзя стрелять'));
  });
});
