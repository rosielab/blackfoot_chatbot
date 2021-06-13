import Phaser from 'phaser';

export default class HomeScene extends Phaser.Scene {
  constructor() {
    super('restaurant');
  }
  preload() {
    this.load.image('restaurantBackground', '../assets/images/LearnScene/Learn-restaurant.png');
    var path = "../assets/images/LearnScene/Learn-all-tiles/unpressed-state/png-files/"
    this.load.image('card7', path + 'tile-apples-unpressed.png');
    this.load.image('card7_1', path + 'tile-apples-pressed.png');
    this.load.image('card8', path + 'tile-burger-unpressed.png');
    this.load.image('card8_1', path + 'tile-burger-pressed.png');
    this.load.image('card9', path + 'tile-coffee-unpressed.png');
    this.load.image('card9_1', path + 'tile-coffee-pressed.png');
    this.load.image('card10', path + 'tile-dessert-unpressed.png');
    this.load.image('card10_1', path + 'tile-dessert-pressed.png');
    this.load.image('card11', path + 'tile-eggs-unpressed.png');
    this.load.image('card11_1', path + 'tile-eggs-pressed.png');
    this.load.image('card12', path + 'tile-fish-unpressed.png');
    this.load.image('card12_1', path + 'tile-fish-pressed.png');

    this.load.image('back', '../assets/images/LearnScene/learn-main-page-buttons/regular-state/back-b.png');
    this.load.image('back1', '../assets/images/LearnScene/learn-main-page-buttons/rollover-state/back-b-rollover.png');
    this.load.audio('card7_wav', '../assets/sounds/apples.wav');
    this.load.audio('card8_wav', '../assets/sounds/burger.wav');
    this.load.audio('card9_wav', '../assets/sounds/coffee.wav');
    this.load.audio('card10_wav', '../assets/sounds/dessert.wav');
    this.load.audio('card11_wav', '../assets/sounds/eggs.wav');
    this.load.audio('card12_wav', '../assets/sounds/fish.wav');
  }

  create() {
    this.background = this.add.image(400, 300, 'restaurantBackground');
    const back = this.add.image(53, 545, 'back');
    const back1 = this.add.image(53, 545, 'back1');
    const card1 = this.add.image(180, 228, 'card7');
    const card1_1 = this.add.image(180, 228, 'card7_1');
    const card1_2 = this.add.image(180, 228, 'card7_1');
    const card2 = this.add.image(407, 228, 'card8');
    const card2_1 = this.add.image(407, 228, 'card8_1');
    const card2_2 = this.add.image(407, 228, 'card8_1');
    const card3 = this.add.image(634, 228, 'card9');
    const card3_1 = this.add.image(634, 228, 'card9_1');
    const card3_2 = this.add.image(634, 228, 'card9_1');
    const card4 = this.add.image(180, 409, 'card10');
    const card4_1 = this.add.image(180, 409, 'card10_1');
    const card4_2 = this.add.image(180, 409, 'card10_1');
    const card5 = this.add.image(407, 409, 'card11');
    const card5_1 = this.add.image(407, 409, 'card11_1');
    const card5_2 = this.add.image(407, 409, 'card11_1');
    const card6 = this.add.image(634, 409, 'card12');
    const card6_1 = this.add.image(634, 409, 'card12_1');
    const card6_2 = this.add.image(634, 409, 'card12_1');

    
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

    const addButtons2 = (button,button1, button2) => {
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

    buttonsEffect(card1Buttons, card1Temp, 'card7_wav');
    buttonsEffect(card2Buttons, card2Temp, 'card8_wav');
    buttonsEffect(card3Buttons, card3Temp, 'card9_wav');
    buttonsEffect(card4Buttons, card4Temp, 'card10_wav');
    buttonsEffect(card5Buttons, card5Temp, 'card11_wav');
    buttonsEffect(card6Buttons, card6Temp, 'card12_wav');

    buttonsEffect2(backButtons, 'move');

  }
}
