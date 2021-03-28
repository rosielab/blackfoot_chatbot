import Phaser from 'phaser';

export default class ScentenceScene extends Phaser.Scene {
  constructor() {
    super('scentence');
  }

  preload() {
    this.load.image(
      'sentenceBackground',
      '../assets/images/sentenceBackground.png'
    );

    this.load.image('today', '../assets/images/today.png');

    this.load.image('Iwilleat', '../assets/images/Iwilleat.png');
    this.load.image('apple', '../assets/images/apple.png');
  }

  create() {
    this.background = this.add.image(400, 300, 'sentenceBackground');
    var today = this.add.image(200, 142, 'today');
    var Iwilleat = this.add.image(200, 216, 'Iwilleat');
    var apple = this.add.image(200, 290, 'apple');

    let buttonsEffect = (button) => {
      button.setInteractive();
      this.input.setDraggable(button);
      button.on('pointerover', function () {
        button.setTint(0x44ff44);
      });
      button.on('pointerout', function () {
        button.clearTint();
      });

      this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        if (gameObject.y <= 392) {
          gameObject.y = dragY;
        }
      });
    };

    buttonsEffect(today);
    buttonsEffect(Iwilleat);
    buttonsEffect(apple);
  }
}
