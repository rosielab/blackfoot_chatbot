import Phaser from 'phaser';

import { scene_dict, current_test, scenes, scores } from './util.js';

export default class TestScene extends Phaser.Scene {
  constructor() {
    super('test');
  }

  preload() {
    // Preload audio for all words in the current test
    Object.keys(scene_dict).forEach((sound) => {
      this.load.audio(sound, '../assets/sounds/' + sound.replace("?", "_") + '.wav');
    });

    this.load.image('testBackground', '../assets/images/TestScene/quiz.png');

    this.load.image('back', '../assets/images/TestScene/back-b.png');
    this.load.image('back1', '../assets/images/TestScene/back-b-rollover.png');
    this.load.image('speaker_off', '../assets/images/TestScene/play-b.png');
    this.load.image('speaker_on', '../assets/images/TestScene/play-b-rollover.png');
    this.load.image('textInput', '../assets/images/TestScene/input-box.png');
    this.load.image('submit', '../assets/images/TestScene/submit-b.png');
    this.load.image('submit1', '../assets/images/TestScene/submit-b-rollover.png');
  }

  create() {
    Object.keys(scene_dict).forEach((sound) => {
      this.sound.add(sound);
    });
    this.background = this.add.image(400, 300, 'testBackground');
    const back = this.add.image(53, 548, 'back');
    const back1 = this.add.image(53, 548, 'back1');
    const speaker_off = this.add.image(400, 365, 'speaker_off');
    const speaker_on = this.add.image(400, 365, 'speaker_on');
    const textInput = this.add.image(328, 461, 'textInput');
    const submit = this.add.image(675, 461, 'submit');
    const submit1 = this.add.image(675, 461, 'submit1');

    var word_index = 1;
    var is_testing = false;
    var score = 0;

    function updateScoreCookie() {
      var score_cookie = "score=";
      for (var i = 0; i < scenes.length; i++) {
        score_cookie = score_cookie.concat(scores[scenes[i]].toString(16));
      }

      // set expiry date to 2 years
      const date = new Date();
      date.setFullYear(date.getFullYear() + 2);
      score_cookie = score_cookie.concat("; expires=" + date.toUTCString());
      document.cookie = score_cookie;
    }

    let backToMenu = () => {
      this.scene.start('menu');
    };

    let isSceneOpen = (scene) => {
      return this.scene.isActive(scene);
    }

    // Main function to process submitted guess
    function processGuess() {
      guess.setText(guess.text.trim()); // Prevent blank input or extra whitespace
      if (guess.text != '' && !is_testing) {
        is_testing = true;
        var toTransitionTime = 0;
        message.setFontSize(60);

        // Fix misalignment from text edit plugin
        guess.x += 2;
        guess.y += 4;

        // TODO: Use regex to fiter out special characters
        if (guess.text.toLowerCase() === currentWord) {
          score++;
          score_text.setText('Score ' + score + '/10');
          scores[current_test.scene] = Math.max(scores[current_test.scene], score);
          updateScoreCookie();

          message.setText('Correct!');
          message.setColor('#20a31c');
          toTransitionTime = 1250;
        } else {
          // TODO: capitalise letter I (very minor bug)
          message.setText("Sorry, it's " + currentWord);
          toTransitionTime = 1750; // Wait longer to help with memorisation
        }

        setTimeout(() => {
          for (var i = 50; i <= 500; i += 50) {
            setTimeout(() => {
              message.alpha -= 0.1;
            }, i);
          }
        }, toTransitionTime);
        setTimeout(() => {
          if (isSceneOpen('test')) { // stop processing if the user exited
            message.setColor('#754F37');
            for (var i = 50; i <= 500; i += 50) {
              setTimeout(() => {
                message.alpha += 0.1;
              }, i);
            }
            if (word_index < 10) { // test another word
              word_index++;
              var previousWord = currentWord;
  
              // Prevent testing the same word back-to-back unless dictionary only has 1 word
              while (currentWord === previousWord && Object.keys(scene_dict).length > 1) {
                currentWord = getRandomWord(scene_dict);
              }
              message.setText(
                'What is ' + scene_dict[currentWord][0].toLowerCase().replace("?", "") + '?'
              );
  
              // Prevent larger words going off-screen
              // TODO: Dynamically shrink text, initial scaling
              if (scene_dict[currentWord][0].length > 16) {
                message.setFontSize(50);
              }

              guess.setText('');
              progress_text.setText('Word ' + word_index + ' of 10');
  
              is_testing = false;
  
              // Reset misalignment fix
              guess.x -= 2;
              guess.y -= 4;
  
              startGuess(); // repeat for the next word
            } else {
              message.setText('You got ' + score + '/10. Congrats!');
              setTimeout(() => {
                for (var i = 50; i <= 500; i += 50) {
                  setTimeout(() => {
                    message.alpha -= 0.1;
                  }, i);
                }
              }, 3250);
              setTimeout(backToMenu, 4000);
            }
          }
        }, toTransitionTime + 500);
      }
    }

    // Function to process text input
    var startGuess = () => {
      if (!is_testing) { // keep text box open unless guess was submitted
        this.rexUI.edit(guess, {}, function () {
          startGuess();
        });
      }
    }

    // choose a random word from dictionary
    function getRandomWord(dict) {
      const keys = Object.keys(dict);
      return keys[Math.floor(Math.random() * keys.length)];
    }

    // Submit guess on Enter keypress
    this.input.keyboard.on('keydown-ENTER', function () { processGuess(); });

    var currentWord = getRandomWord(scene_dict);

    var progress_text = this.add
      .text(110, 182, 'Word ' + word_index + ' of 10', {
        font: '21px Mukta',
        color: '#479D76',
      })
      .setOrigin(0.5);
  
    var score_text = this.add
      .text(692, 182, 'Score ' + score + '/10', {
        font: '21px Mukta',
        color: '#479D76',
      })
      .setOrigin(0.5);

    var message = this.add
      .text(400, 264, 'What is ' + scene_dict[currentWord][0].toLowerCase().replace("?", "") + '?', {
        font: '60px Mukta',
        color: '#754F37',
      })
      .setOrigin(0.5);

    var guess = this.add
      .text(328, 461, '', {
        font: '40px Mukta',
        fill: '#000000',
      })
      .setOrigin(0.5)
      .setFixedSize(520, 50)
      .setInteractive()
      .on('pointerdown', () => {
        startGuess();
      });

    const addButtons = (button1, button2) => {
      const newButtons = this.rexUI.add.buttons({
        orientation: 0,
        buttons: [button1, button2],
        expand: false,
        align: undefined,
        click: {
          mode: 'pointerup',
          clickInterval: 100,
        },
      });
      return newButtons;
    }

    const initButtons = (buttons, click_function) => {
      buttons
        .on('button.click', click_function)
        .on('button.over', () => {
          buttons.hideButton(0);
          buttons.showButton(1);
        })
        .on('button.out', () => {
          buttons.hideButton(1);
          buttons.showButton(0);
        });
        buttons.hideButton(1);
    }

    var audioButtons = addButtons(speaker_off, speaker_on);
    var backButtons = addButtons(back, back1);
    var submitButtons = addButtons(submit, submit1);

    initButtons(audioButtons, () => {
      this.sound.play(currentWord);
    });
    initButtons(backButtons, () => {
      this.scene.start('menu');
    });
    initButtons(submitButtons, () => {
      processGuess();
    });

    // Initialise guessing function
    startGuess();
  }

  update() {}
}