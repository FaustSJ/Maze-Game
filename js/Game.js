var TopDownGame = TopDownGame || {};

//title screen
TopDownGame.Game = function(){};

TopDownGame.Game.prototype = 
{
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
  create: function() 
  {
    this.map = this.game.add.tilemap('level2');
    //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
    this.map.addTilesetImage('tiles', 'tiles-1');
    //create layer
    this.backgroundlayer = this.map.createLayer('backgroundLayer');
    this.blockedLayer = this.map.createLayer('blockedLayer');
    //collision on blockedLayer
    this.map.setCollisionBetween(1, 100, true, 'blockedLayer');
    //resizes the game world to match the layer dimensions
    this.blockedLayer.resizeWorld();
    
    this.blockedLayer.debug = true;
    
    this.createEnemyx();
    this.createEnemyy();
    this.createDoors(); 
    
    //create player
    var result = this.findObjectsByType('playerStart', this.map, 'objectsLayer')
    //we know there is just one result
    this.player = this.game.add.sprite(result[0].x, result[0].y, 'player');
    this.game.physics.arcade.enable(this.player);
    //the camera will follow the player in the world
    this.game.camera.follow(this.player);
    //move player with cursor keys
    this.cursors = this.game.input.keyboard.createCursorKeys();
    
  },
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/  
  createEnemyx: function() 
  {
    //create items
    this.enemyx = this.game.add.group();
    this.enemyx.enableBody = true;
    var enemyx;    
    result = this.findObjectsByType('Enemyx', this.map, 'objectsLayer');
    result.forEach(function(element)
    	    {
    	    	    this.createFromTiledObject(element, this.enemyx);
            },	
    this);
  },
  createEnemyy: function() 
  {
    //create items
    this.enemyy = this.game.add.group();
    this.enemyy.enableBody = true;
    var enemyy;    
    result = this.findObjectsByType('Enemyy', this.map, 'objectsLayer');
    result.forEach(function(element)
    	    {
    	    	    this.createFromTiledObject(element, this.enemyy);
            },	
    this);
  },
  createDoors: function() 
  {
    //create doors
    this.doors = this.game.add.group();
    this.doors.enableBody = true;
    result = this.findObjectsByType('door', this.map, 'objectsLayer');

    result.forEach(function(element)
    	    {
    	    	    this.createFromTiledObject(element, this.doors);
    	    }, 
    this);
  },
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
  //find objects in a Tiled layer that containt a property called "type" equal to a certain value
  findObjectsByType: function(type, map, layer) 
  {
    var result = new Array();
    map.objects[layer].forEach(function(element)
      {
      	      if(element.properties.type === type) 
      	      {
      	      //Phaser uses top left, Tiled bottom left so we have to adjust the y position
      	      //also keep in mind that the cup images are a bit smaller than the tile which is 16x16
      	      //so they might not be placed in the exact pixel position as in Tiled
      	      	      element.y -= map.tileHeight;
      	      	      result.push(element);
      	      }      
      }
    );
    //returns an array of objects as they are represented in level2.json
    return result;
  },
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
  //create a sprite from an object
  createFromTiledObject: function(element, group) 
  {
    var sprite = group.create(element.x, element.y, element.properties.sprite);

      //copy all properties to the sprite
      Object.keys(element.properties).forEach(function(key)
      	      {
      		      sprite[key] = element.properties[key];
      	      }
      );
  },
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/  
  update: function() {
    //player movement
    this.player.body.velocity.y = 0;
    this.player.body.velocity.x = 0;

    if(this.cursors.up.isDown) 
    {
      this.player.body.velocity.y -= 50;
    }
    else if(this.cursors.down.isDown) 
    {
      this.player.body.velocity.y += 50;
    }
    if(this.cursors.left.isDown) 
    {
      this.player.body.velocity.x -= 50;
    }
    else if(this.cursors.right.isDown) 
    {
      this.player.body.velocity.x += 50;
    }
    
    //collision
    this.game.physics.arcade.collide(this.player, this.blockedLayer);
    this.game.physics.arcade.overlap(this.player, this.items, this.collect, null, this);
    this.game.physics.arcade.overlap(this.player, this.doors, this.enterDoor, null, this);
  },
  collect: function(player, collectable) 
  {
    console.log('yummy!');

    //remove sprite
    collectable.destroy();
  },
  enterDoor: function(player, door) 
  {
    console.log('entering door that will take you to '+door.targetTilemap+' on x:'+door.targetX+' and y:'+door.targetY);
  },
};

























