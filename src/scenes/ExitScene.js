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
    this.background = this.add.image(400, 299, 'exitBackground');

    const feedbackPrompt = this.add
      .text(230, 500, 'Got feedback?', {
        font: '36px Mukta',
        color: '#593B2B',
      })
      .setOrigin(0.5);

    const feedbackLink = this.add
      .text(420, 500, 'Click here!', {
        font: '36px Mukta',
        color: '#3366BB',
      })
      .setInteractive({ useHandCursor: true })
      .setOrigin(0.5)
      .on('pointerup', () => {
        window.open('https://www.surveymonkey.ca/r/N6XBHLY');
      })
      .on('pointerover', () => {
        linkUnderline.setVisible(true);
      })
      .on('pointerout', () => {
        linkUnderline.setVisible(false);
      });

    const linkUnderline = this.add
      .line(420, 514, 0, 0, 154, 0, '0x3366BB');

    linkUnderline.setVisible(false);
  }
}
