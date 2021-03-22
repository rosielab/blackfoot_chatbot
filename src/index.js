import Phaser from 'phaser';
import GameScene from './scenes/game-scene';

// const height = window.innerHeight;

const config = {
  type: Phaser.AUTO,
  pixelArt: false,
  roundPixels: false,
  width: 800,
  height: 600,
  parent: 'canvas-container',
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 },
          debug: false
      }
  },
  scene: [ GameScene ]
};

const game = new Phaser.Game(config);


