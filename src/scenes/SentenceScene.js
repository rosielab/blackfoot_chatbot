import Phaser from 'phaser';

var path2 = '../assets/images/SentenceScene/1x/';
var cardsArr = [
  'today',
  'this morning',
  'tomorrow',
  'this evening',
  'yesterday',
  'and',
  'please pass the',
  'where',
  'who',
  'i will go',
  'i went',
  'i will eat',
  'cafe',
  'apples',
  'burger',
  'coffee',
  'dessert',
  'eggs',
  'fish',
  'dog',
  'night club',
  'tipi',
  'store',
  'window',
  'bathroom',
  'car',
  'elevator',
  'kitchen',
  'mother',
  'father',
  'boy',
  'girl',
  'child',
  'woman',
  'house',
  'cinema',
];
export default class SentenceScene extends Phaser.Scene {
  constructor() {
    super('sentence');
  }

  preload() {
    this.load.image(
      'sentenceBackground',
      '../assets/images/SentenceScene/Sentence.png'
    );
    for (var i = 0; i < cardsArr.length; i++) {
      this.load.image(cardsArr[i] + 'sen', path2 + cardsArr[i] + '.png');
    }
    // this.load.image(
    //   'today',
    //   '../assets/images/SentenceScene/1x/today.png'
    // );
    // this.load.image(
    //   'thismorning',
    //   '../assets/images/SentenceScene/1x/i'
    // );
    this.load.image(
      'back',
      '../assets/images/LearnScene/learn-main-page-buttons/regular-state/back-b.png'
    );
    this.load.image(
      'back1',
      '../assets/images/LearnScene/learn-main-page-buttons/rollover-state/back-b-rollover.png'
    );
    // this.load.image(
    //   'apple',
    //   '../assets/images/SentenceScene/sentence-page-buttons/normal-state/apple-b.png'
    // );
    // this.load.image(
    //   'Iwillgo',
    //   '../assets/images/SentenceScene/sentence-page-buttons/normal-state/iwillgo-b.png'
    // );
    // this.load.image(
    //   'Iwent',
    //   '../assets/images/SentenceScene/sentence-page-buttons/normal-state/iwent-b.png'
    // );
    // this.load.image(
    //   'thismorning',
    //   '../assets/images/SentenceScene/sentence-page-buttons/normal-state/thismorning-b.png'
    // );
    this.load.image(
      'media',
      '../assets/images/SentenceScene/sentence-page-buttons/normal-state/play-b.png'
    );
    this.load.image(
      'clean',
      '../assets/images/SentenceScene/sentence-page-buttons/normal-state/clear-b.png'
    );
  }

  create() {
    this.background = this.add.image(399, 300, 'sentenceBackground');
    const back = this.add.image(53, 552, 'back');
    const back1 = this.add.image(53, 552, 'back1');
    var media = this.add.image(710, 226, 'media');
    var clean = this.add.image(100, 260, 'clean');
    var today = this.add.image(87, 330, cardsArr[0] + 'sen');
    var thismorning = this.add.image(199, 330, cardsArr[1] + 'sen');
    var tomorrow = this.add.image(338, 330, cardsArr[2] + 'sen');
    var thisevening = this.add.image(470, 330, cardsArr[3] + 'sen');
    var yesterday = this.add.image(598, 330, cardsArr[4] + 'sen');
    var and = this.add.image(691, 330, cardsArr[5] + 'sen');
    var pleasepassthe = this.add.image(130, 368, cardsArr[6] + 'sen');
    var where = this.add.image(259, 368, cardsArr[7] + 'sen');
    var who = this.add.image(334, 368, cardsArr[8] + 'sen');
    var iwillgo = this.add.image(417, 368, cardsArr[9] + 'sen');
    var iwent = this.add.image(511, 368, cardsArr[10] + 'sen');
    var iwilleat = this.add.image(607, 368, cardsArr[11] + 'sen');
    var cafe = this.add.image(695, 368, cardsArr[12] + 'sen');
    var apples = this.add.image(95, 406, cardsArr[13] + 'sen');
    var burger = this.add.image(184, 406, cardsArr[14] + 'sen');
    var coffee = this.add.image(268, 406, cardsArr[15] + 'sen');
    var dessert = this.add.image(355, 406, cardsArr[16] + 'sen');
    var eggs = this.add.image(440, 406, cardsArr[17] + 'sen');
    var fish = this.add.image(504, 406, cardsArr[18] + 'sen');
    var dog = this.add.image(570, 406, cardsArr[19] + 'sen');
    var nightclub = this.add.image(665, 406, cardsArr[20] + 'sen');
    var tipi = this.add.image(84, 444, cardsArr[21] + 'sen');
    var store = this.add.image(156, 444, cardsArr[22] + 'sen');
    var window = this.add.image(242, 444, cardsArr[23] + 'sen');
    var bathroom = this.add.image(346, 444, cardsArr[24] + 'sen');
    var car = this.add.image(426, 444, cardsArr[25] + 'sen');
    var elevator = this.add.image(498, 444, cardsArr[26] + 'sen');
    var kitchen = this.add.image(594, 444, cardsArr[27] + 'sen');
    var mother = this.add.image(95, 482, cardsArr[28] + 'sen');
    var father = this.add.image(179, 482, cardsArr[29] + 'sen');
    var boy = this.add.image(248, 482, cardsArr[30] + 'sen');
    var girl = this.add.image(306, 482, cardsArr[31] + 'sen');
    var child = this.add.image(370, 482, cardsArr[32] + 'sen');
    var woman = this.add.image(448, 482, cardsArr[33] + 'sen');
    var house = this.add.image(539, 482, cardsArr[34] + 'sen');
    var cinema = this.add.image(621, 482, cardsArr[35] + 'sen');

    const data = require('../assets/all_words_address.json');

    function insertButton(name, button, arr) {
      removeButton(name, arr); // prevent duplicates

      if (arr.length == 0) {
        arr.push([data[name], button.x]);
      } else {
        for (var i = 0; i < arr.length; i++) {
          if (arr[0][1] >= button.x) {
            // left-most
            arr.unshift([data[name], button.x]);
            return;
          } else if (i == arr.length - 1) {
            // right-most
            arr.push([data[name], button.x]);
            return;
          } else if (arr[i][1] <= button.x && arr[i + 1][1] >= button.x) {
            arr.splice(i + 1, 0, [data[name], button.x]);
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
        if (button.y < 270) {
          if (button.x < 139) {
            button.x = 139;
          } else if (button.x > 565) {
            button.x = 565;
          }
          button.y = 200;
          insertButton(name, button, wordArry);
          console.log(wordArry);
        } else if (button.y >= 270) {
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

    buttonsEffect(today, cardsArr[0]);
    buttonsEffect(thismorning, cardsArr[1]);
    buttonsEffect(tomorrow, cardsArr[2]);
    buttonsEffect(thisevening, cardsArr[3]);
    buttonsEffect(yesterday, cardsArr[4]);
    buttonsEffect(and, cardsArr[5]);
    buttonsEffect(pleasepassthe, cardsArr[6]);
    buttonsEffect(where, cardsArr[7]);
    buttonsEffect(who, cardsArr[8]);
    buttonsEffect(iwillgo, cardsArr[9]);
    buttonsEffect(iwent, cardsArr[10]);
    buttonsEffect(iwilleat, cardsArr[11]);
    buttonsEffect(cafe, cardsArr[12]);
    buttonsEffect(apples, cardsArr[13]);
    buttonsEffect(burger, cardsArr[14]);
    buttonsEffect(coffee, cardsArr[15]);
    buttonsEffect(dessert, cardsArr[16]);
    buttonsEffect(eggs, cardsArr[17]);
    buttonsEffect(fish, cardsArr[18]);
    buttonsEffect(dog, cardsArr[19]);
    buttonsEffect(nightclub, cardsArr[20]);
    buttonsEffect(tipi, cardsArr[21]);
    buttonsEffect(store, cardsArr[22]);
    buttonsEffect(window, cardsArr[23]);
    buttonsEffect(bathroom, cardsArr[24]);
    buttonsEffect(car, cardsArr[25]);
    buttonsEffect(elevator, cardsArr[26]);
    buttonsEffect(kitchen, cardsArr[27]);
    buttonsEffect(mother, cardsArr[28]);
    buttonsEffect(father, cardsArr[29]);
    buttonsEffect(boy, cardsArr[30]);
    buttonsEffect(girl, cardsArr[31]);
    buttonsEffect(child, cardsArr[32]);
    buttonsEffect(woman, cardsArr[33]);
    buttonsEffect(house, cardsArr[34]);
    buttonsEffect(cinema, cardsArr[35]);
    mediaEffect(mediaButtons);
  }
}
