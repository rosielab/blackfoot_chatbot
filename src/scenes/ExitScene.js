import Phaser from 'phaser';

export default class ExitScene extends Phaser.Scene {
  constructor() {
    super('exit');
  }
  preload() {}

  create() {
    this.cameras.main.setBackgroundColor('#d9c793');
    this.add
      .text(400, 300, 'Thanks for playing! :)', {
        font: '50px Trebuchet MS',
        color: '#000000'
      })
      .setOrigin(0.5);
  }
}
