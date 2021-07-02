import Phaser from 'phaser';

import { scene_dict, full_dict, current_test } from './util.js';

export default class PreTestScene extends Phaser.Scene {
  constructor() {
    super('pretest');
  }

  preload() {
    this.load.image(
      'pretestBackground',
      '../assets/images/PreTestScene/Quiz-Main.png'
    );

    this.load.image('back', '../assets/images/PreTestScene/back-b.png');
    this.load.image(
      'back1',
      '../assets/images/PreTestScene/back-b-rollover.png'
    );
    this.load.image('town_t', '../assets/images/PreTestScene/town-b.png');
    this.load.image(
      'town1_t',
      '../assets/images/PreTestScene/town-b-rollover.png'
    );
    this.load.image(
      'restaurant_t',
      '../assets/images/PreTestScene/restaurant-b.png'
    );
    this.load.image(
      'restaurant1_t',
      '../assets/images/PreTestScene/restaurant-b-rollover.png'
    );
    this.load.image('home_t', '../assets/images/PreTestScene/home-b.png');
    this.load.image(
      'home1_t',
      '../assets/images/PreTestScene/home-b-rollover.png'
    );
    this.load.image('family_t', '../assets/images/PreTestScene/family-b.png');
    this.load.image(
      'family1_t',
      '../assets/images/PreTestScene/family-b-rollover.png'
    );
    this.load.image(
      'greetings_t',
      '../assets/images/PreTestScene/greetings-b.png'
    );
    this.load.image(
      'greetings1_t',
      '../assets/images/PreTestScene/greetings-b-rollover.png'
    );
    this.load.image('all_t', '../assets/images/PreTestScene/all-b.png');
    this.load.image(
      'all1_t',
      '../assets/images/PreTestScene/all-b-rollover.png'
    );
  }

  create() {
    const pretestBackground = this.add.image(400, 300, 'pretestBackground');

    const back = this.add.image(39, 548, 'back');
    const back1 = this.add.image(39, 548, 'back1');
    const town_t = this.add.image(173, 418, 'town_t');
    const town1_t = this.add.image(173, 418, 'town1_t');
    const restaurant_t = this.add.image(400, 418, 'restaurant_t');
    const restaurant1_t = this.add.image(400, 418, 'restaurant1_t');
    const home_t = this.add.image(173, 322, 'home_t');
    const home1_t = this.add.image(173, 322, 'home1_t');
    const family_t = this.add.image(400, 322, 'family_t');
    const family1_t = this.add.image(400, 322, 'family1_t');
    const greetings_t = this.add.image(627, 322, 'greetings_t');
    const greetings1_t = this.add.image(627, 322, 'greetings1_t');
    const all_t = this.add.image(627, 418, 'all_t');
    const all1_t = this.add.image(627, 418, 'all1_t');

    // Set dict to contain only words from the specified scene
    function changeDict(dict, full_dict, scene) {
      for (var key of Object.keys(dict)) {
        delete dict[key];
      }

      Object.keys(full_dict).forEach((word) => {
        if (full_dict[word][1] === scene || scene === 'all') {
          dict[word] = full_dict[word];
        }
      });
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

    const initTestButtons = (buttons, scene) => {
      buttons.hideButton(1);

      buttons.on('button.click', () => {
        changeDict(scene_dict, full_dict, scene);
        current_test.scene = scene;
        if (scene === 'all') {
          // Remove synthesis words from testing
          for (var word of Object.keys(scene_dict)) {
            if (full_dict[word][1] === 'time' || full_dict[word][1] === 'verb') {
              delete scene_dict[word];
            }
          }
        }
        this.scene.start('test');
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

    const backButtons = addButtons(back, back1);
    const townButtons = addButtons(town_t, town1_t);
    const restaurantButtons = addButtons(restaurant_t, restaurant1_t);
    const homeButtons = addButtons(home_t, home1_t);
    const familyButtons = addButtons(family_t, family1_t);
    const greetingsButtons = addButtons(greetings_t, greetings1_t);
    const allButtons = addButtons(all_t, all1_t);

    initSceneButtons(backButtons, 'menu');
    initTestButtons(townButtons, 'town');
    initTestButtons(restaurantButtons, 'restaurant');
    initTestButtons(homeButtons, 'home');
    initTestButtons(familyButtons, 'family');
    initTestButtons(greetingsButtons, 'greetings');
    initTestButtons(allButtons, 'all');
  }

  update() {}
}
