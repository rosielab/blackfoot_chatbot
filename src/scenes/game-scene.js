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

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }
   
    preload () {
		this.load.audio('apple', '../assets/apples.wav');

    }
    
    create () {             
        // set background color, so the sky is not black    
        // this.cameras.main.setBackgroundColor('#2889d4');
        // this.physics.world.bounds.width = width;
        // this.physics.world.bounds.height = height;
		this.sound.add('apple')
        const helloButton = this.add.text(100, 100, 'apple', { fill: '#0f0' });
        helloButton.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() =>{
            this.sound.play('apple');
        })
    }

    update () {
    }

}

export default GameScene;
