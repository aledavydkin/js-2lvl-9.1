export default class СreateСharacter {
  constructor(name) {
    this.name = name;
    this.atack = 100;
    this.stoned = false;
  }

  get stonedMode() {
    return this.stoned;
  }

  set stonedMode(value) {
    this.stoned = value;
    return this.stoned;
  }

  get attack() {
    return this.atack;
  }

  set attack(cords) {
    if (cords > 10) {
      throw new Error('Так далеко нельзя стрелять');
    }

    this.atack -= this.atack * (0.1 * (cords - 1));

    if (this.stonedMode && cords < 10) {
      this.atack -= Math.log2(cords) * 5;
    }
  }
}
