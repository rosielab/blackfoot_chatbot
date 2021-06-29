import Phaser from 'phaser';

export default class MoveScene extends Phaser.Scene {
  constructor() {
    super('move');
  }

  preload() {
    this.load.image('moveBackground', '../assets/images/LearnScene/Learn.png');
    this.load.image(
      'back',
      '../assets/images/LearnScene/learn-main-page-buttons/regular-state/back-b.png'
    );
    this.load.image(
      'back1',
      '../assets/images/LearnScene/learn-main-page-buttons/rollover-state/back-b-rollover.png'
    );
    this.load.image('town', '../assets/images/PreTestScene/town-b.png');
    this.load.image(
      'town1',
      '../assets/images/PreTestScene/town-b-rollover.png'
    );

    this.load.image(
      'home',
      '../assets/images/LearnScene/learn-main-page-buttons/regular-state/home-b.png'
    );
    this.load.image(
      'home1',
      '../assets/images/LearnScene/learn-main-page-buttons/rollover-state/home-b-rollover.png'
    );
    this.load.image(
      'family',
      '../assets/images/LearnScene/learn-main-page-buttons/regular-state/family-b.png'
    );
    this.load.image(
      'family1',
      '../assets/images/LearnScene/learn-main-page-buttons/rollover-state/family-b-rollover.png'
    );
    this.load.image(
      'greetings',
      '../assets/images/LearnScene/learn-main-page-buttons/regular-state/greetings-b.png'
    );
    this.load.image(
      'greetings1',
      '../assets/images/LearnScene/learn-main-page-buttons/rollover-state/greetings-b-rollover.png'
    );
    this.load.image(
      'restaurant',
      '../assets/images/PreTestScene/restaurant-b.png'
    );
    this.load.image(
      'restaurant1',
      '../assets/images/PreTestScene/restaurant-b-rollover.png'
    );
  }

  create() {
    this.background = this.add.image(399, 299, 'moveBackground');
    const back = this.add.image(45, 550, 'back');
    const back1 = this.add.image(45, 550, 'back1');
    const town = this.add.image(270, 250, 'town');
    const town1 = this.add.image(270, 250, 'town1');
    const home = this.add.image(214, 174, 'home');
    const home1 = this.add.image(214, 174, 'home1');
    const restaurant = this.add.image(470, 250, 'restaurant');
    const restaurant1 = this.add.image(470, 250, 'restaurant1');
    const family = this.add.image(395, 174, 'family');
    const family1 = this.add.image(395, 174, 'family1');
    const greetings = this.add.image(585, 174, 'greetings');
    const greetings1 = this.add.image(585, 174, 'greetings1');

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
    buttonsEffect(townButtons, 'town');
    buttonsEffect(homeButtons, 'home');
    buttonsEffect(familyButtons, 'family');
    buttonsEffect(greetingsButtons, 'greetings');
    buttonsEffect(restaurantButtons, 'restaurant');
  }
}
