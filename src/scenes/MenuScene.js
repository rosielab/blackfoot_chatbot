import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('menu');
  }

  preload() {
    this.load.image('menuBackground', '../assets/images/MenuScene/Start.png');

    this.load.image('learn', '../assets/images/MenuScene/learn-b.png');
    this.load.image(
      'learn1',
      '../assets/images/MenuScene/learn-b-rollover.png'
    );
    this.load.image('test', '../assets/images/MenuScene/quiz-b.png');
    this.load.image('test1', '../assets/images/MenuScene/quiz-b-rollover.png');
    this.load.image('sentence', '../assets/images/MenuScene/sentence-b.png');
    this.load.image(
      'sentence1',
      '../assets/images/MenuScene/sentence-b-rollover.png'
    );
    this.load.image('score', '../assets/images/MenuScene/scores-b.png');
    this.load.image(
      'score1',
      '../assets/images/MenuScene/scores-b-rollover.png'
    );
    this.load.image('exit', '../assets/images/MenuScene/exit-b.png');
    this.load.image('exit1', '../assets/images/MenuScene/exit-b-rollover.png');
  }

  create() {
    this.background = this.add.image(400, 300, 'menuBackground');

    const learn = this.add.image((window.innerWidth >= 800? 370 : window.innerWidth/2), 285, 'learn');
    const learn1 = this.add.image((window.innerWidth >= 800? 370 : window.innerWidth/2), 285, 'learn1');
    const test = this.add.image((window.innerWidth >= 800? 370 : window.innerWidth/2), 351, 'test');
    const test1 = this.add.image((window.innerWidth >= 800? 370 : window.innerWidth/2), 351, 'test1');
    const sentence = this.add.image((window.innerWidth >= 800? 370 : window.innerWidth/2), 416, 'sentence');
    const sentence1 = this.add.image((window.innerWidth >= 800? 370 : window.innerWidth/2), 416, 'sentence1');
    const score = this.add.image((window.innerWidth >= 800? 370 : window.innerWidth/2), 482, 'score');
    const score1 = this.add.image((window.innerWidth >= 800? 370 : window.innerWidth/2), 482, 'score1');
    const exit = this.add.image((window.innerWidth >= 800? 108 : window.innerWidth/2), 552, 'exit');
    const exit1 = this.add.image((window.innerWidth >= 800? 108 : window.innerWidth/2), 552, 'exit1');

    const addButtons = (main, rollover) => {
      const newButtons = this.rexUI.add.buttons({
        orientation: 0,
        buttons: [main, rollover],
        expand: false,
        align: undefined,
        click: {
          mode: 'pointerup',
          clickInterval: 100,
        },
      });
      return newButtons;
    };

    const initSceneButtons = (buttons, scene) => {
      buttons.hideButton(1);

      buttons.on('button.click', () => {
        this.scene.start(scene);
      })

      buttons.on('button.over', () => {
        buttons.hideButton(0);
        buttons.showButton(1);
      });

      buttons.on('button.out', () => {
        buttons.hideButton(1);
        buttons.showButton(0);
      })
    };

    const learnButtons = addButtons(learn, learn1);
    const testButtons = addButtons(test, test1);
    const sentenceButtons = addButtons(sentence, sentence1);
    const scoreButtons = addButtons(score, score1);
    const exitButtons = addButtons(exit, exit1);

    initSceneButtons(learnButtons, 'move');
    initSceneButtons(testButtons, 'pretest');
    initSceneButtons(sentenceButtons, 'sentence');
    initSceneButtons(scoreButtons, 'scores');
    initSceneButtons(exitButtons, 'exit');
  }
}
