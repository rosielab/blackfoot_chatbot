import Phaser from 'phaser';

var dictionary = require('../assets/all_words_translation.json');
var current_test = 'all';

// used for TestScene.js
export { dictionary };
export { current_test };

export default class PreTestScene extends Phaser.Scene {
  constructor() {
    super('pretest2');
  }

  preload() {
    this.load.image('back', '../assets/images/back.png');
    this.load.image('back1', '../assets/images/back2.png');
    this.load.image('town', '../assets/images/town.png');
    this.load.image('restaurant', '../assets/images/restaurant.png');
    this.load.image('home', '../assets/images/home.png');
    this.load.image('family', '../assets/images/family.png');
    this.load.image('greetings', '../assets/images/greetings.png');
  }

  create() {
    const back = this.add.image(63, 56, 'back');
    const back1 = this.add.image(63, 56, 'back1');
    // const next = this.add.image(750, 300, 'back'); // placeholder
    // const next1 = this.add.image(750, 300, 'back1');
    const prev = this.add.image(50, 300, 'back');
    const prev1 = this.add.image(50, 300, 'back1');

    this.cameras.main.setBackgroundColor('#85a5ff');

    function changeDict(dict, scene) {
      dict = new Object();

      const translation_file = require('../assets/all_words_translation.json');
      Object.keys(translation_file).forEach((word) => {
        if (translation_file[word][1] == scene) {
          dict[word] = translation_file[word];
        }
      })

      return dict;
    }

    const title = this.add
      .text(400, 100, 'What would you like to test?', {
        font: 'bold 40px Helvetica'
      })
      .setOrigin(0.5);

    // const town_test = this.add.image(200, 260, 'town')
    //   .setInteractive()
    //   .on('pointerdown', () => {
    //     dictionary = changeDict(dictionary, 'town');
    //     current_test = 'town';
    //     this.scene.start('test');
    //   })

    // const restaurant_test = this.add.image(400, 260, 'restaurant')
    //   .setInteractive()
    //   .on('pointerdown', () => {
    //     dictionary = changeDict(dictionary, 'restaurant');
    //     current_test = 'restaurant';
    //     this.scene.start('test');
    //   })
    
    // const home_test = this.add.image(600, 260, 'home')
    //   .setInteractive()
    //   .on('pointerdown', () => {
    //     dictionary = changeDict(dictionary, 'home');
    //     current_test = 'home';
    //     this.scene.start('test');
    //   })

    // const family_test = this.add.image(200, 480, 'family')
    //   .setInteractive()
    //   .on('pointerdown', () => {
    //     dictionary = changeDict(dictionary, 'family');
    //     current_test = 'family';
    //     this.scene.start('test');
    //   })

    // const greetings_test = this.add.image(400, 480, 'greetings')
    //   .setInteractive()
    //   .on('pointerdown', () => {
    //     dictionary = changeDict(dictionary, 'greetings');
    //     current_test = 'greetings';
    //     this.scene.start('test');
    //   })

    this.add
      .text(400, 300, '(To be added)', {
        font: 'bold 40px Helvetica',
        fill: '#000000'
      })
      .setOrigin(0.5);

    // const all_test = this.add
    //   .text(600, 480, 'All', {
    //     font: 'bold 40px Helvetica',
    //     fill: '#000000'
    //   })
    //   .setOrigin(0.5)
    //   .setInteractive()
    //   .on('pointerdown', () => {
    //     dictionary = require('../assets/all_words_translation.json');
    //     current_test = 'all';
    //     this.scene.start('test');
    //   });

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

    // var nextButtons = this.rexUI.add.buttons({
    //   orientation: 0,
    //   buttons: [next, next1],
    //   expand: false,
    //   align: undefined,
    //   click: {
    //     mode: 'pointerup',
    //     clickInterval: 100,
    //   },
    // });

    var prevButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [prev, prev1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    backButtons.hideButton(1);
    // nextButtons.hideButton(1);
    prevButtons.hideButton(1);

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

    // nextButtons
    // .on('button.click', () => {
    //   this.scene.start('pretest2');
    // })
    // .on('button.over', () => {
    //   nextButtons.hideButton(0);
    //   nextButtons.showButton(1);
    // })
    // .on('button.out', () => {
    //   nextButtons.hideButton(1);
    //   nextButtons.showButton(0);
    // });

    prevButtons
    .on('button.click', () => {
      this.scene.start('pretest');
    })
    .on('button.over', () => {
      prevButtons.hideButton(0);
      prevButtons.showButton(1);
    })
    .on('button.out', () => {
      prevButtons.hideButton(1);
      prevButtons.showButton(0);
    });
  }

  update() {}
}