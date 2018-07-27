class Boot extends Phaser.State {
 
    create() {
      game.physics.startSystem(Phaser.Physics.P2JS);
      game.time.advancedTiming = true;
      game.time.desiredFps = 50;
      game.state.start('Load');
    }
 
}
