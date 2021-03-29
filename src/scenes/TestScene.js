import Phaser from 'phaser';

var dictionary = {
  bathroom: 'Makapoiyiss',
  kitchen: 'Itoiyo’soap',
  car: 'Aiksistomatomahka',
  door: 'Kitsim',
  window: 'Ksisstsikomstan',
  dog: 'Imitaa',
};

var scores = {
  family: 0,
  greetings: 0,
  home: 0,
  restaurant: 0,
  town: 0,
  all: 0,
};

// used for ScoresScene.js
export { scores };

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

    this.cameras.main.setBackgroundColor('#97cdf7');

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
            if (guess.text.toLowerCase() == randomWord) {
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
                var current_word = randomWord;
                // Prevent testing the same word back-to-back unless dictionary only has 1 word
                while (randomWord === current_word && keys.length > 1) {
                  randomWord = keys[Math.floor(Math.random() * keys.length)];
                }
                message.setText(
                  'What is ' + dictionary[randomWord].toLowerCase() + '?'
                );
                guess.setText('Click here to guess...');
                progress_text.setText('Word ' + word_index + ' of 10');
                tested = 0;
              } else {
                message.setText('You got ' + score + '/10. Congrats!');
                // currently hardcoded to home
                scores.home = Math.max(scores.home, score);
                setTimeout(backToMenu, 5000);
              }
            }, 2250);
          }
        });
      }
    });
  }

  update() {}
}
