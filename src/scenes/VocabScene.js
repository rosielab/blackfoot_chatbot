import Phaser from 'phaser';

export default class VocabScene extends Phaser.Scene {
  constructor() {
    super('vocab');
  }

  init(data) {
    window.scene = data.scene;
  }

  preload() {
    var path =
    '../assets/images/LearnScene/Learn-all-tiles/unpressed-state/png-files/';

    switch (window.scene) {
      case 'home':
        this.load.image('card1', path + 'tile-bathroom-unpressed.png');
        this.load.image('card1_1', path + 'tile-bathroom-pressed.png');
        this.load.image('card2', path + 'tile-dog-unpressed.png');
        this.load.image('card2_1', path + 'tile-dog-pressed.png');
        this.load.image('card3', path + 'tile-car-unpressed.png');
        this.load.image('card3_1', path + 'tile-car-pressed.png');
        this.load.image('card4', path + 'tile-kitchen-unpressed.png');
        this.load.image('card4_1', path + 'tile-kitchen-pressed.png');
        this.load.image('card5', path + 'tile-window-unpressed.png');
        this.load.image('card5_1', path + 'tile-window-pressed.png');
        this.load.image('card6', path + 'tile-elevator-unpressed.png');
        this.load.image('card6_1', path + 'tile-elevator-pressed.png');
        this.load.audio('card1_wav', '../assets/sounds/bathroom.wav');
        this.load.audio('card2_wav', '../assets/sounds/dog.wav');
        this.load.audio('card3_wav', '../assets/sounds/car.wav');
        this.load.audio('card4_wav', '../assets/sounds/kitchen.wav');
        this.load.audio('card5_wav', '../assets/sounds/window.wav');
        this.load.audio('card6_wav', '../assets/sounds/elevator.wav');
        break;
      case 'family':
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
        this.load.audio('card1_wav', '../assets/sounds/mother.wav');
        this.load.audio('card2_wav', '../assets/sounds/father.wav');
        this.load.audio('card3_wav', '../assets/sounds/boy.wav');
        this.load.audio('card4_wav', '../assets/sounds/girl.wav');
        this.load.audio('card5_wav', '../assets/sounds/child.wav');
        this.load.audio('card6_wav', '../assets/sounds/woman.wav');
        break;
      case 'greetings':
        this.load.image('card1', path + 'tile-hellofriend-unpressed.png');
        this.load.image('card1_1', path + 'tile-hellofriend-pressed.png');
        this.load.image('card2', path + 'tile-howareyou-unpressed.png');
        this.load.image('card2_1', path + 'tile-howareyou-pressed.png');
        this.load.image('card3', path + 'tile-hello-unpressed.png');
        this.load.image('card3_1', path + 'tile-hello-pressed.png');
        this.load.image('card4', path + 'tile-nottoobad-unpressed.png');
        this.load.image('card4_1', path + 'tile-nottoobad-pressed.png');
        this.load.image('card5', path + 'tile-yes-unpressed.png');
        this.load.image('card5_1', path + 'tile-yes-pressed.png');
        this.load.image('card6', path + 'tile-no-unpressed.png');
        this.load.image('card6_1', path + 'tile-no-pressed.png');
        this.load.audio('card1_wav', '../assets/sounds/hello friend.wav');
        this.load.audio('card2_wav', '../assets/sounds/how are you_.wav');
        this.load.audio('card3_wav', '../assets/sounds/hello.wav');
        this.load.audio('card4_wav', '../assets/sounds/not too bad.wav');
        this.load.audio('card5_wav', '../assets/sounds/yes.wav');
        this.load.audio('card6_wav', '../assets/sounds/no.wav');
        break;
      case 'town':
        this.load.image('card1', path + 'tile-cafe-unpressed.png');
        this.load.image('card1_1', path + 'tile-cafe-pressed.png');
        this.load.image('card2', path + 'tile-house-unpressed.png');
        this.load.image('card2_1', path + 'tile-house-pressed.png');
        this.load.image('card3', path + 'tile-tipi-unpressed.png');
        this.load.image('card3_1', path + 'tile-tipi-pressed.png');
        this.load.image('card4', path + 'tile-cinema-unpressed.png');
        this.load.image('card4_1', path + 'tile-cinema-pressed.png');
        this.load.image('card5', path + 'tile-nightclub-unpressed.png');
        this.load.image('card5_1', path + 'tile-nightclub-pressed.png');
        this.load.image('card6', path + 'tile-store-unpressed.png');
        this.load.image('card6_1', path + 'tile-store-pressed.png');
        this.load.audio('card1_wav', '../assets/sounds/cafe.wav');
        this.load.audio('card2_wav', '../assets/sounds/house.wav');
        this.load.audio('card3_wav', '../assets/sounds/tipi.wav');
        this.load.audio('card4_wav', '../assets/sounds/cinema.wav');
        this.load.audio('card5_wav', '../assets/sounds/night club.wav');
        this.load.audio('card6_wav', '../assets/sounds/store.wav');
        break;
      case 'restaurant':
        this.load.image('card1', path + 'tile-apples-unpressed.png');
        this.load.image('card1_1', path + 'tile-apples-pressed.png');
        this.load.image('card2', path + 'tile-burger-unpressed.png');
        this.load.image('card2_1', path + 'tile-burger-pressed.png');
        this.load.image('card3', path + 'tile-coffee-unpressed.png');
        this.load.image('card3_1', path + 'tile-coffee-pressed.png');
        this.load.image('card4', path + 'tile-dessert-unpressed.png');
        this.load.image('card4_1', path + 'tile-dessert-pressed.png');
        this.load.image('card5', path + 'tile-eggs-unpressed.png');
        this.load.image('card5_1', path + 'tile-eggs-pressed.png');
        this.load.image('card6', path + 'tile-fish-unpressed.png');
        this.load.image('card6_1', path + 'tile-fish-pressed.png');
        this.load.audio('card1_wav', '../assets/sounds/apples.wav');
        this.load.audio('card2_wav', '../assets/sounds/burger.wav');
        this.load.audio('card3_wav', '../assets/sounds/coffee.wav');
        this.load.audio('card4_wav', '../assets/sounds/dessert.wav');
        this.load.audio('card5_wav', '../assets/sounds/eggs.wav');
        this.load.audio('card6_wav', '../assets/sounds/fish.wav');
        break;
    }

    this.load.image(
      'vocabBackground',
      '../assets/images/LearnScene/Learn-' + window.scene + '.png'
    );
    this.load.image(
      'back',
      '../assets/images/LearnScene/learn-main-page-buttons/regular-state/back-b.png'
    );
    this.load.image(
      'back1',
      '../assets/images/LearnScene/learn-main-page-buttons/rollover-state/back-b-rollover.png'
    );
  }

  create() {
    this.background = this.add.image(400, 300, 'vocabBackground');

    const back = this.add.image(53, 548, 'back');
    const back1 = this.add.image(53, 548, 'back1');
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

    const addButtons2 = (main, rollover, rollover2) => {
      const newButtons = this.rexUI.add.buttons({
        orientation: 0,
        buttons: [main, rollover, rollover2],
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

      buttons.on('button.click', () => {
        // Clear all assets from cache for learning another scene
        this.textures.remove('vocabBackground');
        this.textures.remove('card1');
        this.textures.remove('card1_1');
        this.textures.remove('card2');
        this.textures.remove('card2_1');
        this.textures.remove('card3');
        this.textures.remove('card3_1');
        this.textures.remove('card4');
        this.textures.remove('card4_1');
        this.textures.remove('card5');
        this.textures.remove('card5_1');
        this.textures.remove('card6');
        this.textures.remove('card6_1');
        this.cache.audio.remove('card1_wav');
        this.cache.audio.remove('card2_wav');
        this.cache.audio.remove('card3_wav');
        this.cache.audio.remove('card4_wav');
        this.cache.audio.remove('card5_wav');
        this.cache.audio.remove('card6_wav');
        this.scene.start(scene);
      })

      buttons.on('button.over', () => {
        buttons.hideButton(0);
        buttons.showButton(1);
      });

      buttons.on('button.out', () => {
        buttons.hideButton(1);
        buttons.showButton(0);
      })
    };

    const initLearnButtons = (buttons, sound) => {
      buttons.hideButton(1);
      buttons.hideButton(2);
      var toggled = false;

      buttons.on('button.click', () => {
        buttons.setButtonEnable(false);
        this.sound.play(sound);
        if (!toggled) {
          buttons.showButton(2);
          toggled = true;
        } else {
            buttons.hideButton(2);
            if (!this.sys.game.device.os.desktop) {
                buttons.hideButton(1);
                buttons.showButton(0);
            }
            toggled = false;
        }
        setTimeout(() => { // prevent double-tap on mobile
          buttons.setButtonEnable(true);
        }, 50);
      });

      buttons.on('button.over', (button, index, pointer, event) => { // show Blackfoot while hovering
        if (pointer.isDown || this.sys.game.device.os.desktop) {
          buttons.hideButton(0);
          buttons.showButton(1);
        }
      });

      buttons.on('button.out', (button, index, pointer, event) => {
        // only trigger when pointer is actually outside the button
        if (pointer.x <= button.x-button.width/2 || pointer.x >= button.x+button.width/2 || pointer.y <= button.y-button.height/2 || pointer.y >= button.y+button.height/2) {
          if (!toggled) {
            buttons.hideButton(1);
            buttons.hideButton(2);
            buttons.showButton(0);
          } else if (toggled) {
            buttons.hideButton(1);
            buttons.showButton(2);
          }
        }
      })
    };

    const backButtons = addButtons(back, back1);
    const card1Buttons = addButtons2(card1, card1_1, card1_2);
    const card2Buttons = addButtons2(card2, card2_1, card2_2);
    const card3Buttons = addButtons2(card3, card3_1, card3_2);
    const card4Buttons = addButtons2(card4, card4_1, card4_2);
    const card5Buttons = addButtons2(card5, card5_1, card5_2);
    const card6Buttons = addButtons2(card6, card6_1, card6_2);

    initSceneButtons(backButtons, 'move');
    initLearnButtons(card1Buttons, 'card1_wav');
    initLearnButtons(card2Buttons, 'card2_wav');
    initLearnButtons(card3Buttons, 'card3_wav');
    initLearnButtons(card4Buttons, 'card4_wav');
    initLearnButtons(card5Buttons, 'card5_wav');
    initLearnButtons(card6Buttons, 'card6_wav');
  }
}
