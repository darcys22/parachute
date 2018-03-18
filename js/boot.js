class Boot extends Phaser.State {
 
    create() {
      game.physics.startSystem(Phaser.Physics.P2JS);
      game.state.start('Load');
    }
 
}
