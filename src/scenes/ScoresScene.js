import Phaser from 'phaser';

import { scenes } from './util.js';

export default class ScoresScene extends Phaser.Scene {
  constructor() {
    super('scores');
  }

  preload() {
    // Loading screen
    const loadingScreen = this.add.image(400, 300, 'loadingScreen');
    const loadingText = this.add.text(400, 225, 'Loading...', {
      font: '80px Mukta',
      color: '#754F37'
    })
    .setOrigin(0.5);
    const loadingGif = this.add.sprite(400, 365, 'loadingGif', 'loadingGif.png');
    this.anims.create({ key: 'loading', frames: this.anims.generateFrameNames('loadingGif', {
      start: 0, end: 8,
      prefix: 'frame_', suffix: '_delay-0.01s.png'
    }), frameRate: 12, repeat: -1 });
    loadingGif.anims.play('loading');
    this.load.on('complete', () => {
      loadingScreen.destroy();
      loadingText.destroy();
      loadingGif.destroy();
    });

    this.load.image(
      'scoreBackground',
      '../assets/images/ScoresScene/Scores.png'
    );

    this.load.image('back', '../assets/images/ScoresScene/back-b.png');
    this.load.image(
      'back1',
      '../assets/images/ScoresScene/back-b-rollover.png'
    );
    this.load.image('trophy', '../assets/images/ScoresScene/trophy.png');
    this.load.image('upArrow', '../assets/images/ScoresScene/upArrow.png');
  }

  create() {
    this.background = this.add.image(400, 300, 'scoreBackground');

    const back = this.add.image(53, 548, 'back');
    const back1 = this.add.image(53, 548, 'back1');

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

            if (localStorage.getItem(scenes[i]) === '10') {
              scoresText.setText(scoresText.text + '[color=goldenrod]' + localStorage.getItem(scenes[i]) + '/10[/color]\n');
            } else {
              scoresText.setText(scoresText.text + localStorage.getItem(scenes[i]) + '/10\n');
            }
          } else {
            scenesText.setText(scenesText.text + '\n');
            scoresText.setText(scoresText.text + '\n');
          }
        }
        scenesText.setText(scenesText.text + 'All:');

        if (localStorage.getItem('all') === '10') {
          scoresText.setText(scoresText.text + '[color=goldenrod]' + localStorage.getItem('all') + '/10[/color]');
        } else {
          scoresText.setText(scoresText.text + localStorage.getItem('all') + '/10');
        }
        refreshTrophies(page+1);
        return ++page;
      } else {
        return Math.max(page, 1);
      }
    }

    function scrollUpScores(page) {
      return scrollDownScores(page-2);
    }

    function getScore(scene) {
      return parseInt(localStorage.getItem(scene));
    }

    var currentPage = 1;
    const trophyGroup = this.add.group();

    // right-aligned for now as text is hard to read left-aligned
    const scenesText = this.add
      .text(326, 295, 'Home:\n'
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
      .rexBBCodeText(526, 295, '',
      {
        fontSize: '50px',
        fontFamily: 'Mukta',
        color: '#479D76',
        align: 'right',
        fixedWidth: '115',
      })
      .setOrigin(0.5);

    const refreshTrophies = (page) => {
      trophyGroup.clear(true);
      for (var i = page-1; i < Math.min(page*5, scenes.length); i++) {
        if (localStorage.getItem(scenes[i]) == 10) {
          trophyGroup.add(this.add.image(597, 160+54*i, 'trophy'));
        }
      }
      if (localStorage.getItem('all') == 10) {
        trophyGroup.add(this.add.image(597, 430, 'trophy'));
      }
    }

    scrollDownScores(0);

    // Will be updated once more scenes are added
    if (scenes.length > 6) {
      // Up arrow (placeholders)
      const upArrow = this.add
        .image(596, 126, 'upArrow')
        .setInteractive()
        .on('pointerdown', () => {
          currentPage = scrollUpScores(currentPage);
        });

      // Down arrow
      const downArrow = this.add
        .image(596, 464, 'upArrow')
        .setInteractive()
        .on('pointerdown', () => {
          currentPage = scrollDownScores(currentPage);
        });
      downArrow.angle = 180;
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
