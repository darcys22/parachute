class Load extends Phaser.State {
 
    preload() {
      game.load.spritesheet('map','assets/map.jpg');
      game.load.spritesheet('parachute', 'assets/parachute.png', 96, 64, 4);
         
    }
 
    create() {
      game.state.start('Main');
 
    }

}
