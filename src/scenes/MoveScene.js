import Phaser from 'phaser';

export default class MoveScene extends Phaser.Scene {
  constructor() {
    super('move');
  }

  preload() {
    this.load.image('moveBackground', '../assets/images/moveBackground2.png');
    this.load.image('back', '../assets/images/back.png');
    this.load.image('back1', '../assets/images/back2.png');
    this.load.image('town', '../assets/images/town2.png');
    this.load.image('town1', '../assets/images/town1.png');

    this.load.image('home', '../assets/images/home2.png');
    this.load.image('home1', '../assets/images/home1.png');
    this.load.image('family', '../assets/images/family.png');
    this.load.image('family1', '../assets/images/family1.png');
    this.load.image('greetings', '../assets/images/greetings.png');
    this.load.image('greetings1', '../assets/images/greetings1.png');
    this.load.image('restaurant', '../assets/images/restaurant2.png');
    this.load.image('restaurant1', '../assets/images/restaurant1.png');
  }

  create() {
    this.background = this.add.image(400, 300, 'moveBackground');
    const back = this.add.image(63, 56, 'back');
    const back1 = this.add.image(63, 56, 'back1');
    const town = this.add.image(122, 296, 'town');
    const town1 = this.add.image(122, 296, 'town1');
    const home = this.add.image(378, 436, 'home');
    const home1 = this.add.image(378, 436, 'home1');
    const restaurant = this.add.image(378, 193, 'restaurant');
    const restaurant1 = this.add.image(378, 193, 'restaurant1');
    const family = this.add.image(625, 196, 'family');
    const family1 = this.add.image(625, 196, 'family1');
    const greetings = this.add.image(625, 436, 'greetings');
    const greetings1 = this.add.image(625, 436, 'greetings1');

    var backButtons = this.rexUI.add.buttons({
      orientation: 0,
      // Elements
      buttons: [back, back1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var townButtons = this.rexUI.add.buttons({
      orientation: 0,
      // Elements
      buttons: [town, town1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var homeButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [home, home1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var restaurantButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [restaurant, restaurant1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var familyButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [family, family1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var greetingsButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [greetings, greetings1],
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

    backButtons.hideButton(1);
    townButtons.hideButton(1);
    homeButtons.hideButton(1);
    familyButtons.hideButton(1);
    greetingsButtons.hideButton(1);
    restaurantButtons.hideButton(1);

    buttonsEffect(backButtons, 'menu');
    buttonsEffect(townButtons, 'home');
    buttonsEffect(homeButtons, 'home');
    buttonsEffect(familyButtons, 'home');
    buttonsEffect(greetingsButtons, 'home');
    buttonsEffect(restaurantButtons, 'home');
  }
}
