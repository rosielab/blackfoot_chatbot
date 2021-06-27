import Phaser from 'phaser';

export default class GrammarScene extends Phaser.Scene {
  constructor() {
    super('grammar');
  }

  preload() {
    // temporary background
    this.load.image('grammarBackground', '../assets/images/moveBackground.png');
  }

  create() {
    this.add.image(400, 300, 'grammarBackground');
  }
}
