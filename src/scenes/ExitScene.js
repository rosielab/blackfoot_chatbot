import Phaser from 'phaser';

export default class ExitScene extends Phaser.Scene {
  constructor() {
    super('exit');
  }
  preload() {
    this.load.image(
      'exitBackground',
      '../assets/images/exit.png'
    );
  }

  create() {
    this.background = this.add.image(400, 300, 'exitBackground');
  }
}
