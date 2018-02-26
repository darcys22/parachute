class Main extends Phaser.State {
 
    preload() {
      game.load.spritesheet('map','assets/map.jpg');
      game.load.spritesheet('parachute', 'assets/parachute.png', 96, 64, 4);
         
    }
 
    create() {
      /* Adding Map */
      this.map = game.add.sprite(0,0,'map');
      /* Adding Para */
      this.para = game.add.sprite(570,100,'parachute');
      this.para.animations.add('fly');
      this.para.animations.play('fly',4,true);

      this.rightToggleDepth = 0;
      this.leftToggleDepth = 0;

      this.windStrength = 50;
      this.windDirection = 90;
      this.height = 1000;
      this.heightText = game.add.text(16, 16, 'Height: ' + this.height + 'ft', { font: '16px Arial', fill: '#ffffff' }); 

      this.leftToggle = game.input.keyboard.addKey(Phaser.Keyboard.F);
      this.rightToggle = game.input.keyboard.addKey(Phaser.Keyboard.J);

      game.physics.startSystem(Phaser.Physics.P2JS);
      game.physics.p2.enable(this.para,false);
      this.para.body.angle = 90;
      this.velocity=150;
 
    }

    update() {
      this.dirty = false;
      this.height--;
      this.heightText.text = 'Height: ' + this.height + 'ft';

      this.para.body.velocity.x = this.velocity * Math.cos((this.para.angle-90)*0.01756) + this.windStrength * Math.cos((this.windDirection - 90) * 0.01756);
      this.para.body.velocity.y = this.velocity * Math.sin((this.para.angle-90)*0.01756) + this.windStrength * Math.sin((this.windDirection - 90) * 0.01756);

      if (this.leftToggle.isDown) {
        if (this.leftToggleDepth <= 100) {
          this.leftToggleDepth+=2;
          this.dirty = true;
        }
      } else {
        if (this.leftToggleDepth > 0) {
          this.leftToggleDepth-=Math.ceil(this.leftToggleDepth/2);
          this.dirty = true;
        }
      }

      if (this.rightToggle.isDown) {
        if (this.rightToggleDepth <= 100) {
          this.rightToggleDepth+=2;
          this.dirty = true;
        }
      } else {
        if (this.rightToggleDepth > 0) {
          this.rightToggleDepth-=Math.ceil(this.rightToggleDepth/2);
          this.dirty = true;
        }
      }
      if (this.dirty)
        this.para.body.angularVelocity = (this.rightToggleDepth-this.leftToggleDepth)/5*(this.velocity/1000);
 
    }

    render() {
      this.game.debug.text(this.para.body.angularVelocity,16,64);
    }
 
}

var game = new Phaser.Game(1280, 839, Phaser.AUTO, 'main_game'); 

game.state.add('Main', Main, false);
game.state.start('Main');
