import Phaser from 'phaser';

import { scores } from './TestScene.js';

export default class ScoresScene extends Phaser.Scene {
  constructor() {
    super('scores');
  }

  preload() {
    this.load.image('back', '../assets/images/back.png');
    this.load.image('back1', '../assets/images/back2.png');
    this.load.image('scores_background', '../assets/images/scores_background.png');
  }

  create() {
    const back = this.add.image(63, 56, 'back');
    const back1 = this.add.image(63, 56, 'back1');
    this.add.image(400, 350, 'scores_background');

    this.cameras.main.setBackgroundColor('#97cdf7');

    var title = this.add
      .text(400, 130, 'High Scores', {
        font: 'bold 55px Cambria',
        color: '#000000',
      })
      .setOrigin(0.5);

    var top_scores_text = this.add
      .text(400, 350, 'Town: ' + scores.town + '/10\n'
                    + 'Restaurant: ' + scores.restaurant + '/10\n'
                    + 'Home: ' + scores.home + '/10\n'
                    + 'Family: ' + scores.family + '/10\n'
                    + 'Greetings: ' + scores.greetings + '/10\n'
                    + 'All: ' + scores.all + '/10', {
        font: '36px Trebuchet MS',
        color: '#000000',
        align: 'right',
      })
      .setOrigin(0.5);

    var backButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [back, back1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    backButtons.hideButton(1);

    backButtons
      .on('button.click', () => {
        this.scene.start('menu');
      })
      .on('button.over', () => {
        backButtons.hideButton(0);
        backButtons.showButton(1);
      })
      .on('button.out', () => {
        backButtons.hideButton(1);
        backButtons.showButton(0);
      });
  }

  update() {}
}
