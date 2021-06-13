import Phaser from 'phaser';

export default class HomeScene extends Phaser.Scene {
  constructor() {
    super('greetings');
  }
  preload() {
    this.load.image(
      'greetingsBackground',
      '../assets/images/LearnScene/Learn-greetings.png'
    );
    var path =
      '../assets/images/LearnScene/Learn-all-tiles/unpressed-state/png-files/';
    this.load.image('card13', path + 'tile-hellofriend-unpressed.png');
    this.load.image('card13_1', path + 'tile-hellofriend-pressed.png');
    this.load.image('card14', path + 'tile-howareyou-unpressed.png');
    this.load.image('card14_1', path + 'tile-howareyou-pressed.png');
    this.load.image('card15', path + 'tile-hello-unpressed.png');
    this.load.image('card15_1', path + 'tile-hello-pressed.png');
    this.load.image('card16', path + 'tile-nottoobad-unpressed.png');
    this.load.image('card16_1', path + 'tile-nottoobad-pressed.png');
    this.load.image('card17', path + 'tile-yes-unpressed.png');
    this.load.image('card17_1', path + 'tile-yes-pressed.png');
    this.load.image('card18', path + 'tile-no-unpressed.png');
    this.load.image('card18_1', path + 'tile-no-pressed.png');

    this.load.image(
      'back',
      '../assets/images/LearnScene/learn-main-page-buttons/regular-state/back-b.png'
    );
    this.load.image(
      'back1',
      '../assets/images/LearnScene/learn-main-page-buttons/rollover-state/back-b-rollover.png'
    );
    this.load.audio('card13_wav', '../assets/sounds/hello friend.wav');
    this.load.audio('card14_wav', '../assets/sounds/how are you_.wav');
    this.load.audio('card15_wav', '../assets/sounds/hello.wav');
    this.load.audio('card16_wav', '../assets/sounds/not too bad.wav');
    this.load.audio('card17_wav', '../assets/sounds/yes.wav');
    this.load.audio('card18_wav', '../assets/sounds/no.wav');
  }

  create() {
    this.background = this.add.image(400, 300, 'greetingsBackground');
    const back = this.add.image(53, 545, 'back');
    const back1 = this.add.image(53, 545, 'back1');
    const card1 = this.add.image(180, 228, 'card13');
    const card1_1 = this.add.image(180, 228, 'card13_1');
    const card1_2 = this.add.image(180, 228, 'card13_1');
    const card2 = this.add.image(407, 228, 'card14');
    const card2_1 = this.add.image(407, 228, 'card14_1');
    const card2_2 = this.add.image(407, 228, 'card14_1');
    const card3 = this.add.image(634, 228, 'card15');
    const card3_1 = this.add.image(634, 228, 'card15_1');
    const card3_2 = this.add.image(634, 228, 'card15_1');
    const card4 = this.add.image(180, 409, 'card16');
    const card4_1 = this.add.image(180, 409, 'card16_1');
    const card4_2 = this.add.image(180, 409, 'card16_1');
    const card5 = this.add.image(407, 409, 'card17');
    const card5_1 = this.add.image(407, 409, 'card17_1');
    const card5_2 = this.add.image(407, 409, 'card17_1');
    const card6 = this.add.image(634, 409, 'card18');
    const card6_1 = this.add.image(634, 409, 'card18_1');
    const card6_2 = this.add.image(634, 409, 'card18_1');

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

    buttonsEffect(card1Buttons, card1Temp, 'card13_wav');
    buttonsEffect(card2Buttons, card2Temp, 'card14_wav');
    buttonsEffect(card3Buttons, card3Temp, 'card15_wav');
    buttonsEffect(card4Buttons, card4Temp, 'card16_wav');
    buttonsEffect(card5Buttons, card5Temp, 'card17_wav');
    buttonsEffect(card6Buttons, card6Temp, 'card18_wav');

    buttonsEffect2(backButtons, 'move');
  }
}
