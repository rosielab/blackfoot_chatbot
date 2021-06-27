import Phaser from 'phaser';

import PreTestScene from './scenes/PreTestScene';
import PreTestScene2 from './scenes/PreTestScene2';
import TestScene from './scenes/TestScene';
import HomeScene from './scenes/HomeScene';
import FamilyScene from './scenes/FamilyScene';
import GreetingsScene from './scenes/GreetingsScene';
import TownScene from './scenes/TownScene';
import RestaurantScene from './scenes/RestaurantScene';
import MenuScene from './scenes/MenuScene';
import MoveScene from './scenes/MoveScene';
import SentenceScene from './scenes/SentenceScene';
import ScoresScene from './scenes/ScoresScene';
import ExitScene from './scenes/ExitScene';
import PreLearnScene from './scenes/PreLearnScene';
import GrammarScene from './scenes/GrammarScene';

import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import DragPlugin from 'phaser3-rex-plugins/plugins/drag-plugin.js';

const config = {
  type: Phaser.AUTO,
  pixelArt: true,
  roundPixels: false,
  scale: {
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
  },
  width: 800,
  height: 600,
  parent: 'canvas-container',
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
      {
        key: 'rexDrag',
        plugin: UIPlugin,
        mapping: 'rexUI',
      },
    ],
  },
  scene: [
    MenuScene,
    MoveScene,
    HomeScene,
    FamilyScene,
    RestaurantScene,
    TownScene,
    GreetingsScene,
    PreTestScene,
    PreTestScene2,
    TestScene,
    SentenceScene,
    ScoresScene,
    ExitScene,
    PreLearnScene,
    GrammarScene
  ],
};

export default new Phaser.Game(config);
