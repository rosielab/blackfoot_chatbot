import Phaser from 'phaser';
import GameScene from './scenes/game-scene';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin'

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
  dom: {
	  createContainer: true
  },
  plugins: {
  	scene: [
  		{
  			key: 'rexUI',
  			plugin: RexUIPlugin,
   			mapping: 'rexUI'
  		}
	]
  },
  scene: [ GameScene ]
};

const game = new Phaser.Game(config);


