import Phaser from 'phaser';

import { scenes } from './util';

export default class MoveScene extends Phaser.Scene {
  constructor() {
    super('move');
  }

  preload() {
    // Loading screen
    const loadingScreen = this.add.image(400, 300, 'loadingScreen');
    const loadingText = this.add.text(400, 225, 'Loading...', {
      font: '80px Mukta',
      color: '#754F37'
    })
    .setOrigin(0.5);
    const loadingGif = this.add.sprite(400, 365, 'loadingGif', 'loadingGif.png');
    this.anims.create({ key: 'loading', frames: this.anims.generateFrameNames('loadingGif', {
      start: 0, end: 8,
      prefix: 'frame_', suffix: '_delay-0.01s.png'
    }), frameRate: 12, repeat: -1 });
    loadingGif.anims.play('loading');
    this.load.on('complete', () => {
      loadingScreen.destroy();
      loadingText.destroy();
      loadingGif.destroy();
    });

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
    this.load.image('lock', '../assets/images/MoveScene/lock.png');
  }

  create() {
    this.background = this.add.image(399, 299, 'moveBackground');

    const isDesktop = true; // TODO: Change mobile scaling for portrait mode

    const back = this.add.image(45, 550, 'back');
    const back1 = this.add.image(45, 550, 'back1');
    const home = this.add.image((isDesktop? 214 : window.innerWidth/3), 174, 'home');
    const home1 = this.add.image((isDesktop? 214 : window.innerWidth/3), 174, 'home1');
    const family = this.add.image((isDesktop? 395 : 2*window.innerWidth/3), 174, 'family');
    const family1 = this.add.image((isDesktop? 395 : 2*window.innerWidth/3), 174, 'family1');
    const greetings = this.add.image((isDesktop? 585 : window.innerWidth/3), (isDesktop? 174 : 250), 'greetings');
    const greetings1 = this.add.image((isDesktop? 585 : window.innerWidth/3), (isDesktop? 174 : 250), 'greetings1');
    const town = this.add.image((isDesktop? 270 : 2*window.innerWidth/3), 250, 'town');
    const town1 = this.add.image((isDesktop? 270 : 2*window.innerWidth/3), 250, 'town1');
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

      if (scene === 'menu' || scenes.indexOf(scene) <= 1 || localStorage.getItem(scenes[scenes.indexOf(scene)-1]) >= 7 || localStorage.getItem('all') == 10) {
        buttons.on('button.click', () => {
          if (scene !== 'menu') {
            this.scene.start('vocab', { scene: scene });
          } else {
            this.scene.start('menu');
          }
        });
  
        buttons.on('button.over', () => {
          buttons.hideButton(0);
          buttons.showButton(1);
        });
  
        buttons.on('button.out', () => {
          buttons.hideButton(1);
          buttons.showButton(0);
        });
      } else {
        const button = buttons.getElement('buttons[0]')
        button.setTint('0x808080');
        this.add.image(button.x, button.y, 'lock');

        buttons.on('button.over', () => {
          const lastScene = scenes[scenes.indexOf(scene)-1]
          levelReminder.x = button.x;
          levelReminder.y = button.y + 50;
          levelReminder.setText('Get 7/10 on the ' + '[b]' + lastScene[0].toUpperCase() + lastScene.slice(1) + '[/b] quiz to unlock!');
          for (var i = 0; i < 100; i += 10) {
            setTimeout(() => {
              levelReminder.alpha += 0.1;
            }, i); 
          }
        });

        buttons.on('button.out', () => {
          for (var i = 0; i < 100; i += 10) {
            setTimeout(() => {
              levelReminder.alpha -= 0.1;
            }, i); 
          }
        });
      }
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

    const levelReminder = this.add.rexBBCodeText(400, 300, '', {
      fontSize: '20px',
      fontFamily: 'Mukta',
      color: '#754F37',
      backgroundColor: '#FFFFFF',
      backgroundCornerRadius: 6,
      padding: {
        left: 6,
        right: 6,
        top: 6,
        buttom: 6
      }
    }).setAlpha(0).setOrigin(0.5);
  }
}
