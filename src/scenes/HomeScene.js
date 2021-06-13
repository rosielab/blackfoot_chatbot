import Phaser from 'phaser';

export default class HomeScene extends Phaser.Scene {
  constructor() {
    super('home');
  }
  preload() {
    this.load.image(
      'homeBackground',
      '../assets/images/LearnScene/Learn-home.png'
    );
    var path =
      '../assets/images/LearnScene/Learn-all-tiles/unpressed-state/png-files/';
    this.load.image('car', path + 'tile-car-unpressed.png');
    this.load.image('car1', path + 'tile-car-pressed.png');
    this.load.image('dog', path + 'tile-dog-unpressed.png');
    this.load.image('dog1', path + 'tile-dog-pressed.png');
    this.load.image('bathroom', path + 'tile-bathroom-unpressed.png');
    this.load.image('bathroom1', path + 'tile-bathroom-pressed.png');
    this.load.image('kitchen', path + 'tile-kitchen-unpressed.png');
    this.load.image('kitchen1', path + 'tile-kitchen-pressed.png');
    this.load.image('window', path + 'tile-window-unpressed.png');
    this.load.image('window1', path + 'tile-window-pressed.png');
    this.load.image('elevator', path + 'tile-elevator-unpressed.png');
    this.load.image('elevator1', path + 'tile-elevator-pressed.png');

    this.load.image(
      'back',
      '../assets/images/LearnScene/learn-main-page-buttons/regular-state/back-b.png'
    );
    this.load.image(
      'back1',
      '../assets/images/LearnScene/learn-main-page-buttons/rollover-state/back-b-rollover.png'
    );
    this.load.audio('bathroomwav', '../assets/sounds/bathroom.wav');
    this.load.audio('carwav', '../assets/sounds/car.wav');
    this.load.audio('dogwav', '../assets/sounds/dog.wav');
    this.load.audio('kitchenwav', '../assets/sounds/kitchen.wav');
    this.load.audio('windowwav', '../assets/sounds/window.wav');
    this.load.audio('elevatorwav', '../assets/sounds/elevator.wav');
  }

  create() {
    this.background = this.add.image(400, 300, 'homeBackground');
    const back = this.add.image(53, 545, 'back');
    const back1 = this.add.image(53, 545, 'back1');
    const bathroom = this.add.image(180, 228, 'bathroom');
    const bathroom1 = this.add.image(180, 228, 'bathroom1');
    const bathroom2 = this.add.image(180, 228, 'bathroom1');
    const dog = this.add.image(407, 228, 'dog');
    const dog1 = this.add.image(407, 228, 'dog1');
    const dog2 = this.add.image(407, 228, 'dog1');
    const car = this.add.image(634, 228, 'car');
    const car1 = this.add.image(634, 228, 'car1');
    const car2 = this.add.image(634, 228, 'car1');
    const kitchen = this.add.image(180, 409, 'kitchen');
    const kitchen1 = this.add.image(180, 409, 'kitchen1');
    const kitchen2 = this.add.image(180, 409, 'kitchen1');
    const window = this.add.image(407, 409, 'window');
    const window1 = this.add.image(407, 409, 'window1');
    const window2 = this.add.image(407, 409, 'window1');
    const elevator = this.add.image(634, 409, 'elevator');
    const elevator1 = this.add.image(634, 409, 'elevator1');
    const elevator2 = this.add.image(634, 409, 'elevator1');

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
    var bathroomButtons = addButtons2(bathroom, bathroom1, bathroom2);
    var dogButtons = addButtons2(dog, dog1, dog2);
    var carButtons = addButtons2(car, car1, car2);
    var kitchenButtons = addButtons2(kitchen, kitchen1, kitchen2);
    var windowButtons = addButtons2(window, window1, window2);
    var elevatorButtons = addButtons2(elevator, elevator1, elevator2);

    backButtons.hideButton(1);
    bathroomButtons.hideButton(1);
    bathroomButtons.hideButton(2);
    dogButtons.hideButton(1);
    dogButtons.hideButton(2);
    carButtons.hideButton(1);
    carButtons.hideButton(2);
    kitchenButtons.hideButton(1);
    kitchenButtons.hideButton(2);
    windowButtons.hideButton(1);
    windowButtons.hideButton(2);
    elevatorButtons.hideButton(1);
    elevatorButtons.hideButton(2);

    var bathroomTemp = false;
    var dogTemp = false;
    var carTemp = false;
    var kitchenTemp = false;
    var windowTemp = false;
    var elevatorTemp = false;

    buttonsEffect(bathroomButtons, bathroomTemp, 'bathroomwav');
    buttonsEffect(windowButtons, windowTemp, 'windowwav');
    buttonsEffect(carButtons, carTemp, 'carwav');
    buttonsEffect(dogButtons, dogTemp, 'dogwav');
    buttonsEffect(elevatorButtons, elevatorTemp, 'elevatorwav');
    buttonsEffect(kitchenButtons, kitchenTemp, 'kitchenwav');

    buttonsEffect2(backButtons, 'move');
  }
}
