import Phaser from 'phaser';

var dictionary = {
  cinema: 'Aisaksittoo',
  store: 'Itaohpomoapii',
  //night club: "Itaisimmioapii",
  cafe: 'Itoiyo’pii',
  house: 'Naapoiyiss',
  tipi: 'Niitoiyiss',
  movie: 'aisaiksisttoo',
};

export default class TestScene extends Phaser.Scene {
  constructor() {
    super('test');
  }

  preload() {
    Object.keys(dictionary).forEach((sound) => {
      this.load.audio(sound, '../assets/sounds/' + sound + '.wav');
    });

    this.load.image('speaker_off', '../assets/images/speaker_off.png');
    this.load.image('speaker_on', '../assets/images/speaker_on.png');
  }

  create() {
    Object.keys(dictionary).forEach((sound) => {
      this.sound.add(sound);
    });

    const speaker_off = this.add.image(535, 450, 'speaker_off');
    const speaker_on = this.add.image(535, 450, 'speaker_on');

    this.cameras.main.setBackgroundColor('#7b9ded');

    // three learn buttons for demonstration
    // const helloButton = this.add
    //   .text(300, 100, 'Coffee', {
    //     font: 'bold 16px Helvetica',
    //     fill: '#e6edf2',
    //   })
    //   .setOrigin(0.5);
    // helloButton.setInteractive().on('pointerdown', () => {
    //   this.sound.play('coffee');
    // });

    // this.add
    //   .text(200, 100, 'Cinema', {
    //     font: 'bold 16px Helvetica',
    //     fill: '#e6edf2',
    //   })
    //   .setOrigin(0.5)
    //   .setInteractive()
    //   .on('pointerdown', () => {
    //     this.sound.play('cinema');
    //   });

    // this.add
    //   .text(400, 100, 'Store', { font: 'bold 16px Helvetica', fill: '#e6edf2' })
    //   .setOrigin(0.5)
    //   .setInteractive()
    //   .on('pointerdown', () => {
    //     this.sound.play('store');
    //   });

    var word_index = 1;
    var tested = 0;
    var score = 0;

    // choose a random word from dictionary
    var keys = Object.keys(dictionary);
    var randomWord = keys[Math.floor(Math.random() * keys.length)];

    var message = this.add
      .text(400, 275, 'What is ' + dictionary[randomWord].toLowerCase() + '?', {
        font: 'bold 36px Helvetica',
      })
      .setOrigin(0.5);

    var guess = this.add
      .text(400, 350, 'Click here to guess...', {
        font: '30px Helvetica',
        fill: '#e6edf2',
      })
      .setOrigin(0.5);

    this.add
      .text(400, 450, 'Click here to play the audio:', {
        font: '18px Helvetica',
      })
      .setOrigin(0.5);

    var progress_text = this.add
      .text(400, 150, 'Word ' + word_index + ' of 10', {
        font: '24px Roboto',
      })
      .setOrigin(0.5);

    var audioButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [speaker_off, speaker_on],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    audioButtons
      .on('button.click', () => {
        this.sound.play(randomWord);
      })
      .on('button.over', () => {
        audioButtons.hideButton(0);
        audioButtons.showButton(1);
      })
      .on('button.out', () => {
        audioButtons.hideButton(1);
        audioButtons.showButton(0);
      });

    audioButtons.hideButton(1);

    let backToMenu = () => {
      this.scene.start('menu');
    };

    guess.setInteractive().on('pointerdown', () => {
      if (tested == 0) {
        var editor = this.rexUI.edit(guess, guess, function (guess) {
          if (guess.text != 'Click here to guess...') {
            if (guess.text == randomWord) {
              message.setText('Correct!');
              score++;
            } else {
              message.setText("Sorry, it's " + randomWord);
            }
            tested = 1;
            setTimeout(() => {
              message.setText(message.text + '.');
            }, 750);
            setTimeout(() => {
              message.setText(message.text + '.');
            }, 1500);
            setTimeout(() => {
              if (word_index < 10) {
                word_index++;
                randomWord = keys[Math.floor(Math.random() * keys.length)];
                message.setText(
                  'What is ' + dictionary[randomWord].toLowerCase() + '?'
                );
                guess.setText('Click here to guess...');
                progress_text.setText('Word ' + word_index + ' of 10');
                tested = 0;
              } else {
                message.setText('You got ' + score + '/10. Congrats!');
                setTimeout(backToMenu, 5);
              }
            }, 2250);
          }
        });
      }
    });
  }

  update() {}
}
