var TopDownGame = TopDownGame || {};

//loading the game assets
TopDownGame.Preload = function(){};

TopDownGame.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.tilemap('level1', 'assets/level2.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('gameTiles', 'assets/tiles-1.png');
    this.load.image('greencup', 'assets/whitecell.png');
    this.load.image('player', 'assets/invader.png');
    this.load.image('browndoor', 'assets/browndoor.png');
    
  },
  create: function() {
    this.state.start('Game');
  }
};
