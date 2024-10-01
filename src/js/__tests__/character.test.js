import { Character } from '../character'
import { Bowman } from '../character'
import { Swordsman } from '../character'
import { Magician } from '../character'
import { Daemon } from '../character'
import { Undead } from '../character'
import { Zombie } from '../character'
import { test } from "@jest/globals";

test('should mistake', () => {
  expect(function() {
    new Zombie('')
  }).toThrow(new Error('Name is uncorrect'));

  expect(function() {
    new Character('Monster', '')
  }).toThrow(new Error('Type is uncorrect'));

});

test('should Character', () => {
  expect(new Character('Monster', 'Daemon')).toEqual({
    name: 'Monster',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined
  });
});

test('should Bowman', () => {
  expect(new Bowman('Nick')).toEqual({
    name: 'Nick',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});

test('should Swordsman', () => {
  expect(new Swordsman('Nick')).toEqual({
    name: 'Nick',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});

test('should Magician', () => {
  expect(new Magician('Nick')).toEqual({
    name: 'Nick',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});

test('should Daemon', () => {
  expect(new Daemon('Nick')).toEqual({
    name: 'Nick',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});

test('should Undead', () => {
  expect(new Undead('Nick')).toEqual({
    name: 'Nick',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});

test('should Zombie', () => {
  expect(new Zombie('Nick')).toEqual({
    name: 'Nick',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});