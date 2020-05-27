import СreateСharacter from './сreateСharacter';

export default class Magician extends СreateСharacter {
  constructor(name, atack, stoned) {
    super(name, atack, stoned);
    this.type = 'Magician';
  }
}
