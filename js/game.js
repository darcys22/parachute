var game = new Phaser.Game(800, 493, Phaser.AUTO, 'main_game'); 

game.state.add('Boot', Boot, false);
game.state.add('Load', Load, false);
game.state.add('Main', Main, false);
game.state.add('Landed', Landed, false);
game.state.start('Boot');
