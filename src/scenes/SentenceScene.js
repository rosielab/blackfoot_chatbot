import Phaser from 'phaser';

export default class SentenceScene extends Phaser.Scene {
  constructor() {
    super('sentence');
  }

  preload() {
    this.load.image(
      'sentenceBackground',
      '../assets/images/sentenceBackground.png'
    );

    this.load.image('today', '../assets/images/today.png');
    this.load.image('Iwilleat', '../assets/images/Iwilleat.png');
    this.load.image('apple', '../assets/images/apple.png');
    this.load.image('Iwillgo', '../assets/images/Iwillgo.png');
    this.load.image('Iwent', '../assets/images/Iwent.png');
    this.load.image('thismorning', '../assets/images/thismorning.png');
    this.load.image('media', '../assets/images/media.png');
    this.load.image('clean', '../assets/images/clean.png');
    this.load.image('back', '../assets/images/back.png');
    this.load.image('back1', '../assets/images/back2.png');
  }

  create() {
    this.background = this.add.image(400, 300, 'sentenceBackground');
    const back = this.add.image(63, 56, 'back');
    const back1 = this.add.image(63, 56, 'back1');
    var today = this.add.image(185, 118, 'today');
    var Iwilleat = this.add.image(380, 118, 'Iwilleat');
    var apple = this.add.image(573, 118, 'apple');
    var Iwillgo = this.add.image(380, 192, 'Iwillgo');
    var Iwent = this.add.image(380, 266, 'Iwent');
    var thismorning = this.add.image(185, 192, 'thismorning');
    var media = this.add.image(748, 409, 'media');
    var clean = this.add.image(32, 373, 'clean');

    const data = require('../assets/all_words_address.json');

    var mediaButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [media],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var cleanButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [clean],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var backButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [back, back1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    const wordSet = new Set();

    let buttonsEffect = (button, name) => {
      button.setInteractive();
      this.input.setDraggable(button);
      button.on('pointerover', function () {
        button.setTint(0x44ff44);
      });
      button.on('pointerout', function () {
        button.clearTint();
      });
      button.on('drag', function (pointer, dragX, dragY) {
        button.x = dragX;
        button.y = dragY;
      });
      button.on('dragend', function (pointer, dragX, dragY, dropped) {
        if (button.y > 360 && button.y < 450) {
          if (button.x < 120) {
            button.x = 120;
          }
          if (button.x > 660) {
            button.x = 660;
          }
          button.y = 408;
          wordSet.add(data[name]);
          console.log(wordSet);
        } else if (button.y <= 360 || button.y >= 450) {
          wordSet.delete(data[name]);
        }
      });
    };

    let mediaEffect = (buttons) => {
      buttons.on('button.over', (button, index, pointer, event) => {
        button.setTint(0x44ff44);
      });

      buttons.on('button.out', (button, index, pointer, event) => {
        button.clearTint();
      });
      buttons.on('button.click', (button, index, pointer, event) => {
        //****muti thread problem********
        var index = 1;
        var wordArry = Array.from(wordSet);
        var audioToPlay = new Audio();
        audioToPlay.src = wordArry[0];
        audioToPlay.play();

        audioToPlay.onended = function () {
          if (index < wordArry.length) {
            audioToPlay.src = wordArry[index];
            audioToPlay.play();
            index++;
          }
        };
      });
    };

    cleanButtons
      .on('button.click', () => {
        this.scene.start('sentence');
      })
      .on('button.over', (button) => {
        button.setTint(0x44ff44);
      })
      .on('button.out', (button) => {
        button.clearTint();
      });

    backButtons.hideButton(1);

    backButtons
      .on('button.click', () => {
        this.scene.start('menu');
      })
      .on('button.over', () => {
        backButtons.hideButton(0);
        backButtons.showButton(1);
      })
      .on('button.out', () => {
        backButtons.hideButton(1);
        backButtons.showButton(0);
      });

    buttonsEffect(today, 'today');
    buttonsEffect(Iwilleat, 'i will eat');
    buttonsEffect(apple, 'apples');
    buttonsEffect(Iwillgo, 'i will go');
    buttonsEffect(Iwent, 'i went');
    buttonsEffect(thismorning, 'this morning');
    mediaEffect(mediaButtons);
  }
}
