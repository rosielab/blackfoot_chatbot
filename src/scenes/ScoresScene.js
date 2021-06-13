import Phaser from 'phaser';

import { scores, scenes } from './util.js';

export default class ScoresScene extends Phaser.Scene {
  constructor() {
    super('scores');
  }

  preload() {
    this.load.image(
      'scoreBackground',
      '../assets/images/ScoresScene/Scores.png'
    );

    this.load.image('back', '../assets/images/ScoresScene/back-b.png');
    this.load.image(
      'back1',
      '../assets/images/ScoresScene/back-b-rollover.png'
    );
  }

  create() {
    this.background = this.add.image(400, 300, 'scoreBackground');

    const back = this.add.image(53, 548, 'back');
    const back1 = this.add.image(53, 548, 'back1');

    function scrollDownScores(scenes_index, scores_txt) {
      if (scenes_index + 5 < scenes.length - 1) {
        var scoresText = '';
        for (var i = scenes_index + 5; i < scenes_index + 10; i++) {
          if (i < scenes.length - 1) {
            // only append the "all" score to the end
            scoresText = scoresText.concat(
              scenes[i][0].toUpperCase() +
                scenes[i].slice(1) +
                ': ' +
                scores[scenes[i]] +
                '/10\n'
            );
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

    function checkCookie(cookie) {
      const split_cookies = document.cookie.split(';');
      for (var i = 0; i < split_cookies.length; i++) {
        if (split_cookies[i].includes(cookie + '=')) {
          return i;
        }
      }
      return -1;
    }

    function updateScoreCookie() {
      var score_cookie = 'score=';
      for (var i = 0; i < scenes.length; i++) {
        score_cookie = score_cookie.concat(scores[scenes[i]].toString(16));
      }

      // set expiry date to 2 years
      const date = new Date();
      date.setFullYear(date.getFullYear() + 2);
      score_cookie = score_cookie.concat('; expires=' + date.toUTCString());
      document.cookie = score_cookie;
    }

    // Check if scores have been saved previously
    const cookie_index = checkCookie('score');
    if (cookie_index != -1) {
      const cookie_score = document.cookie
        .split(';')
        [cookie_index].trim()
        .slice(6);
      if (cookie_score.length === scenes.length) {
        for (var i = 0; i < cookie_score.length; i++) {
          scores[scenes[i]] = parseInt(cookie_score[i], 16);
        }
      } else {
        console.log('Error: Saved score(s) may be outdated. Will not be used!');
      }
    }

    var scenes_index = 0;

    const top_scores_text = this.add
      .text(
        400,
        295,
        'Town: ' +
          scores.town +
          '/10\n' +
          'Restaurant: ' +
          scores.restaurant +
          '/10\n' +
          'Home: ' +
          scores.home +
          '/10\n' +
          'Family: ' +
          scores.family +
          '/10\n' +
          'Greetings: ' +
          scores.greetings +
          '/10\n' +
          'All: ' +
          scores.all +
          '/10',
        {
          font: '50px Mukta',
          color: '#479D76',
          align: 'right',
        }
      )
      .setOrigin(0.5);

    if (scenes.length > 6) {
      // Up arrow (placeholders)
      this.add
        .text(590, 130, '/\\', {
          font: '30px Trebuchet MS',
          color: '#000000',
        })
        .setOrigin(0.5)
        .setInteractive()
        .on('pointerdown', () => {
          scenes_index = scrollUpScores(scenes_index, top_scores_text);
        });

      // Down arrow
      this.add
        .text(590, 460, '\\/', {
          font: '30px Trebuchet MS',
          color: '#000000',
        })
        .setOrigin(0.5)
        .setInteractive()
        .on('pointerdown', () => {
          scenes_index = scrollDownScores(scenes_index, top_scores_text);
        });
    }

    const reset_scores = this.add
      .text(400, 540, 'Reset Scores', {
        // placeholder (will be a button)
        font: '35px Trebuchet MS',
        color: '#000000',
      })
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerup', () => {
        reset_scores.setColor('#000000');
        if (reset_scores.text == 'Are you sure?') {
          for (var scene in scores) {
            scores[scene] = 0;
          }
          updateScoreCookie();
          this.scene.start('scores');
        } else {
          reset_scores.setText('Are you sure?');
        }
      })
      .on('pointerout', () => {
        reset_scores.setText('Reset Scores');
        reset_scores.setColor('#000000');
      })
      .on('pointerdown', () => {
        reset_scores.setColor('#FFFFFF');
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
