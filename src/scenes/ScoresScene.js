import Phaser from 'phaser';

import { scores } from './TestScene.js';

export default class ScoresScene extends Phaser.Scene {
  constructor() {
    super('scores');
  }

  preload() {
    this.load.image('back', '../assets/images/back.png');
    this.load.image('back1', '../assets/images/back2.png');
  }

  create() {
    const back = this.add.image(63, 56, 'back');
    const back1 = this.add.image(63, 56, 'back1');

    this.cameras.main.setBackgroundColor('#97cdf7');

    var title = this.add
      .text(400, 150, 'High Scores', {
        font: 'bold 55px Roboto',
      })
      .setOrigin(0.5);

    var townScore = this.add
      .text(400, 250, 'Town: ' + scores.town + '/10', {
        font: '35px Trebuchet MS',
      })
      .setOrigin(0.5);

    var restaurantScore = this.add
      .text(400, 290, 'Restaurant: ' + scores.restaurant + '/10', {
        font: '35px Trebuchet MS',
      })
      .setOrigin(0.5);

    var homeScore = this.add
      .text(400, 330, 'Home: ' + scores.home + '/10', {
        font: '35px Trebuchet MS',
      })
      .setOrigin(0.5);

    var familyScore = this.add
      .text(400, 370, 'Family: ' + scores.family + '/10', {
        font: '35px Trebuchet MS',
      })
      .setOrigin(0.5);

    var greetingsScore = this.add
      .text(400, 410, 'Greetings: ' + scores.greetings + '/10', {
        font: '35px Trebuchet MS',
      })
      .setOrigin(0.5);

    var allScore = this.add
      .text(400, 450, 'All: ' + scores.all + '/10', {
        font: '35px Trebuchet MS',
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
