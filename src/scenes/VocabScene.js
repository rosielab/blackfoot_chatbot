import Phaser from 'phaser';

export default class VocabScene extends Phaser.Scene {
  constructor() {
    super('vocab');
  }

  init(data) {
    window.scene = data.scene;
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
    const card1_r = this.add.image(180, 228, 'card1');
    const card1b = this.add.image(180, 228, 'card1_1');
    const card1b_r = this.add.image(180, 228, 'card1_1');
    const card2 = this.add.image(407, 228, 'card2');
    const card2_r = this.add.image(407, 228, 'card2');
    const card2b = this.add.image(407, 228, 'card2_1');
    const card2b_r = this.add.image(407, 228, 'card2_1');
    const card3 = this.add.image(634, 228, 'card3');
    const card3_r = this.add.image(634, 228, 'card3');
    const card3b = this.add.image(634, 228, 'card3_1');
    const card3b_r = this.add.image(634, 228, 'card3_1');
    const card4 = this.add.image(180, 409, 'card4');
    const card4_r = this.add.image(180, 409, 'card4');
    const card4b = this.add.image(180, 409, 'card4_1');
    const card4b_r = this.add.image(180, 409, 'card4_1');
    const card5 = this.add.image(407, 409, 'card5');
    const card5_r = this.add.image(407, 409, 'card5');
    const card5b = this.add.image(407, 409, 'card5_1');
    const card5b_r = this.add.image(407, 409, 'card5_1');
    const card6 = this.add.image(634, 409, 'card6');
    const card6_r = this.add.image(634, 409, 'card6');
    const card6b = this.add.image(634, 409, 'card6_1');
    const card6b_r = this.add.image(634, 409, 'card6_1');

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

    const addLearnButtons = (english, english_r, blackfoot, blackfoot_r) => {
      const newButtons = this.rexUI.add.buttons({
        orientation: 0,
        buttons: [english, english_r, blackfoot, blackfoot_r],
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
      buttons.hideButton(3);
      var toggled = false;

      buttons.on('button.click', () => {
        buttons.setButtonEnable(false);
        this.sound.play(sound);
        if (!toggled) {
          buttons.hideButton(0);
          buttons.hideButton(1);
          buttons.showButton(2);
          if (this.sys.game.device.os.desktop) {
            buttons.showButton(3);
          }
          toggled = true;
        } else {
            buttons.hideButton(2);
            buttons.hideButton(3);
            buttons.showButton(0);
            if (this.sys.game.device.os.desktop) {
              buttons.showButton(1);
            }
            toggled = false;
        }
        setTimeout(() => { // prevent double-tap on mobile
          buttons.setButtonEnable(true);
        }, 50);
      });

      buttons.on('button.over', (button, index, pointer, event) => { // show Blackfoot while hovering
        if (pointer.isDown || this.sys.game.device.os.desktop) {
          if (!toggled) {
            buttons.showButton(1);
          } else {
            buttons.showButton(3);
          }
        }
      });

      buttons.on('button.out', (button, index, pointer, event) => {
        // only trigger when pointer is actually outside the button
        if (pointer.x <= button.x-button.width/2 || pointer.x >= button.x+button.width/2 || pointer.y <= button.y-button.height/2 || pointer.y >= button.y+button.height/2) {
          if (!toggled) {
            buttons.hideButton(1);
          } else if (toggled) {
            buttons.hideButton(3);
          }
        }
      })
    };

    const backButtons = addButtons(back, back1);
    const card1Buttons = addLearnButtons(card1, card1_r, card1b, card1b_r);
    const card2Buttons = addLearnButtons(card2, card2_r, card2b, card2b_r);
    const card3Buttons = addLearnButtons(card3, card3_r, card3b, card3b_r);
    const card4Buttons = addLearnButtons(card4, card4_r, card4b, card4b_r);
    const card5Buttons = addLearnButtons(card5, card5_r, card5b, card5b_r);
    const card6Buttons = addLearnButtons(card6, card6_r, card6b, card6b_r);

    initSceneButtons(backButtons, 'move');
    initLearnButtons(card1Buttons, 'card1_wav');
    initLearnButtons(card2Buttons, 'card2_wav');
    initLearnButtons(card3Buttons, 'card3_wav');
    initLearnButtons(card4Buttons, 'card4_wav');
    initLearnButtons(card5Buttons, 'card5_wav');
    initLearnButtons(card6Buttons, 'card6_wav');
  }
}
