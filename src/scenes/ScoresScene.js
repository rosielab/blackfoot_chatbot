import Phaser from 'phaser';

import { scenes } from './util.js';

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

    /*
      These two functions need to be redone once more scenes are added
    */
    function scrollDownScores(page) {
      if (page*5 + 1 < scenes.length && page >= 0) {
        scenesText.setText('');
        scoresText.setText('');
        for (var i = page*5; i < page*5 + 5; i++) {
          if (i + 1 < scenes.length) {
            // only append the "all" score to the end
            scenesText.setText(scenesText.text +
            scenes[i][0].toUpperCase() +
            scenes[i].slice(1) +
            ':\n');

            scoresText.setText(scoresText.text + localStorage.getItem(scenes[i]) + '/10\n')
          } else {
            scenesText.setText(scenesText.text + '\n');
            scoresText.setText(scoresText.text + '\n');
          }
        }
        scenesText.setText(scenesText.text + 'All:');
        scoresText.setText(scoresText.text + localStorage.getItem('all') + '/10');
        return ++page;
      } else {
        return Math.max(page, 1);
      }
    }

    function scrollUpScores(page) {
      return scrollDownScores(page-2);
    }

    // remove old score cookie
    document.cookie = "score= ;expires=Thu, 01 Jan 1970 00:00:00 GMT";

    function getScore(scene) {
      return parseInt(localStorage.getItem(scene));
    }

    var currentPage = 1;

    // const top_scores_text = this.add
    //   .text(
    //     400,
    //     295,
    //     'Town: ' +
    //       scores.town +
    //       '/10\n' +
    //       'Restaurant: ' +
    //       scores.restaurant +
    //       '/10\n' +
    //       'Home: ' +
    //       scores.home +
    //       '/10\n' +
    //       'Family: ' +
    //       scores.family +
    //       '/10\n' +
    //       'Greetings: ' +
    //       scores.greetings +
    //       '/10\n' +
    //       'All: ' +
    //       scores.all +
    //       '/10',
    //     {
    //       font: '50px Mukta',
    //       color: '#479D76',
    //       align: 'right',
    //     }
    //   )
    //   .setOrigin(0.5);

    // right-aligned for now as text is hard to read left-aligned
    const scenesText = this.add
      .text(340, 295, 'Home:\n'
                    + 'Family:\n'
                    + 'Greetings:\n'
                    + 'Town:\n'
                    + 'Restaurant:\n'
                    + 'All:', 
      {
        font: '50px Mukta',
        color: '#479D76',
        align: 'right',
        fixedWidth: '260',
      })
      .setOrigin(0.5);

    const scoresText = this.add
      .text(540, 295, getScore('home') + '/10\n'
                    + getScore('family') + '/10\n'
                    + getScore('greetings') + '/10\n'
                    + getScore('town') + '/10\n'
                    + getScore('restaurant') + '/10\n'
                    + getScore('all') + '/10',
      {
        font: '50px Mukta',
        color: '#479D76',
        align: 'right',
        fixedWidth: '115',
      })
      .setOrigin(0.5);

    // Will be updated once more scenes are added
    // if (scenes.length > 6) {
    //   // Up arrow (placeholders)
    //   this.add
    //     .text(590, 130, '/\\', {
    //       font: '30px Mukta',
    //       color: '#000000',
    //     })
    //     .setOrigin(0.5)
    //     .setInteractive()
    //     .on('pointerdown', () => {
    //       currentPage = scrollUpScores(currentPage);
    //     });

    //   // Down arrow
    //   this.add
    //     .text(590, 460, '\\/', {
    //       font: '30px Mukta',
    //       color: '#000000',
    //     })
    //     .setOrigin(0.5)
    //     .setInteractive()
    //     .on('pointerdown', () => {
    //       currentPage = scrollDownScores(currentPage);
    //     });
    // }

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
        if (reset_scores.text === 'Are you sure?') {
          for (const scene of scenes) {
            localStorage.setItem(scene, 0);
          }
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
