var PreloadState = {
  //load the game assets before the game starts
  preload: function() {

    this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.logo.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadBar');
    this.preloadBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('backyard', 'assets/virtualpet/backyard.png');
    this.load.image('apple', 'assets/virtualpet/apple.png');
    this.load.image('candy', 'assets/virtualpet/candy.png');
    this.load.image('rotate', 'assets/virtualpet/rotate.png');
    this.load.image('toy', 'assets/virtualpet/rubber_duck.png');
    this.load.image('arrow', 'assets/virtualpet/arrow.png');
    this.load.spritesheet('pet', 'assets/virtualpet/pet.png', 97, 83, 5, 1, 1);
  },
  create: function() {
    this.state.start('HomeState');
  }
};