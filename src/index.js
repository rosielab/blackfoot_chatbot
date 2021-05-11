import Phaser from 'phaser';
import PreTestScene from './scenes/PreTestScene';
import PreTestScene2 from './scenes/PreTestScene2';
import TestScene from './scenes/TestScene';
import HomeScene from './scenes/HomeScene';
import MenuScene from './scenes/MenuScene';
import MoveScene from './scenes/MoveScene';
import ScentenceScene from './scenes/ScentenceScene';
import ScoresScene from './scenes/ScoresScene';

import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import DragPlugin from 'phaser3-rex-plugins/plugins/drag-plugin.js';

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
      debug: false,
    },
  },
  dom: {
    createContainer: true,
  },
  plugins: {
    scene: [
      {
        key: 'rexUI',
        plugin: RexUIPlugin,
        mapping: 'rexUI',
      },
      {
        key: 'rexDrag',
        plugin: DragPlugin,
        start: true,
      },
    ],
  },
  scene: [
    MenuScene,
    MoveScene,
    HomeScene,
    PreTestScene,
    PreTestScene2,
    TestScene,
    ScentenceScene,
    ScoresScene,
  ],
};

export default new Phaser.Game(config);
