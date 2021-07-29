import Phaser from 'phaser';
import wordsToNumbers from 'words-to-numbers';

import { scene_dict, current_test, scenes } from './util.js';

export default class TestScene extends Phaser.Scene {
  constructor() {
    super('test');
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

    // Preload audio for all words in the current test
    Object.keys(scene_dict).forEach((sound) => {
      this.load.audio(
        sound,
        '../assets/sounds/' + sound.replace('?', '_') + '.wav'
      );
    });

    this.load.image('testBackground', '../assets/images/TestScene/Quiz.png');

    this.load.image('back', '../assets/images/TestScene/back-b.png');
    this.load.image('back1', '../assets/images/TestScene/back-b-rollover.png');
    this.load.image('speaker_off', '../assets/images/TestScene/play-b.png');
    this.load.image(
      'speaker_on',
      '../assets/images/TestScene/play-b-rollover.png'
    );
    this.load.image('textInput', '../assets/images/TestScene/input-box.png');
    this.load.image('submit', '../assets/images/TestScene/submit-b.png');
    this.load.image(
      'submit1',
      '../assets/images/TestScene/submit-b-rollover.png'
    );
  }

  create() {
    Object.keys(scene_dict).forEach((sound) => {
      this.sound.add(sound);
    });

    this.background = this.add.image(399, 300, 'testBackground');

    const back = this.add.image(53, 548, 'back');
    const back1 = this.add.image(53, 548, 'back1');
    const speaker_off = this.add.image(400, 365, 'speaker_off');
    const speaker_on = this.add.image(400, 365, 'speaker_on');
    const textInput = this.add.image(328, 461, 'textInput');
    const submit = this.add.image(675, 462, 'submit');
    const submit1 = this.add.image(675, 462, 'submit1');

    var word_index = 0;
    var is_testing = false;
    var score = 0;

    // Submit guess on Enter keypress
    this.input.keyboard.on('keydown-ENTER', function() {
      processGuess();
    });

    // Open input box on any keypress, if not testing
    this.input.keyboard.on('keydown', function() {
      if (!is_testing && !inputEditor.isOpened) {
        inputEditor = startGuess();
      }
    })

    let backToMenu = () => {
      this.scene.start('menu');
    };

    let isSceneOpen = (scene) => {
      return this.scene.isActive(scene);
    };

    let playAudio = (audio) => {
      this.sound.play(audio);
    };

    function getScore(scene) {
      return parseInt(localStorage.getItem(scene));
    }

    // choose a random word from dictionary
    function getRandomWord(dict) {
      const keys = Object.keys(dict);
      if (current_test.scene !== 'all') {
        return keys[Math.floor(Math.random() * keys.length)];
      } else {
        // Choose words equally between all scenes
        // Don't choose the 'all' scene
        const randomScene = scenes[Math.floor(Math.random() * (scenes.length-1))];
        let randomWord = keys[Math.floor(Math.random() * keys.length)];
        while (dict[randomWord][1] !== randomScene) {
          randomWord = keys[Math.floor(Math.random() * keys.length)];
        }
        return randomWord;
      }
    }
    
    // init current word
    var currentWord = getRandomWord(scene_dict);

    function isCorrectGuess(guess, actual) {
      // Allow number input (10 instead of ten, etc.)
      // For counting, time, money scenes
      if (!['counting', 'time', 'money'].includes(scene_dict[actual][1])) {
        return guess === actual;
      } else if (actual.split(' ').length !== 2 || actual.split(' ')[1] !== "o'clock") {
        return guess === actual || guess === wordsToNumbers(actual);
      } else {
        return [actual, 
                wordsToNumbers(actual), 
                actual.split(' ')[0], 
                wordsToNumbers(actual.split(' ')[0]), 
                actual.replace("'", ""), 
                actual.replace("'", " ")]
                .includes(guess);
      }
    }

    function nextWord() {
      // stop processing if the user exited
      if (isSceneOpen('test')) {
        var fadeTime = 500; // pass as parameter?
        guessPrompt.setColor('#754F37');
        for (var i = 10; i <= fadeTime; i += 10) {
          setTimeout(() => {
            guessPrompt.alpha += 0.02;
          }, i);
        }
        if (word_index < 10) {
          // test another word
          word_index++;
          var previousWord = currentWord;

          // Prevent testing the same word back-to-back unless dictionary only has 1 word
          while (
            currentWord === previousWord &&
            Object.keys(scene_dict).length > 1
          ) {
            currentWord = getRandomWord(scene_dict);
          }
          guessPrompt.setText(
            'What is ' +
              scene_dict[currentWord][0].toLowerCase().replace('?', '') +
              '?'
          );

          // Play the Blackfoot for the word
          playAudio(currentWord);

          // Prevent larger words going off-screen
          // TODO: Dynamically shrink text
          if (scene_dict[currentWord][0].length > 16) {
            guessPrompt.setFontSize(50);
          }

          guessInput.setText('');
          progress_text.setText('Word ' + word_index + ' of 10');

          is_testing = false;

          inputEditor = startGuess(); // repeat for the next word
        } else {
          guessPrompt.setText('You got ' + score + '/10. Congrats!');
          setTimeout(() => {
            for (var i = 10; i <= fadeTime; i += 10) {
              setTimeout(() => {
                guessPrompt.alpha -= 0.02;
              }, i);
            }
          }, 3250);
          setTimeout(backToMenu, 4000);
        }
      }
    }

    // Main function to process submitted guess
    function processGuess() {
      guessInput.setText(guessInput.text.trim()); // Prevent blank input or extra whitespace
      if (guessInput.text !== '' && !is_testing) {
        var toTransitionTime;
        var fadeTime = 500;
        is_testing = true;
        inputEditor.close(); // Prevent input after submitting
        
        guessPrompt.setFontSize(60);

        // TODO: Use regex to fiter out special characters
        if (isCorrectGuess(guessInput.text.toLowerCase(), currentWord)) {
          score++;
          score_text.setText('Score ' + score + '/10');
          localStorage.setItem(current_test.scene, Math.max(score, getScore(current_test.scene)).toString());

          guessPrompt.setText('Correct!');
          guessPrompt.setColor('#20a31c');
          toTransitionTime = 1250;
        } else {
          // TODO: capitalise letter I (very minor bug)
          guessPrompt.setText("Sorry, it's " + currentWord);

          // Play the Blackfoot and wait longer, to help with memorisation
          playAudio(currentWord);
          toTransitionTime = 1750;
        }

        setTimeout(() => {
          for (var i = 10; i <= fadeTime; i += 10) {
            setTimeout(() => {
              guessPrompt.alpha -= 0.02;
            }, i);
          }
        }, toTransitionTime);

        setTimeout(() => {
          nextWord();
        }, fadeTime + toTransitionTime);
      }
    }

    // Function to process text input
    var startGuess = () => {
      if (!is_testing) {
        // Reset misalignment fix
        guessInput.x -= 2;
        guessInput.y -= 4;

        // keep text box open unless guess was submitted
        const inputEditor = this.rexUI.edit(guessInput, {}, function () {
          // Fix misalignment from text edit plugin
          guessInput.x += 2;
          guessInput.y += 4;
        });
        return inputEditor;
      }
    };

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

    var guessPrompt = this.add
      .text(400, 264, '', {
        font: '60px Mukta',
        color: '#754F37',
      })
      .setOrigin(0.5);

    var guessInput = this.add
      .text(330, 466, '', {
        font: '40px Mukta',
        fill: '#000000',
      })
      .setOrigin(0.5)
      .setFixedSize(520, 50)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.sys.game.device.os.desktop) {
          startGuess();
        }
      })
      .on('pointerup', () => { // Fix buggy input on mobile
        if (!this.sys.game.device.os.desktop) {
          setTimeout(() => {
            startGuess();
          }, 50);
        }
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
    };

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
    };

    var audioButtons = addButtons(speaker_off, speaker_on);
    var backButtons = addButtons(back, back1);
    var submitButtons = addButtons(submit, submit1);

    if (!this.sys.game.device.os.desktop) {
      submitButtons = this.rexUI.add.buttons({
        orientation: 0,
        buttons: [submit, submit1],
        expand: false,
        align: undefined,
        click: {
          mode: 'pointerdown',
          clickInterval: 100,
        },
      });
    }

    initButtons(audioButtons, () => {
      playAudio(currentWord);
    });
    initButtons(backButtons, () => {
      this.scene.start('menu');
    });
    initButtons(submitButtons, () => {
      processGuess();
    });

    // Initialise guessing functions
    // setTimeout 0 to allow scene to load completely
    setTimeout(() => {
      nextWord();
    }, 0);
    var inputEditor = startGuess();
  }

  update() {}
}
