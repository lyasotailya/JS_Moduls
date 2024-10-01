export class Character {
  constructor(name, type, attack, defence) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

    if ( name && 2 <= name.length <= 10 ) { 
      this.name = name 
    } else { 
      throw new Error('Name is uncorrect') 
    };
        
    if ( types.includes(type) ) { 
      this.type = type 
    } else { 
      throw new Error('Type is uncorrect') 
    };

    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 25, 25)
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 40, 10)
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 10, 40)
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 10, 40)
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 25, 25)
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 40, 10)
  }
}
