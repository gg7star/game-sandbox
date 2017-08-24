var BootState = {
  init: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },
  preload: function() {
    this.load.image('preloadBar', 'assets/virtualpet/bar.png');
    this.load.image('logo', 'assets/virtualpet/logo.png');
  },
  create: function() {
    this.game.stage.backgroundColor = '#fff';

    this.state.start('PreloadState');
  }
};