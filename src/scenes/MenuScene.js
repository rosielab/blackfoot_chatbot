import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('menu');
  }

  preload() {
    this.load.image('menuBackground', '../assets/images/menu.png');

    this.load.image('learn', '../assets/images/learn.png');
    this.load.image('learn1', '../assets/images/learn1.png');

    this.load.image('test', '../assets/images/test.png');
    this.load.image('test1', '../assets/images/test1.png');
    this.load.image('sentence', '../assets/images/sentence.png');
    this.load.image('sentence1', '../assets/images/sentence1.png');
    this.load.image('score', '../assets/images/score.png');
    this.load.image('score1', '../assets/images/score_1.png');
    this.load.image('exit', '../assets/images/exit.png');
    this.load.image('exit1', '../assets/images/exit1.png');
  }

  create() {
    this.background = this.add.image(400, 300, 'menuBackground');
    const learn = this.add.image(400, 210, 'learn');
    const learn1 = this.add.image(400, 210, 'learn1');
    const test = this.add.image(400, 255, 'test');
    const test1 = this.add.image(400, 255, 'test1');
    const sentence = this.add.image(400, 300, 'sentence');
    const sentence1 = this.add.image(400, 300, 'sentence1');
    const score = this.add.image(400, 345, 'score');
    const score1 = this.add.image(400, 345, 'score1');
    const exit = this.add.image(400, 390, 'exit');
    const exit1 = this.add.image(400, 390, 'exit1');

    var learnButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [learn, learn1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var testButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [test, test1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var sentenceButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [sentence, sentence1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var scoreButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [score, score1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var exitButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [exit, exit1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    let buttonsEffect = (buttons, scene) => {
      buttons.on('button.click', (button, index, pointer, event) => {
        this.scene.start(scene);
      });

      buttons.on('button.over', (button, index, pointer, event) => {
        buttons.hideButton(0);
        buttons.showButton(1);
      });

      buttons.on('button.out', (button, index, pointer, event) => {
        buttons.hideButton(1);
        buttons.showButton(0);
      });
    };

    learnButtons.hideButton(1);
    testButtons.hideButton(1);
    sentenceButtons.hideButton(1);
    scoreButtons.hideButton(1);
    exitButtons.hideButton(1);

    buttonsEffect(learnButtons, 'move');
    buttonsEffect(testButtons, 'test');
    buttonsEffect(sentenceButtons, 'move');
    buttonsEffect(scoreButtons, 'move');
    buttonsEffect(exitButtons, 'move');
  }
}
