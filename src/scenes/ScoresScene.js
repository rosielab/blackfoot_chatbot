import Phaser from 'phaser';

import { scores, scenes } from './util.js';

export default class ScoresScene extends Phaser.Scene {
  constructor() {
    super('scores');
  }

  preload() {
    this.load.image('back', '../assets/images/back.png');
    this.load.image('back1', '../assets/images/back2.png');
    this.load.image('scores_background', '../assets/images/scores_background.png');
  }

  create() {
    const back = this.add.image(63, 56, 'back');
    const back1 = this.add.image(63, 56, 'back1');
    this.add.image(400, 350, 'scores_background');

    this.cameras.main.setBackgroundColor('#97cdf7');

    function scrollDownScores(scenes_index, scores_txt) {
      if (scenes_index + 5 < scenes.length-1) {
        var scoresText = "";
        for (var i = scenes_index + 5; i < scenes_index + 10; i++) {
          if (i < scenes.length-1) { // only append the "all" score to the end
            scoresText = scoresText.concat(scenes[i][0].toUpperCase() + scenes[i].slice(1) + ': ' + scores[scenes[i]] + '/10\n');
          } else {
            scoresText = scoresText.concat('\n');
          }
        }
        scoresText = scoresText.concat('All: ' + scores.all + '/10');
        scores_txt.setText(scoresText);
        return scenes_index + 5;
      }
      return scenes_index;
    }

    function scrollUpScores(scenes_index, scores_txt) {
      if (scenes_index - 5 >= 0) {
        return scrollDownScores(scenes_index - 10, scores_txt);
      }
      return scenes_index;
    }

    function checkCookie(cookie, all_cookies) {
      const split_cookies = all_cookies.split(";");
      for (var i = 0; i < split_cookies.length; i++) {
        if (split_cookies[i].includes(cookie + "=")) {
          return i;
        }
      }
      return -1;
    }

    // Check if scores have been saved previously
    const cookie_index = checkCookie("score", document.cookie);
    if (cookie_index != -1) {
      const cookie_score = document.cookie.split(";")[cookie_index].trim().slice(6);
      if (cookie_score.length == scenes.length) {
        for (var i = 0; i < cookie_score.length; i++) {
          scores[scenes[i]] = parseInt(cookie_score[i], 16);
        }
      } else {
        console.log("Error: Saved score may be outdated. Will not be used!");
      }
    }

    var scenes_index = 0;

    this.add
      .text(400, 130, 'High Scores', {
        font: 'bold 55px Cambria',
        color: '#000000',
      })
      .setOrigin(0.5);

    const top_scores_text = this.add
      .text(400, 350, 'Town: ' + scores.town + '/10\n'
                    + 'Restaurant: ' + scores.restaurant + '/10\n'
                    + 'Home: ' + scores.home + '/10\n'
                    + 'Family: ' + scores.family + '/10\n'
                    + 'Greetings: ' + scores.greetings + '/10\n'
                    + 'All: ' + scores.all + '/10', {
        font: '36px Trebuchet MS',
        color: '#000000',
        align: 'right',
      })
      .setOrigin(0.5);

    // Up arrow (placeholders)
    this.add
      .text(565, 230, '/\\', {
        font: '30px Trebuchet MS',
        color: '#000000'
      })
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerdown', () => {
        scenes_index = scrollUpScores(scenes_index, top_scores_text);
      });
    
    // Down arrow
    this.add
      .text(565, 470, '\\/', {
        font: '30px Trebuchet MS',
        color: '#000000'
      })
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerdown', () => {
        scenes_index = scrollDownScores(scenes_index, top_scores_text);
      });

    var backButtons = this.rexUI.add.buttons({
      orientation: 0,
      buttons: [back, back1],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerup',
        clickInterval: 100,
      },
    });

    backButtons.hideButton(1);

    backButtons
      .on('button.click', () => {
        this.scene.start('menu');
      })
      .on('button.over', () => {
        backButtons.hideButton(0);
        backButtons.showButton(1);
      })
      .on('button.out', () => {
        backButtons.hideButton(1);
        backButtons.showButton(0);
      });
  }

  update() {}
}
