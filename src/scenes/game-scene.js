import Phaser from 'phaser';

// const width = window.innerWidth < 1300 ? 1325: window.innerWidth;
// const height = window.innerHeight;
// // set container height
// document.querySelector("#canvas-container").style.height = height+'px';

// // Game variables
// let player;
// let food;
// let bombs;
// let platforms;
// let cursors;
// let score = 0;
// let gameOver = false;
// let scoreText, gameOverText;
// let trophy;
// let gameText, music;

var dictionary = { "coffee":"Iitapsiksikimmii", "cinema":"Aisaksittoo", "store":"Itaohpomoapii" };

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }
	
    preload () {
		Object.keys(dictionary).forEach((sound) => {
			this.load.audio(sound, '../assets/' + sound + '.wav');
		});
		//this.load.image('background', '../assets/restaurant.jpg');
    }
    
    create () {             
		// var background = this.add.image(313, 313, 'background');
        // this.physics.world.bounds.width = width;
        // this.physics.world.bounds.height = height;

		Object.keys(dictionary).forEach((sound) => {
			this.sound.add(sound);
		});

        // set background color, so the sky is not black   
        this.cameras.main.setBackgroundColor('#7b9ded');

		// three learn buttons for demonstration
        const helloButton = this.add.text(300, 100, 'Coffee', { font: 'bold 16px Helvetica', fill: '#e6edf2' }).setOrigin(0.5);
        helloButton.setInteractive()
        .on('pointerdown', () => {
            this.sound.play('coffee');
        })

		this.add.text(200, 100, 'Cinema', { font: 'bold 16px Helvetica', fill: '#e6edf2' }).setOrigin(0.5).setInteractive()
        .on('pointerdown', () => {
            this.sound.play('cinema');
        });

		this.add.text(400, 100, 'Store', { font: 'bold 16px Helvetica', fill: '#e6edf2' }).setOrigin(0.5).setInteractive()
        .on('pointerdown', () => {
            this.sound.play('store');
        });

		// choose a random word from dictionary
		var keys = Object.keys(dictionary);
		var randomWord = keys[Math.floor(Math.random() * keys.length)];
		
		var message = this.add.text(400, 275, "What is " + dictionary[randomWord].toLowerCase() + "?", {
			font: 'bold 36px Helvetica'
		}).setOrigin(0.5);
		
		var guess = this.add.text(400, 350, 'Click here to guess...', { font: '30px Helvetica', fill: '#e6edf2' }).setOrigin(0.5);

		this.add.text(400, 450, "Or, type 'stop' to end testing.", { font: '18px Helvetica' }).setOrigin(0.5);

		var tested = 0;
		guess.setInteractive().on('pointerdown', () => {
			if (tested == 0) {
				var editor = this.rexUI.edit(guess, guess, function(guess) {
					if (guess.text != "stop" && guess.text != "Click here to guess...") {
						if (guess.text == randomWord) {
							message.setText("Correct!");
						} else {
							message.setText("Sorry, it's " + randomWord);
						}
						tested = 1;
						setTimeout( () => {
							message.setText(message.text + ".");
						}, 600);
						setTimeout( () => {
							message.setText(message.text + ".");
						}, 1300);
						setTimeout( () => {
							randomWord = keys[Math.floor(Math.random() * keys.length)];
							message.setText("What is " + dictionary[randomWord].toLowerCase() + "?");
							guess.setText("Click here to guess...");
							tested = 0;
						}, 2000);
					} else if (guess.text == "stop") {
						tested = 1;
						message.setText("Okay. :(");
					}
				});
			}
		})
    }

    update () {
    }

}

export default GameScene;
