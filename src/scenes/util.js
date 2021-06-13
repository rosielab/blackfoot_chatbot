/*
All global variables for TestScene, ScoresScene, PreTestScenes, etc. are declared here.
*/

/*
Important: List all currently used scenes in lowercase
Order of scenes determines order of scores in ScoresScene
-Keep "all" scene at the end for now
*/
const scenes = ['town', 'restaurant', 'home', 'family', 'greetings', 'all'];

// Init dictionaries
const full_dict = require('../assets/all_words_translation.json');
const scene_dict = new Object();

// Init scores
const scores = new Object();
for (var scene of scenes) {
  scores[scene] = 0;
}

// Init current testing scene
const current_test = {
  scene: 'all',
};

// used for TestScene & PreTestScenes
export { scene_dict };
export { current_test };
// used for TestScene & ScoresScene
export { scores };
// used for ScoresScene
export { scenes };
// used for PreTestScenes
export { full_dict };
