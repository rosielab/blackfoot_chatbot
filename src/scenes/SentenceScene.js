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

const synthesisWords = ['today', 'yesterday', 'tomorrow', 'this morning', 'this evening', 'i will go', 'i will eat', 'i went', 'and', 'where', 'who', 'please pass the'];
const homeWords = ['bathroom', 'dog', 'car', 'kitchen', 'window', 'elevator'];
const familyWords = ['mother', 'father', 'boy', 'girl', 'child', 'woman'];
// const greetingsWords = []
const townWords = ['cafe', 'house', 'tipi', 'cinema', 'night club', 'store'];
const restaurantWords = ['apples', 'burger', 'coffee', 'dessert', 'eggs', 'fish'];
const scenesList = [synthesisWords, homeWords, familyWords, townWords, restaurantWords];

export default class SentenceScene extends Phaser.Scene {
  constructor() {
    super('sentence');
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

    this.load.image(
      'sentenceBackground',
      '../assets/images/SentenceScene/Sentence.png'
    );
    // for (var i = 0; i < cardsArr.length; i++) {
    //   this.load.image(cardsArr[i] + 'sen', path2 + cardsArr[i] + '.png');
    // }
    for (var scene of scenesList) {
      for (var word of scene) {
        this.load.image(word + 'sen', path2 + word + '.png');
      }
    }
    this.load.image(
      'back',
      '../assets/images/LearnScene/learn-main-page-buttons/regular-state/back-b.png'
    );
    this.load.image(
      'back1',
      '../assets/images/LearnScene/learn-main-page-buttons/rollover-state/back-b-rollover.png'
    );
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

    var imageList = [];

    for (var scene of scenesList) {
      if (scene.length == 6) { // 3x2 grid
        imageList.push(this.add.image(378, 369, scene[0] + 'sen'));
        imageList.push(this.add.image(517, 369, scene[1] + 'sen'));
        imageList.push(this.add.image(656, 369, scene[2] + 'sen'));
        imageList.push(this.add.image(378, 437, scene[3] + 'sen'));
        imageList.push(this.add.image(517, 437, scene[4] + 'sen'));
        imageList.push(this.add.image(656, 437, scene[5] + 'sen'));
      } else if (scene.length == 12) { // 4x3 grid
        imageList.push(this.add.image(318, 347, scene[0] + 'sen'));
        imageList.push(this.add.image(423, 347, scene[1] + 'sen'));
        imageList.push(this.add.image(543, 347, scene[2] + 'sen'));
        imageList.push(this.add.image(677, 347, scene[3] + 'sen'));
        imageList.push(this.add.image(348, 407, scene[4] + 'sen'));
        imageList.push(this.add.image(485, 407, scene[5] + 'sen'));
        imageList.push(this.add.image(598, 407, scene[6] + 'sen'));
        imageList.push(this.add.image(707, 407, scene[7] + 'sen'));
        imageList.push(this.add.image(308, 467, scene[8] + 'sen'));
        imageList.push(this.add.image(413, 467, scene[9] + 'sen'));
        imageList.push(this.add.image(520, 467, scene[10] + 'sen'));
        imageList.push(this.add.image(667, 467, scene[11] + 'sen'));
        // imageList.push(this.add.image(355, 347, scene[0] + 'sen'));
        // imageList.push(this.add.image(465, 347, scene[1] + 'sen'));
        // imageList.push(this.add.image(575, 347, scene[2] + 'sen'));
        // imageList.push(this.add.image(686, 347, scene[3] + 'sen'));
        // imageList.push(this.add.image(355, 407, scene[4] + 'sen'));
        // imageList.push(this.add.image(465, 407, scene[5] + 'sen'));
        // imageList.push(this.add.image(575, 407, scene[6] + 'sen'));
        // imageList.push(this.add.image(686, 407, scene[7] + 'sen'));
        // imageList.push(this.add.image(355, 467, scene[8] + 'sen'));
        // imageList.push(this.add.image(465, 467, scene[9] + 'sen'));
        // imageList.push(this.add.image(575, 467, scene[10] + 'sen'));
        // imageList.push(this.add.image(686, 467, scene[11] + 'sen'));
      }
    }
    // var today = this.add.image(87, 330, cardsArr[0] + 'sen');
    // var thismorning = this.add.image(199, 330, cardsArr[1] + 'sen');
    // var tomorrow = this.add.image(338, 330, cardsArr[2] + 'sen');
    // var thisevening = this.add.image(470, 330, cardsArr[3] + 'sen');
    // var yesterday = this.add.image(598, 330, cardsArr[4] + 'sen');
    // var and = this.add.image(691, 330, cardsArr[5] + 'sen');
    // var pleasepassthe = this.add.image(130, 368, cardsArr[6] + 'sen');
    // var where = this.add.image(259, 368, cardsArr[7] + 'sen');
    // var who = this.add.image(334, 368, cardsArr[8] + 'sen');
    // var iwillgo = this.add.image(417, 368, cardsArr[9] + 'sen');
    // var iwent = this.add.image(511, 368, cardsArr[10] + 'sen');
    // var iwilleat = this.add.image(607, 368, cardsArr[11] + 'sen');
    // var cafe = this.add.image(695, 368, cardsArr[12] + 'sen');
    // var apples = this.add.image(95, 406, cardsArr[13] + 'sen');
    // var burger = this.add.image(184, 406, cardsArr[14] + 'sen');
    // var coffee = this.add.image(268, 406, cardsArr[15] + 'sen');
    // var dessert = this.add.image(355, 406, cardsArr[16] + 'sen');
    // var eggs = this.add.image(440, 406, cardsArr[17] + 'sen');
    // var fish = this.add.image(504, 406, cardsArr[18] + 'sen');
    // var dog = this.add.image(517, 369, cardsArr[19] + 'sen');
    // var nightclub = this.add.image(665, 406, cardsArr[20] + 'sen');
    // var tipi = this.add.image(84, 444, cardsArr[21] + 'sen');
    // var store = this.add.image(156, 444, cardsArr[22] + 'sen');
    // var window = this.add.image(517, 437, cardsArr[23] + 'sen');
    // var bathroom = this.add.image(378, 369, cardsArr[24] + 'sen');
    // var car = this.add.image(656, 369, cardsArr[25] + 'sen');
    // var elevator = this.add.image(656, 437, cardsArr[26] + 'sen');
    // var kitchen = this.add.image(378, 437, cardsArr[27] + 'sen');
    // var mother = this.add.image(95, 482, cardsArr[28] + 'sen');
    // var father = this.add.image(179, 482, cardsArr[29] + 'sen');
    // var boy = this.add.image(248, 482, cardsArr[30] + 'sen');
    // var girl = this.add.image(306, 482, cardsArr[31] + 'sen');
    // var child = this.add.image(370, 482, cardsArr[32] + 'sen');
    // var woman = this.add.image(448, 482, cardsArr[33] + 'sen');
    // var house = this.add.image(539, 482, cardsArr[34] + 'sen');
    // var cinema = this.add.image(621, 482, cardsArr[35] + 'sen');

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

    const newScrollButton = (text, words) => {
      return this.add.text(0, 0, text, {
        color: '#000000',
        font: '40px Mukta'
      })
      .setInteractive()
      .on('pointerup', () => {
        reminderText.alpha = 0;
        for (var image of imageList) {
          if (image.y != 200 && !words.includes(image.texture.key.slice(0, -3))) {
            image.alpha = 0;
          } else {
            image.alpha = 1;
          }
        }
      })
    };

    this.add
      .text(295, 143, 'Drag & drop words to form new sentences!', {
        font: '28px Mukta',
        color: '#479D76'
      })
      .setOrigin(0.5);

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

    const sceneScroll = this.rexUI.add.scrollablePanel({
      x: 150,
      y: 406,
      width: 200,
      height: 200,
      scrollMode: 0,

      panel: {
        child: this.rexUI.add.fixWidthSizer({
          orientation: 0,
          align: 'center',
          space: { item: 200, line: 10 }
        }),

        mask: {
            padding: 1,
        }
      },

      slider: {
        track: this.add.line(0, 0, 0, 0, 0, 100, '0x000000'),
        thumb: this.add.circle(0, 0, 15, '0x754F37')
      },

      space: {
        top: 10,
        bottom: 10,
        panel: 15
      },
    }).layout();

    sceneScroll.getElement('panel')
      .add(newScrollButton('Home', homeWords))
      .add(newScrollButton('Family', familyWords))
      // .add(newScrollButton('Greetings'))
      .add(newScrollButton('Town', townWords))
      .add(newScrollButton('Restaurant', restaurantWords))
      .add(newScrollButton('Synthesis', synthesisWords));
    sceneScroll.layout();

    // Reminder text
    const reminderText = this.add
      .text(506, 406, 'Choose a scene on the left to get started.', {
        font: '20px Mukta',
        color: '#479D76'
      }).setOrigin(0.5);

    let buttonsEffect = (button, name) => {
      button.alpha = 0;
      button.setInteractive();
      this.input.setDraggable(button);
      button.on('pointerover', function () {
        button.setTint(0x44ff44);
      });
      button.on('pointerout', function () {
        button.clearTint();
      });
      button.on('drag', (pointer, dragX, dragY) => { 
        if (!this.sys.game.device.os.desktop) { // Fix scrolling on mobile
          this.input.manager.touch.capture = true;
        }

        button.x = dragX;
        button.y = dragY;
      });
      button.on('dragend', (pointer, dragX, dragY, dropped) => {
        if (!this.sys.game.device.os.desktop) {
          this.input.manager.touch.capture = false;
        }
        
        if (button.y < 270) {
          if (button.x-button.width/2 < 52) {
            button.x = button.width/2 + 52;
          } else if (button.x+button.width/2 > 658) {
            button.x = -button.width/2 + 658;
          }
          button.y = 200;
          insertButton(name, button, wordArry);
          // console.log(wordArry);
        } else if (button.y >= 270) {
          removeButton(name, wordArry);
          // console.log(wordArry);
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

    for (var i = 0; i < imageList.length; i++) {
      buttonsEffect(imageList[i], imageList[i].texture.key.slice(0, -3));
    }
    // buttonsEffect(today, cardsArr[0]);
    // buttonsEffect(thismorning, cardsArr[1]);
    // buttonsEffect(tomorrow, cardsArr[2]);
    // buttonsEffect(thisevening, cardsArr[3]);
    // buttonsEffect(yesterday, cardsArr[4]);
    // buttonsEffect(and, cardsArr[5]);
    // buttonsEffect(pleasepassthe, cardsArr[6]);
    // buttonsEffect(where, cardsArr[7]);
    // buttonsEffect(who, cardsArr[8]);
    // buttonsEffect(iwillgo, cardsArr[9]);
    // buttonsEffect(iwent, cardsArr[10]);
    // buttonsEffect(iwilleat, cardsArr[11]);
    // buttonsEffect(cafe, cardsArr[12]);
    // buttonsEffect(apples, cardsArr[13]);
    // buttonsEffect(burger, cardsArr[14]);
    // buttonsEffect(coffee, cardsArr[15]);
    // buttonsEffect(dessert, cardsArr[16]);
    // buttonsEffect(eggs, cardsArr[17]);
    // buttonsEffect(fish, cardsArr[18]);
    // buttonsEffect(dog, cardsArr[19]);
    // buttonsEffect(nightclub, cardsArr[20]);
    // buttonsEffect(tipi, cardsArr[21]);
    // buttonsEffect(store, cardsArr[22]);
    // buttonsEffect(window, cardsArr[23]);
    // buttonsEffect(bathroom, cardsArr[24]);
    // buttonsEffect(car, cardsArr[25]);
    // buttonsEffect(elevator, cardsArr[26]);
    // buttonsEffect(kitchen, cardsArr[27]);
    // buttonsEffect(mother, cardsArr[28]);
    // buttonsEffect(father, cardsArr[29]);
    // buttonsEffect(boy, cardsArr[30]);
    // buttonsEffect(girl, cardsArr[31]);
    // buttonsEffect(child, cardsArr[32]);
    // buttonsEffect(woman, cardsArr[33]);
    // buttonsEffect(house, cardsArr[34]);
    // buttonsEffect(cinema, cardsArr[35]);
    mediaEffect(mediaButtons);
  }
}
