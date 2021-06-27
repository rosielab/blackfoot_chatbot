import Phaser from 'phaser';

export default class PreLearnScene extends Phaser.Scene {
  constructor() {
    super('prelearn');
  }

  preload() {
    // temporary background
    this.load.image('prelearnBackground', '../assets/images/PreTestScene/Quiz-Main.png');
  }

  create() {
    this.add.image(400, 300, 'prelearnBackground');

    this.add
      .text(250, 368, 'Vocabulary', {
        font: '55px Mukta',
        color: '#000000'
      })
      .setInteractive()
      .on('pointerup', () => {
        this.scene.start('move');
      })
      .setOrigin(0.5);
    
    this.add
    .text(550, 368, 'Grammar', {
      font: '55px Mukta',
      color: '#000000'
    })
    .setInteractive()
    .on('pointerup', () => {
      this.scene.start('grammar');
    })
    .setOrigin(0.5);
  }
}
