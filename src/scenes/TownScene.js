import Phaser from 'phaser';

export default class HomeScene extends Phaser.Scene {
  constructor() {
    super('town');
  }
  preload() {
    this.load.image(
      'townBackground',
      '../assets/images/LearnScene/Learn-town.png'
    );
    var path =
      '../assets/images/LearnScene/Learn-all-tiles/unpressed-state/png-files/';
    this.load.image('card19', path + 'tile-cafe-unpressed.png');
    this.load.image('card19_1', path + 'tile-cafe-pressed.png');
    this.load.image('card20', path + 'tile-house-unpressed.png');
    this.load.image('card20_1', path + 'tile-house-pressed.png');
    this.load.image('card21', path + 'tile-tipi-unpressed.png');
    this.load.image('card21_1', path + 'tile-tipi-pressed.png');
    this.load.image('card22', path + 'tile-cinema-unpressed.png');
    this.load.image('card22_1', path + 'tile-cinema-pressed.png');
    this.load.image('card23', path + 'tile-nightclub-unpressed.png');
    this.load.image('card23_1', path + 'tile-nightclub-pressed.png');
    this.load.image('card24', path + 'tile-store-unpressed.png');
    this.load.image('card24_1', path + 'tile-store-pressed.png');

    this.load.image(
      'back',
      '../assets/images/LearnScene/learn-main-page-buttons/regular-state/back-b.png'
    );
    this.load.image(
      'back1',
      '../assets/images/LearnScene/learn-main-page-buttons/rollover-state/back-b-rollover.png'
    );
    this.load.audio('card19_wav', '../assets/sounds/cafe.wav');
    this.load.audio('card20_wav', '../assets/sounds/house.wav');
    this.load.audio('card21_wav', '../assets/sounds/tipi.wav');
    this.load.audio('card22_wav', '../assets/sounds/cinema.wav');
    this.load.audio('card23_wav', '../assets/sounds/night club.wav');
    this.load.audio('card24_wav', '../assets/sounds/store.wav');
  }

  create() {
    this.background = this.add.image(400, 300, 'townBackground');
    const back = this.add.image(53, 545, 'back');
    const back1 = this.add.image(53, 545, 'back1');
    const card1 = this.add.image(180, 228, 'card19');
    const card1_1 = this.add.image(180, 228, 'card19_1');
    const card1_2 = this.add.image(180, 228, 'card19_1');
    const card2 = this.add.image(407, 228, 'card20');
    const card2_1 = this.add.image(407, 228, 'card20_1');
    const card2_2 = this.add.image(407, 228, 'card20_1');
    const card3 = this.add.image(634, 228, 'card21');
    const card3_1 = this.add.image(634, 228, 'card21_1');
    const card3_2 = this.add.image(634, 228, 'card21_1');
    const card4 = this.add.image(180, 409, 'card22');
    const card4_1 = this.add.image(180, 409, 'card22_1');
    const card4_2 = this.add.image(180, 409, 'card22_1');
    const card5 = this.add.image(407, 409, 'card23');
    const card5_1 = this.add.image(407, 409, 'card23_1');
    const card5_2 = this.add.image(407, 409, 'card23_1');
    const card6 = this.add.image(634, 409, 'card24');
    const card6_1 = this.add.image(634, 409, 'card24_1');
    const card6_2 = this.add.image(634, 409, 'card24_1');

    const addButtons = (button, button1) => {
      const newButtons = this.rexUI.add.buttons({
        orientation: 0,
        buttons: [button, button1],
        expand: false,
        align: undefined,
        click: {
          mode: 'pointerup',
          clickInterval: 100,
        },
      });
      return newButtons;
    };

    const addButtons2 = (button, button1, button2) => {
      const newButtons = this.rexUI.add.buttons({
        orientation: 0,
        buttons: [button, button1, button2],
        expand: false,
        align: undefined,
        click: {
          mode: 'pointerup',
          clickInterval: 100,
        },
      });
      return newButtons;
    };

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
        if (temp) {
          buttons.hideButton(0);
          buttons.hideButton(1);
        } else {
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

    var backButtons = addButtons(back, back1);
    var card1Buttons = addButtons2(card1, card1_1, card1_2);
    var card2Buttons = addButtons2(card2, card2_1, card2_2);
    var card3Buttons = addButtons2(card3, card3_1, card3_2);
    var card4Buttons = addButtons2(card4, card4_1, card4_2);
    var card5Buttons = addButtons2(card5, card5_1, card5_2);
    var card6Buttons = addButtons2(card6, card6_1, card6_2);

    backButtons.hideButton(1);
    card1Buttons.hideButton(1);
    card1Buttons.hideButton(2);
    card2Buttons.hideButton(1);
    card2Buttons.hideButton(2);
    card3Buttons.hideButton(1);
    card3Buttons.hideButton(2);
    card4Buttons.hideButton(1);
    card4Buttons.hideButton(2);
    card5Buttons.hideButton(1);
    card5Buttons.hideButton(2);
    card6Buttons.hideButton(1);
    card6Buttons.hideButton(2);

    var card1Temp = false;
    var card2Temp = false;
    var card3Temp = false;
    var card4Temp = false;
    var card5Temp = false;
    var card6Temp = false;

    buttonsEffect(card1Buttons, card1Temp, 'card19_wav');
    buttonsEffect(card2Buttons, card2Temp, 'card20_wav');
    buttonsEffect(card3Buttons, card3Temp, 'card21_wav');
    buttonsEffect(card4Buttons, card4Temp, 'card22_wav');
    buttonsEffect(card5Buttons, card5Temp, 'card23_wav');
    buttonsEffect(card6Buttons, card6Temp, 'card24_wav');

    buttonsEffect2(backButtons, 'move');
  }
}
