import Phaser from 'phaser';

/*
  All global variables for TestScene, ScoresScene, PreTestScenes, etc. are declared here.
  TODO: Pass as data inside scene.start() instead
*/

/*
Important: List all currently testable scenes in lowercase
Order of scenes determines order of scores in ScoresScene
-Keep "all" scene at the end for now
*/
const scenes = ['home', 'family', 'greetings', 'town', 'restaurant', 'all'];

// Init dictionaries
const full_dict = require('../assets/all_words_translation.json');
const scene_dict = new Object();

// Init scores
for (const scene of scenes) {
  if (!localStorage.getItem(scene)) {
    localStorage.setItem(scene, 0);
  }
}

// Init current testing scene
const current_test = {
  scene: 'all',
};

// used for TestScene & PreTestScenes
export { scene_dict };
export { current_test };
// used for ScoresScene
export { scenes };
// used for PreTestScenes
export { full_dict };

export default class util extends Phaser.Scene {
  preload() {
    // Preload loading screen assets
    this.load.image('loadingScreen', '../assets/images/loadingBackground.png');
    this.load.multiatlas('loadingGif', '../assets/images/loadingGif/loadingGif.json', '../assets/images/loadingGif');

    // Allow sound to play while out of focus
    this.sound.pauseOnBlur = false;

    // Allow scrolling inside the chatbot on desktop and mobile
    this.input.mouse.preventDefaultWheel = false;
    if (!this.sys.game.device.os.desktop) {
      this.input.manager.touch.capture = false;
    }

    // Resize the canvas when switching from landscape/portrait
    this.scale.on('orientationchange', () => {
      this.scale.resize(Math.min(window.innerWidth, 800), 600);
    });

    // Disable right-click menu
    document.querySelector("#canvas-container > canvas").addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }

  create() {
    // Move to the main menu after changing settings
    this.scene.start('menu');
  }
}