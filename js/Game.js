var TopDownGame = TopDownGame || {};

//title screen
TopDownGame.Game = function(){};

TopDownGame.Game.prototype = 
{
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
  create: function() 
  {
    this.map = this.game.add.tilemap('level1');
    //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
    this.map.addTilesetImage('tiles', 'gameTiles');
    //create layer
    this.backgroundlayer = this.map.createLayer('backgroundLayer');
    this.blockedLayer = this.map.createLayer('blockedLayer');
    //collision on blockedLayer
    this.map.setCollisionBetween(1, 100, true, 'blockedLayer');
    //resizes the game world to match the layer dimensions
    this.backgroundlayer.resizeWorld();
    
    this.createItems();
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
  createItems: function() 
  {
    //create items
    this.items = this.game.add.group();
    this.items.enableBody = true;
    var item;    
    result = this.findObjectsByType('item', this.map, 'objectsLayer');
    result.forEach(function(element)
    	    {
    	    	    this.createFromTiledObject(element, this.items);
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
}

























