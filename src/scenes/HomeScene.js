import Phaser from 'phaser';

export default class HomeScene extends Phaser.Scene {
  constructor() {
    super('home');
  }
  preload() {
    this.load.image('homeBackground', '../assets/images/LearnScene/homeBackground.png');
    this.load.image('tipi', '../assets/images/LearnScene/Learn-all-tiles/unpressed-state/png-files/tile-tipi-unpressed.png');
    this.load.image('tipi1', '../assets/images/LearnScene/Learn-all-tiles/pressed-state/png-files/tile-tipi-pressed.png');
    this.load.image('dog', '../assets/images/LearnScene/Learn-all-tiles/unpressed-state/png-files/tile-dog-unpressed.png');
    this.load.image('dog1', '../assets/images/LearnScene/Learn-all-tiles/pressed-state/png-files/tile-dog-pressed.png');
    this.load.image('bathroom', '../assets/images/LearnScene/Learn-all-tiles/unpressed-state/png-files/tile-bathroom-unpressed.png');
    this.load.image('bathroom1', '../assets/images/LearnScene/Learn-all-tiles/pressed-state/png-files/tile-bathroom-pressed.png');

    this.load.image('back', '../assets/images/LearnScene/learn-main-page-buttons/regular-state/back-b.png');
    this.load.image('back1', '../assets/images/LearnScene/learn-main-page-buttons/rollover-state/back-b-rollover.png');
    this.load.audio('bathroomwav', '../assets/sounds/bathroom.wav');
    this.load.audio('tipiwav', '../assets/sounds/tipi.wav');
    this.load.audio('dogwav', '../assets/sounds/dog.wav');
  }

  create() {
    this.sound.add('bathroomwav');
    this.background = this.add.image(400, 300, 'homeBackground');
    const back = this.add.image(53, 545, 'back');
    const back1 = this.add.image(53, 545, 'back1');
    const bathroom = this.add.image(180, 249, 'bathroom');
    const bathroom1 = this.add.image(180, 249, 'bathroom1');
    const bathroom2 = this.add.image(180, 249, 'bathroom1');
    const dog = this.add.image(400, 249, 'dog');
    const dog1 = this.add.image(400, 249, 'dog1');
    const dog2 = this.add.image(400, 249, 'dog1');
    const tipi = this.add.image(613, 249, 'tipi');
    const tipi1 = this.add.image(613, 249, 'tipi1');
    const tipi2 = this.add.image(613, 249, 'tipi1');

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

    var bathroomButtons = this.rexUI.add.buttons({
      orientation: 0,
      // Elements
      buttons: [bathroom, bathroom1, bathroom2],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var dogButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [dog, dog1, dog2],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var tipiButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [tipi, tipi1, tipi2],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });


    let buttonsEffect = (buttons, temp, sound) => {
      buttons.on('button.click', (button, index, pointer, event) => {
        this.sound.play(sound);
        if (temp) {
          buttons.hideButton(2);
          buttons.showButton(0);
          temp = false;
        } else {
          buttons.showButton(2);
          temp = true;
        }
      });

      buttons.on('button.over', (button, index, pointer, event) => {
        buttons.hideButton(0);
        buttons.showButton(1);
      });

      buttons.on('button.out', (button, index, pointer, event) => {
        if(temp){
          buttons.hideButton(0);
          buttons.hideButton(1);
        }else{
          buttons.hideButton(1);
          buttons.showButton(0);
        }
      });
    };

    let buttonsEffect2 = (buttons, scene) => {
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
    bathroomButtons.hideButton(1);
    bathroomButtons.hideButton(2);
    dogButtons.hideButton(1);
    dogButtons.hideButton(2);
    tipiButtons.hideButton(1);
    tipiButtons.hideButton(2);

    var bathroomTemp = false;
    var dogTemp = false;
    var tipiTemp = false;

    buttonsEffect(bathroomButtons, bathroomTemp, 'bathroomwav');
    buttonsEffect(tipiButtons, tipiTemp, 'tipiwav');
    buttonsEffect(dogButtons, dogTemp, 'dogwav');

    buttonsEffect2(backButtons, 'move');

  }
}
