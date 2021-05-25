import Phaser from 'phaser';

import { scene_dict, full_dict, current_test } from './util.js';

export default class PreTestScene extends Phaser.Scene {
  constructor() {
    super('pretest');
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
    const next = this.add.image(750, 300, 'back'); // placeholder (needs icon change)
    const next1 = this.add.image(750, 300, 'back1');

    this.cameras.main.setBackgroundColor('#97cdf7');

    // Set dict to contain only words from the specified scene
    function changeDict(dict, full_dict, scene) {
      for (var key of Object.keys(dict)) {
        delete dict[key];
      }

      Object.keys(full_dict).forEach((word) => {
        if (full_dict[word][1] == scene) {
          dict[word] = full_dict[word];
        }
      })
    }

    // Fill dict with all words from full_dict
    function fillDict(dict, full_dict) {
      for (var key of Object.keys(dict)) {
        delete dict[key];
      }

      Object.keys(full_dict).forEach((word) => {
        dict[word] = full_dict[word];
      })
    }

    // Init scene_dict with all words
    // Can be done here as test scene comes after pretest
    fillDict(scene_dict, full_dict);

    const title = this.add
      .text(400, 100, 'What would you like to test?', {
        font: 'bold 40px Helvetica'
      })
      .setOrigin(0.5);

    const town_test = this.add.image(200, 260, 'town')
      .setInteractive()
      .on('pointerdown', () => {
        changeDict(scene_dict, full_dict, 'town');
        current_test.scene = 'town';
        this.scene.start('test');
      })

    const restaurant_test = this.add.image(400, 260, 'restaurant')
      .setInteractive()
      .on('pointerdown', () => {
        changeDict(scene_dict, full_dict, 'restaurant');
        current_test.scene = 'restaurant';
        this.scene.start('test');
      })
    
    const home_test = this.add.image(600, 260, 'home')
      .setInteractive()
      .on('pointerdown', () => {
        changeDict(scene_dict, full_dict, 'home');
        current_test.scene = 'home';
        this.scene.start('test');
      })

    const family_test = this.add.image(200, 480, 'family')
      .setInteractive()
      .on('pointerdown', () => {
        changeDict(scene_dict, full_dict, 'family');
        current_test.scene = 'family';
        this.scene.start('test');
      })

    const greetings_test = this.add.image(400, 480, 'greetings')
      .setInteractive()
      .on('pointerdown', () => {
        changeDict(scene_dict, full_dict, 'greetings');
        current_test.scene = 'greetings';
        this.scene.start('test');
      })

    const all_test = this.add
      .text(600, 480, 'All', {
        font: 'bold 40px Helvetica',
        fill: '#000000'
      })
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerdown', () => {
        fillDict(scene_dict, full_dict);
        current_test.scene = 'all';
        this.scene.start('test');
      });

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

    var nextButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [next, next1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    backButtons.hideButton(1);
    nextButtons.hideButton(1);
    nextButtons.hideButton(0); // remove when adding new words/scenes

    let buttonsEffect = (buttons, scene) => {
      buttons.on('button.click', () => {
        this.scene.start(scene);
      });

      buttons.on('button.over', () => {
        buttons.hideButton(0);
        buttons.showButton(1);
      });

      buttons.on('button.out', () => {
        buttons.hideButton(1);
        buttons.showButton(0);
      });
    };

    buttonsEffect(backButtons, 'menu');
    buttonsEffect(nextButtons, 'pretest2');
  }

  update() {}
}