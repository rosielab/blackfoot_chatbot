import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('menu');
  }

  preload() {
    // Change scaling after rotating
    this.scale.on('orientationchange', () => {
      this.scene.restart();
    });

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

    const isDesktop = (window.innerWidth >= 800);

    const learn = this.add.image((isDesktop? 370 : Math.min(window.innerWidth/2, 370)), (isDesktop? 285 : 270), 'learn');
    const learn1 = this.add.image((isDesktop? 370 : Math.min(window.innerWidth/2, 370)), (isDesktop? 285 : 270), 'learn1');
    const test = this.add.image((isDesktop? 370 : Math.min(window.innerWidth/2, 370)), (isDesktop? 351 : 336), 'test');
    const test1 = this.add.image((isDesktop? 370 : Math.min(window.innerWidth/2, 370)), (isDesktop? 351 : 336), 'test1');
    const sentence = this.add.image((isDesktop? 370 : Math.min(window.innerWidth/2, 370)), (isDesktop? 416 : 401), 'sentence');
    const sentence1 = this.add.image((isDesktop? 370 : Math.min(window.innerWidth/2, 370)), (isDesktop? 416 : 401), 'sentence1');
    const score = this.add.image((isDesktop? 370 : Math.min(window.innerWidth/2, 370)), (isDesktop? 482 : 467), 'score');
    const score1 = this.add.image((isDesktop? 370 : Math.min(window.innerWidth/2, 370)), (isDesktop? 482 : 467), 'score1');
    const exit = this.add.image((isDesktop? 108 : Math.min(window.innerWidth/2, 370)), 552, 'exit');
    const exit1 = this.add.image((isDesktop? 108 : Math.min(window.innerWidth/2, 370)), 552, 'exit1');

    if (window.innerWidth < 800 && this.scale.orientation === Phaser.Scale.PORTRAIT) {
      const mobileNote = this.add.text(window.innerWidth/2, 300, 'NOTE: Landscape mode\nis recommended.', {
        font: 'bold 35px Mukta',
        color: '#754F37',
        align: 'center'
      })
      .setOrigin(0.5);
      for (var i = 4000; i < 5000; i += 100) {
        setTimeout(() => {
          mobileNote.alpha -= 0.1;
        }, i);
      }
    }

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
