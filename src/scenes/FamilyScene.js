import Phaser from 'phaser';

export default class HomeScene extends Phaser.Scene {
  constructor() {
    super('family');
  }
  preload() {
    this.load.image(
      'familyBackground',
      '../assets/images/LearnScene/Learn-family.png'
    );
    var path =
      '../assets/images/LearnScene/Learn-all-tiles/unpressed-state/png-files/';
    this.load.image('card1', path + 'tile-mother-unpressed.png');
    this.load.image('card1_1', path + 'tile-mother-pressed.png');
    this.load.image('card2', path + 'tile-father-unpressed.png');
    this.load.image('card2_1', path + 'tile-father-pressed.png');
    this.load.image('card3', path + 'tile-boy-unpressed.png');
    this.load.image('card3_1', path + 'tile-boy-pressed.png');
    this.load.image('card4', path + 'tile-girl-unpressed.png');
    this.load.image('card4_1', path + 'tile-girl-pressed.png');
    this.load.image('card5', path + 'tile-child-unpressed.png');
    this.load.image('card5_1', path + 'tile-child-pressed.png');
    this.load.image('card6', path + 'tile-woman-unpressed.png');
    this.load.image('card6_1', path + 'tile-woman-pressed.png');

    this.load.image(
      'back',
      '../assets/images/LearnScene/learn-main-page-buttons/regular-state/back-b.png'
    );
    this.load.image(
      'back1',
      '../assets/images/LearnScene/learn-main-page-buttons/rollover-state/back-b-rollover.png'
    );
    this.load.audio('card1_wav', '../assets/sounds/mother.wav');
    this.load.audio('card2_wav', '../assets/sounds/father.wav');
    this.load.audio('card3_wav', '../assets/sounds/boy.wav');
    this.load.audio('card4_wav', '../assets/sounds/girl.wav');
    this.load.audio('card5_wav', '../assets/sounds/child.wav');
    this.load.audio('card6_wav', '../assets/sounds/woman.wav');
  }

  create() {
    this.background = this.add.image(400, 300, 'familyBackground');
    const back = this.add.image(53, 545, 'back');
    const back1 = this.add.image(53, 545, 'back1');
    const card1 = this.add.image(180, 228, 'card1');
    const card1_1 = this.add.image(180, 228, 'card1_1');
    const card1_2 = this.add.image(180, 228, 'card1_1');
    const card2 = this.add.image(407, 228, 'card2');
    const card2_1 = this.add.image(407, 228, 'card2_1');
    const card2_2 = this.add.image(407, 228, 'card2_1');
    const card3 = this.add.image(634, 228, 'card3');
    const card3_1 = this.add.image(634, 228, 'card3_1');
    const card3_2 = this.add.image(634, 228, 'card3_1');
    const card4 = this.add.image(180, 409, 'card4');
    const card4_1 = this.add.image(180, 409, 'card4_1');
    const card4_2 = this.add.image(180, 409, 'card4_1');
    const card5 = this.add.image(407, 409, 'card5');
    const card5_1 = this.add.image(407, 409, 'card5_1');
    const card5_2 = this.add.image(407, 409, 'card5_1');
    const card6 = this.add.image(634, 409, 'card6');
    const card6_1 = this.add.image(634, 409, 'card6_1');
    const card6_2 = this.add.image(634, 409, 'card6_1');

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

    buttonsEffect(card1Buttons, card1Temp, 'card1_wav');
    buttonsEffect(card2Buttons, card2Temp, 'card2_wav');
    buttonsEffect(card3Buttons, card3Temp, 'card3_wav');
    buttonsEffect(card4Buttons, card4Temp, 'card4_wav');
    buttonsEffect(card5Buttons, card5Temp, 'card5_wav');
    buttonsEffect(card6Buttons, card6Temp, 'card6_wav');

    buttonsEffect2(backButtons, 'move');
  }
}
