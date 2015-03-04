var TopDownGame = TopDownGame || {};

//loading the game assets
TopDownGame.Preload = function(){};

TopDownGame.Preload.prototype = 
{
  preload: function() 
  {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.tilemap('level2', 'assets/tilemaps/level2.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles-1', 'assets/images/tiles-1.png');
    this.load.image('greencup', 'assets/images/whitecell.png');
    this.load.image('player', 'assets/images/invader.png');
    this.load.image('browndoor', 'assets/images/Exit.png');
    
  },
  create: function() {
    this.state.start('Game');
  }
  };

/*
        {
         "height":128,
         "image":"levelBack.png",
         "name":"Background",
         "opacity":1,
         "type":"imagelayer",
         "visible":true,
         "width":48,
         "x":0,
         "y":0
        }, 
*/
