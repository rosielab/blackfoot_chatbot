import Phaser from 'phaser';

import { scene_dict, full_dict, current_test } from './util.js';

export default class PreTestScene extends Phaser.Scene {
  constructor() {
    super('pretest');
  }

  preload() {
    this.load.image('pretestBackground', '../assets/images/PreTestScene/quiz-main.png');

    this.load.image('back', '../assets/images/PreTestScene/back-b.png');
    this.load.image('back1', '../assets/images/PreTestScene/back-b-rollover.png');
    this.load.image('town_t', '../assets/images/PreTestScene/town-b.png');
    this.load.image('town1_t', '../assets/images/PreTestScene/town-b-rollover.png');
    this.load.image('restaurant_t', '../assets/images/PreTestScene/restaurant-b.png');
    this.load.image('restaurant1_t', '../assets/images/PreTestScene/restaurant-b-rollover.png');
    this.load.image('home_t', '../assets/images/PreTestScene/home-b.png');
    this.load.image('home1_t', '../assets/images/PreTestScene/home-b-rollover.png');
    this.load.image('family_t', '../assets/images/PreTestScene/family-b.png');
    this.load.image('family1_t', '../assets/images/PreTestScene/family-b-rollover.png');
    this.load.image('greetings_t', '../assets/images/PreTestScene/greetings-b.png');
    this.load.image('greetings1_t', '../assets/images/PreTestScene/greetings-b-rollover.png');
    this.load.image('all_t', '../assets/images/PreTestScene/all-b.png');
    this.load.image('all1_t', '../assets/images/PreTestScene/all-b-rollover.png');
  }

  create() {
    const pretestBackground = this.add.image(400, 300, 'pretestBackground');

    const back = this.add.image(39, 548, 'back');
    const back1 = this.add.image(39, 548, 'back1');
    const town_t = this.add.image(173, 322, 'town_t');
    const town1_t = this.add.image(173, 322, 'town1_t');
    const restaurant_t = this.add.image(400, 322, 'restaurant_t');
    const restaurant1_t = this.add.image(400, 322, 'restaurant1_t');
    const home_t = this.add.image(627, 322, 'home_t');
    const home1_t = this.add.image(627, 322, 'home1_t');
    const family_t = this.add.image(173, 418, 'family_t');
    const family1_t = this.add.image(173, 418, 'family1_t');
    const greetings_t = this.add.image(400, 418, 'greetings_t');
    const greetings1_t = this.add.image(400, 418, 'greetings1_t');
    const all_t = this.add.image(627, 418, 'all_t');
    const all1_t = this.add.image(627, 418, 'all1_t');

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

    const addButtons = (button1, button2) => {
      const newButtons = this.rexUI.add.buttons({
        orientation: 0,
        buttons: [button1, button2],
        expand: false,
        align: undefined,
        click: {
          mode: 'pointerup',
          clickInterval: 100,
        },
      });
      return newButtons;
    }

    const initButtons = (buttons, click_function) => {
      buttons
        .on('button.click', click_function)
        .on('button.over', () => {
          buttons.hideButton(0);
          buttons.showButton(1);
        })
        .on('button.out', () => {
          buttons.hideButton(1);
          buttons.showButton(0);
        });
        buttons.hideButton(1);
    }

    var backButtons = addButtons(back, back1);
    var townButtons = addButtons(town_t, town1_t);
    var restaurantButtons = addButtons(restaurant_t, restaurant1_t);
    var homeButtons = addButtons(home_t, home1_t);
    var familyButtons = addButtons(family_t, family1_t);
    var greetingsButtons = addButtons(greetings_t, greetings1_t);
    var allButtons = addButtons(all_t, all1_t);

    initButtons(backButtons, () => {
      this.scene.start('menu');
    });
    initButtons(townButtons, () => {
      changeDict(scene_dict, full_dict, 'town');
      current_test.scene = 'town';
      this.scene.start('test');
    });
    initButtons(restaurantButtons, () => {
      changeDict(scene_dict, full_dict, 'restaurant');
      current_test.scene = 'restaurant';
      this.scene.start('test');
    });
    initButtons(homeButtons, () => {
      changeDict(scene_dict, full_dict, 'home');
      current_test.scene = 'home';
      this.scene.start('test');
    });
    initButtons(familyButtons, () => {
      changeDict(scene_dict, full_dict, 'family');
      current_test.scene = 'family';
      this.scene.start('test');
    });
    initButtons(greetingsButtons, () => {
      changeDict(scene_dict, full_dict, 'greetings');
      current_test.scene = 'greetings';
      this.scene.start('test');
    });
    initButtons(allButtons, () => {
      fillDict(scene_dict, full_dict);
      current_test.scene = 'all';
      this.scene.start('test');
    });
  }

  update() {}
}