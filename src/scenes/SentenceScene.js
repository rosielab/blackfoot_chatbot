import Phaser from 'phaser';

export default class SentenceScene extends Phaser.Scene {
  constructor() {
    super('sentence');
  }

  preload() {
    this.load.image(
      'sentenceBackground',
      '../assets/images/SentenceScene/Sentence.png'
    );

    this.load.image('today', '../assets/images/SentenceScene/sentence-page-buttons/normal-state/today-b.png');
    this.load.image('Iwilleat', '../assets/images/SentenceScene/sentence-page-buttons/normal-state/iwilleat-b.png');
    this.load.image('back', '../assets/images/LearnScene/learn-main-page-buttons/regular-state/back-b.png');
    this.load.image('back1', '../assets/images/LearnScene/learn-main-page-buttons/rollover-state/back-b-rollover.png');
    this.load.image('apple', '../assets/images/SentenceScene/sentence-page-buttons/normal-state/apple-b.png');
    this.load.image('Iwillgo', '../assets/images/SentenceScene/sentence-page-buttons/normal-state/iwillgo-b.png');
    this.load.image('Iwent', '../assets/images/SentenceScene/sentence-page-buttons/normal-state/iwent-b.png');
    this.load.image('thismorning', '../assets/images/SentenceScene/sentence-page-buttons/normal-state/thismorning-b.png');
    this.load.image('media', '../assets/images/SentenceScene/sentence-page-buttons/normal-state/play-b.png');
    this.load.image('clean', '../assets/images/SentenceScene/sentence-page-buttons/normal-state/clear-b.png');
  }

  create() {
    this.background = this.add.image(400, 300, 'sentenceBackground');
    const back = this.add.image(53, 550, 'back');
    const back1 = this.add.image(53, 550, 'back1');
    var today = this.add.image(322, 345, 'today');
    var Iwilleat = this.add.image(138, 398, 'Iwilleat');
    var apple = this.add.image(506, 345, 'apple');
    var Iwillgo = this.add.image(139, 345, 'Iwillgo');
    var Iwent = this.add.image(137, 450, 'Iwent');
    var thismorning = this.add.image(320, 401, 'thismorning');
    var media = this.add.image(710, 226, 'media');
    var clean = this.add.image(100, 260, 'clean');

    const data = require('../assets/all_words_address.json');

    function insertButton(name, button, arr) {
      removeButton(name, arr); // prevent duplicates

      if (arr.length == 0) {
        arr.push([data[name], button.x]);
      } else {
        for (var i = 0; i < arr.length; i++) {
          if (arr[0][1] >= button.x) { // left-most
            arr.unshift([data[name], button.x]);
            return;
          } else if (i == arr.length-1) { // right-most
            arr.push([data[name], button.x]);
            return;
          } else if (arr[i][1] <= button.x && arr[i+1][1] >= button.x) {
            arr.splice(i+1, 0, [data[name], button.x]);
            return;
          }
        }
      }
    }

    function removeButton(name, arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] == data[name]) {
          arr.splice(i, 1);
          return;
        }
      }
    }

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

    const wordArry = new Array();

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
        if (button.y < 200) {
          if (button.x < 139) {
            button.x = 139;
          } else if (button.x > 565) {
            button.x = 565;
          }
          button.y = 200;
          insertButton(name, button, wordArry);
          console.log(wordArry);
        } else if (button.y >= 200) {
          removeButton(name, wordArry);
          console.log(wordArry);
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
        var audioToPlay = new Audio();
        audioToPlay.src = wordArry[0][0];
        audioToPlay.play();

        audioToPlay.onended = function () {
          if (index < wordArry.length) {
            audioToPlay.src = wordArry[index][0];
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
