import Phaser from 'phaser';

export default class HomeScene extends Phaser.Scene {
  constructor() {
    super('home');
  }
  preload() {

    this.load.image('homeBackground', '../assets/images/background.png');
    this.load.image('header', '../assets/images/header1.png');
    this.load.image('move', '../assets/images/move.png');
    this.load.image('move1', '../assets/images/move2.png');
    this.load.image('bathroom0', '../assets/images/bathroom0.png');
    this.load.image('bathroom1', '../assets/images/bathroom1.png');
    this.load.image('bathroom2', '../assets/images/bathroom2_1.png');
    this.load.image('car0', '../assets/images/car0.png');
    this.load.image('car1', '../assets/images/car1.png');
    this.load.image('car2', '../assets/images/car2_1.png');
    this.load.image('dog0', '../assets/images/dog0.png');
    this.load.image('dog1', '../assets/images/dog1.png');
    this.load.image('dog2', '../assets/images/dog2_1.png');
    this.load.image('door0', '../assets/images/door0.png');
    this.load.image('door1', '../assets/images/door1.png');
    this.load.image('door2', '../assets/images/door2_1.png');
    this.load.image('kitchen0', '../assets/images/kitchen0.png');
    this.load.image('kitchen1', '../assets/images/kitchen1.png');
    this.load.image('kitchen2', '../assets/images/kitchen2_1.png');
    this.load.image('window0', '../assets/images/window0.png');
    this.load.image('window1', '../assets/images/window1.png');
    this.load.image('window2', '../assets/images/window2_1.png');

    this.load.audio('bathroomwav', '../assets/sounds/bathroom.wav');
    this.load.audio('carwav', '../assets/sounds/car.wav');
    this.load.audio('dogwav', '../assets/sounds/dog.wav');
    this.load.audio('doorwav', '../assets/sounds/door.wav');
    this.load.audio('kitchenwav', '../assets/sounds/kitchen.wav');
    this.load.audio('windowwav', '../assets/sounds/window.wav');
  }

  create() {
    this.sound.add('bathroomwav');
    this.background = this.add.image(400, 300, 'homeBackground');
    const header = this.add.image(382, 576, 'header');
    const back = this.add.image(63, 56, 'back');
    const back1 = this.add.image(63, 56, 'back1');
    const move = this.add.image(739, 52, 'move');
    const move1 = this.add.image(739, 52, 'move1');
    const bathroom0 = this.add.image(175, 190, 'bathroom0');
    const bathroom1 = this.add.image(175, 190, 'bathroom1');
    const bathroom2 = this.add.image(175, 190, 'bathroom2');
    const car0 = this.add.image(621, 190, 'car0');
    const car1 = this.add.image(621, 190, 'car1');
    const car2 = this.add.image(621, 190, 'car2');
    const dog0 = this.add.image(621, 428, 'dog0');
    const dog1 = this.add.image(621, 428, 'dog1');
    const dog2 = this.add.image(621, 428, 'dog2');
    const door0 = this.add.image(175, 428, 'door0');
    const door1 = this.add.image(175, 428, 'door1');
    const door2 = this.add.image(175, 428, 'door2');
    const kitchen0 = this.add.image(400, 190, 'kitchen0');
    const kitchen1 = this.add.image(400, 190, 'kitchen1');
    const kitchen2 = this.add.image(400, 190, 'kitchen2');
    const window0 = this.add.image(400, 428, 'window0');
    const window1 = this.add.image(400, 428, 'window1');
    const window2 = this.add.image(400, 428, 'window2');

    var backButtons = this.rexUI.add.buttons({
      orientation: 0,
      // Elements
      buttons: [back, back1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var moveButtons = this.rexUI.add.buttons({
      orientation: 0,
      // Elements
      buttons: [move, move1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var bathroomButtons = this.rexUI.add.buttons({
      orientation: 0,
      // Elements
      buttons: [bathroom0, bathroom1, bathroom2],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var carButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [car0, car1, car2],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var dogButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [dog0, dog1, dog2],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var doorButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [door0, door1, door2],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var kitchenButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [kitchen0, kitchen1, kitchen2],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    var windowButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [window0, window1, window2],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

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
        buttons.hideButton(1);
        buttons.showButton(0);
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

    moveButtons.hideButton(1);
    backButtons.hideButton(1);
    bathroomButtons.hideButton(1);
    bathroomButtons.hideButton(2);
    carButtons.hideButton(1);
    carButtons.hideButton(2);
    dogButtons.hideButton(1);
    dogButtons.hideButton(2);
    doorButtons.hideButton(1);
    doorButtons.hideButton(2);
    kitchenButtons.hideButton(1);
    kitchenButtons.hideButton(2);
    windowButtons.hideButton(1);
    windowButtons.hideButton(2);

    var bathroomTemp = false;
    var carTemp = false;
    var dogTemp = false;
    var doorTemp = false;
    var kitchenTemp = false;
    var windowTemp = false;

    buttonsEffect(bathroomButtons, bathroomTemp, 'bathroomwav');
    buttonsEffect(carButtons, carTemp, 'carwav');
    buttonsEffect(dogButtons, dogTemp, 'dogwav');
    buttonsEffect(doorButtons, doorTemp, 'doorwav');
    buttonsEffect(kitchenButtons, kitchenTemp, 'kitchenwav');
    buttonsEffect(windowButtons, windowTemp, 'windowwav');

    buttonsEffect2(backButtons, 'menu');
    buttonsEffect2(moveButtons, 'move');
  }
}
