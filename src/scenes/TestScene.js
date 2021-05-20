import Phaser from 'phaser';

import { scene_dict as dictionary } from './PreTestScene.js';
import { current_test } from './PreTestScene.js';
import { scores } from './PreTestScene.js';

export default class TestScene extends Phaser.Scene {
  constructor() {
    super('test');
  }

  preload() {
    Object.keys(dictionary).forEach((sound) => {
      this.load.audio(sound, '../assets/sounds/' + sound.replace("?", "_") + '.wav');
    });

    this.load.image('back', '../assets/images/back.png');
    this.load.image('back1', '../assets/images/back2.png');
    this.load.image('speaker_off', '../assets/images/speaker_off.png');
    this.load.image('speaker_on', '../assets/images/speaker_on.png');
  }

  create() {
    Object.keys(dictionary).forEach((sound) => {
      this.sound.add(sound);
    });

    const back = this.add.image(63, 56, 'back');
    const back1 = this.add.image(63, 56, 'back1');
    const speaker_off = this.add.image(510, 451, 'speaker_off');
    const speaker_on = this.add.image(510, 451, 'speaker_on');

    this.cameras.main.setBackgroundColor('#90cae0');

    var word_index = 1;
    var is_testing = false;
    var score = 0;

    // Main function to process guessing and text updates
    var startGuess = () => {
      if (!is_testing) {
        this.rexUI.edit(guess, guess, function () {
          if (guess.text == "") {
            guess.setText('Click here to guess...');
          } else if (guess.text != 'Click here to guess...') {
            is_testing = true;

            if (guess.text.toLowerCase() == randomWord) {
              score++;
              message.setText('Correct!');
              score_text.setText('Current Score: ' + score + '/10');
              scores[current_test.scene] = Math.max(scores[current_test.scene], score);
            } else {
              message.setText("Sorry, it's " + randomWord);
            }

            setTimeout(() => {
              message.setText(message.text + '.');
            }, 750);
            setTimeout(() => {
              message.setText(message.text + '.');
            }, 1500);
            setTimeout(() => {
              if (word_index < 10) {
                word_index++;
                var previous_word = randomWord;

                // Prevent testing the same word back-to-back unless dictionary only has 1 word
                while (randomWord === previous_word && keys.length > 1) {
                  randomWord = keys[Math.floor(Math.random() * keys.length)];
                }
                message.setText(
                  'What is ' + dictionary[randomWord][0].toLowerCase().replace("?", "") + '?'
                );
                guess.setText('Click here to guess...');
                progress_text.setText('Word ' + word_index + ' of 10');

                is_testing = false;
                startGuess(); // repeat for the next word
              } else {
                message.setText('You got ' + score + '/10. Congrats!');
                setTimeout(backToMenu, 4000);
              }
            }, 2250);
          }
        });
      }
    }

    let backToMenu = () => {
      this.scene.start('menu');
    };

    // choose a random word from dictionary
    var keys = Object.keys(dictionary);
    var randomWord = keys[Math.floor(Math.random() * keys.length)];

    var progress_text = this.add
      .text(400, 115, 'Word ' + word_index + ' of 10', {
        font: '24px Roboto',
      })
      .setOrigin(0.5);
  
    var score_text = this.add
      .text(400, 140, 'Current Score: ' + score + '/10', {
        font: '18px Roboto',
      })
      .setOrigin(0.5);

    var message = this.add
      .text(400, 260, 'What is ' + dictionary[randomWord][0].toLowerCase().replace("?", "") + '?', {
        font: 'bold 40px Helvetica',
      })
      .setOrigin(0.5);

    var guess = this.add
      .text(400, 340, 'Click here to guess...', {
        font: '35px Helvetica',
        fill: '#e6edf2',
      })
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerdown', () => {
        startGuess();
      });

    this.add
      .text(400, 450, 'Click to play the audio:', {
        font: '18px Helvetica',
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

    audioButtons.hideButton(1);
    backButtons.hideButton(1);

    // Initialise guessing function
    startGuess();
  }

  update() {}
}