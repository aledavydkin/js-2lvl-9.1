import СreateСharacter from './сreateСharacter';

export default class Daemon extends СreateСharacter {
  constructor(name, atack, stoned) {
    super(name, atack, stoned);
    this.type = 'Daemon';
  }
}
