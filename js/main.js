var game = new Phaser.Game(300, 300, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render });

function preload() {
	game.load.tilemap('level2', 'assets/tilemaps/level2.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('tiles-1', 'assets/images/tiles-1.png');
	game.load.image('enemy', 'assets/images/whitecell.png');
	game.load.image('player', 'assets/images/invader.png');
	game.load.image('portal', 'assets/images/Exit.png');
	game.load.image('bg','assets/images/levelBack.png');
	game.load.image('end','assets/images/end.png');
}

var map;
var tileset;
var background;
var layer;
var player;
var enemyX;
var enemyY;
var enex;
var eney;
var portal;
var end;
var stateText;

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	background = game.add.sprite(0,0,'bg');
	
	map = game.add.tilemap('level2');
	map.addTilesetImage('tiles-1', 'tiles-1');
	layer = map.createLayer('blockedLayer');
	map.setCollisionBetween(1,100,true, 'blockedLayer');
	layer.resizeWorld();
	
	//These enemies only move in the x direction 
	enemyX = game.add.group();
	enemyX.enableBody = true;
	enemyX.physicsBodyType = Phaser.Physics.ARCADE;
	xCreater();
	enemyX.setAll('anchor.x', 0);
	enemyX.setAll('anchor.y', 1);
	
	//These enemies only move in the y direction 
	enemyY = game.add.group();
	enemyY.enableBody = true;
	enemyY.physicsBodyType = Phaser.Physics.ARCADE;
	yCreater();
	enemyY.setAll('anchor.x', 0);
	enemyY.setAll('anchor.y', 1);

	//this is the exit to the game
	portal = game.add.sprite(365, 1999, 'portal');
	
	//create player
	player = game.add.sprite(333, 48, 'player');
	game.physics.arcade.enable(player);
	//the camera will follow the player in the world
	game.camera.follow(player);
	player.body.bounce.set(1);
	//move player with cursor keys
	cursors = game.input.keyboard.createCursorKeys();
	
}
//these functions create the enemeies that will only move in direction x or y
function xCreater() {
	var xnum = 1;
	while (xnum<29) {
		if(xnum===1){
			enex = enemyX.create(133,489, 'enemy');
			go(enex);
		}
		if(xnum===2){
			enex = enemyX.create(457,1722, 'enemy');
			go(enex);
		}
		if(xnum===3){
			enex = enemyX.create(131, 1845, 'enemy');
			go(enex);
		}
		if(xnum===4){
			enex = enemyX.create(22, 1514, 'enemy');
			go(enex);
		}
		if(xnum===5){
			enex = enemyX.create(729, 1302, 'enemy');
			go(enex);
		}
		if(xnum===6){
			enex = enemyX.create(485, 1528, 'enemy');
			go(enex);
		}
		if(xnum===7){
			enex = enemyX.create(610, 1638, 'enemy');
			go(enex);
		}
		if(xnum===8){
			enex = enemyX.create(215, 1769, 'enemy');
			go(enex);
		}
		if(xnum===9){
			enex = enemyX.create(27, 1050, 'enemy');
			go(enex);
		}
		if(xnum===10){
			enex = enemyX.create(249, 762, 'enemy');
			go(enex);
		}
		if(xnum===11){
			enex = enemyX.create(125, 337, 'enemy');
			go(enex);
		}
		if(xnum===12){
			enex = enemyX.create(441, 395, 'enemy');
			go(enex);
		}
		if(xnum===13){
			enex = enemyX.create(187, 455, 'enemy');
			go(enex);
		}
		if(xnum===14){
			enex = enemyX.create(439, 1017, 'enemy');
			go(enex);
		}
		if(xnum===15){
			enex = enemyX.create(502, 854, 'enemy');
			go(enex);
		}
		if(xnum===16){
			enex = enemyX.create(730, 568, 'enemy');
			go(enex);
		}
		if(xnum===17){
			enex = enemyX.create(23, 936, 'enemy');
			go(enex);
		}
		if(xnum===18){
			enex = enemyX.create(442, 1139, 'enemy');
			go(enex);
		}
		if(xnum===19){
			enex = enemyX.create(279, 1594, 'enemy');
			go(enex);
		}
		if(xnum===20){
			enex = enemyX.create(486, 1847, 'enemy');
			go(enex);
		}
		if(xnum===21){
			enex = enemyX.create(298, 1982, 'enemy');
			go(enex);
		}
		if(xnum===22){
			enex = enemyX.create(296, 1913, 'enemy');
			go(enex);
		}
		if(xnum===23){
			enex = enemyX.create(36, 1662, 'enemy');
			go(enex);
		}
		if(xnum===24){
			enex = enemyX.create(327, 1528, 'enemy');
			go(enex);
		}
		if(xnum===25){
			enex = enemyX.create(552, 1415, 'enemy');
			go(enex);
		}
		if(xnum===26){
			enex = enemyX.create(187, 662, 'enemy');
			go(enex);
		}
		if(xnum===27){
			enex = enemyX.create(518, 454, 'enemy');
			go(enex);
		}
		if(xnum===28){
			enex = enemyX.create(205, 573, 'enemy');
			go(enex);
		}
		xnum = xnum+1;
	}
}

function go(enex) {
	enex.body.velocity.x = 50;
	enex.health = 50;
}

function yCreater() {
var xnum = 1;
	while (xnum<29) {
		if(xnum===1){
			eney = enemyY.create(265, 1496, 'enemy');
			fly(eney);
		}
		if(xnum===2){
			eney = enemyY.create(402, 1191, 'enemy');
			fly(eney);
		}
		if(xnum===3){
			eney = enemyY.create(19, 647, 'enemy');
			fly(eney);
		}
		if(xnum===4){
			eney = enemyY.create(442, 523, 'enemy');
			fly(eney);
		}
		if(xnum===5){
			eney = enemyY.create(719, 1188, 'enemy');
			fly(eney);
		}
		if(xnum===6){
			eney = enemyY.create(262, 1156, 'enemy');
			fly(eney);
		}
		if(xnum===7){
			eney = enemyY.create(84, 1420, 'enemy');
			fly(eney);
		}
		if(xnum===8){
			eney = enemyY.create(329, 1835, 'enemy');
			fly(eney);
		}
		if(xnum===9){
			eney = enemyY.create(72, 665, 'enemy');
			fly(eney);
		}
		if(xnum===10){
			eney = enemyY.create(475, 682, 'enemy');
			fly(eney);
		}
		xnum = xnum+1;
	}
}
function fly(eney){
	eney.body.velocity.y = 50;
	eney.health = 50;
}

function update() {
	
	//player movement
	player.body.velocity.y = 0;
	player.body.velocity.x = 0;

	if(cursors.up.isDown) 
	{
		player.body.velocity.y -= 50;
	}
	else if(cursors.down.isDown) 
	{
		player.body.velocity.y += 50;
	}
	if(cursors.left.isDown) 
	{
		player.body.velocity.x -= 50;
	}
	else if(cursors.right.isDown) 
	{
		player.body.velocity.x += 50;
	}
	
	game.physics.arcade.collide(player, layer);
	game.physics.arcade.overlap(enemyX, layer, xSwitch, null, this);
	game.physics.arcade.overlap(enemyY, layer, ySwitch, null, this);
	game.physics.arcade.overlap(player, portal, winning, null, this);
	game.physics.arcade.overlap(enemyX, player, youreCaught, null, this);
	game.physics.arcade.overlap(enemyY, player, youreCaught, null, this);

}

//when an enemy encounters the collisionlayer, their direction is switched.
// The causes the enemies to move back and forth.
function xSwitch(enex) {
	enex.health = enex.health*(-1);
	enex.body.velocity.x = enex.health;
}

function ySwitch(eney) {
	eney.health = eney.health*(-1);
	eney.body.velocity.y = eney.health;
}

//If the player is caught by an enemy, they lose.
function youreCaught(player) {
	restart();
}

//If the player reaches the portal/exit, then they win the game.
function winning(player) {
	
	stateText = game.add.text(player.x,player.y,' ', { font: '20px Arial', fill: '#fff' });
        stateText.anchor.setTo(0.5, 0.5);
	stateText.text="You made it!";
        stateText.visible = true;

        //the "click to restart" handler
        game.input.onTap.addOnce(restart,this);
	restart();
}

//Resets the game if the player loses or wins.
function restart() {
	player.x = 333;
	player.y = 48;
}


function render () {

    // game.debug.text(game.time.physicsElapsed, 32, 32);
    //game.debug.body(player);
    // game.debug.bodyInfo(player, 16, 24);

}

//create them as two separate groups, have a function create them ussing a switch
//	statement/while loop that counts how many times the function is called.

