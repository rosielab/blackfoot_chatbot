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

    const isDesktop = this.sys.game.device.os.desktop;

    const back = this.add.image(45, 550, 'back');
    const back1 = this.add.image(45, 550, 'back1');
    const home = this.add.image((isDesktop? 214 : window.innerWidth/4), 174, 'home');
    const home1 = this.add.image((isDesktop? 214 : window.innerWidth/4), 174, 'home1');
    const family = this.add.image((isDesktop? 395 : 3*window.innerWidth/4), 174, 'family');
    const family1 = this.add.image((isDesktop? 395 : 3*window.innerWidth/4), 174, 'family1');
    const greetings = this.add.image((isDesktop? 585 : window.innerWidth/4), (isDesktop? 174 : 250), 'greetings');
    const greetings1 = this.add.image((isDesktop? 585 : window.innerWidth/4), (isDesktop? 174 : 250), 'greetings1');
    const town = this.add.image((isDesktop? 270 : 3*window.innerWidth/4), 250, 'town');
    const town1 = this.add.image((isDesktop? 270 : 3*window.innerWidth/4), 250, 'town1');
    const restaurant = this.add.image((isDesktop? 470 : window.innerWidth/2), (isDesktop? 250 : 326), 'restaurant');
    const restaurant1 = this.add.image((isDesktop? 470 : window.innerWidth/2), (isDesktop? 250 : 326), 'restaurant1');

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
        if (scene !== 'menu') {
          this.scene.start('vocab', { scene: scene });
        } else {
          this.scene.start('menu');
        }
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
    const townButtons = addButtons(town, town1);
    const homeButtons = addButtons(home, home1);
    const restaurantButtons = addButtons(restaurant, restaurant1);
    const familyButtons = addButtons(family, family1);
    const greetingsButtons = addButtons(greetings, greetings1);

    initSceneButtons(backButtons, 'menu');
    initSceneButtons(townButtons, 'town');
    initSceneButtons(homeButtons, 'home');
    initSceneButtons(familyButtons, 'family');
    initSceneButtons(greetingsButtons, 'greetings');
    initSceneButtons(restaurantButtons, 'restaurant');
  }
}
