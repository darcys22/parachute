class Main extends Phaser.State {
 
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
      this.fallrate = 8; //Meters a Second
      game.time.advancedTiming = true;
      this.height = 1000;
      this.maxheight = this.height;
      this.heightText = game.add.text(16, 16, 'Height: ' + this.height + 'ft', { font: '16px Arial', fill: '#ffffff' }); 

      this.leftToggle = game.input.keyboard.addKey(Phaser.Keyboard.F);
      this.rightToggle = game.input.keyboard.addKey(Phaser.Keyboard.J);

      game.physics.p2.enable(this.para,false);
      this.para.body.angle = 90;
      this.velocity=150;

      var barConfig = {x: 200, y: 100, animationDuration: 1};
      this.heightBar = new HealthBar(this.game, barConfig);

      this.counter = 0;
      this.remote = true;


      this.d = [
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [true, false],
        [false, true],
        [true, false],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [false, false],
        [false, false],
        [false, false],
        [false, true],
        [false, false],
        [true, false],
        [false, false],
        [true, true],
        [false, true],
        [false, false],
        [false, true],
        [false, true],
        [false, true],
        [true, false],
        [false, true],
        [true, true],
        [true, false],
        [false, false],
        [true, false],
        [false, true],
        [true, false],
        [true, false],
        [true, false],
        [true, true],
        [true, true],
        [false, false],
        [true, true],
        [false, true],
        [true, true],
        [true, true],
        [true, false],
        [true, true],
        [false, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
      ]

      //var url = new URL(window.location.href);
      //window.d = url.searchParams.get("d");
      //console.log(window.d);
    }

    update() {
      if (this.remote) {
        if (this.d[this.counter]) {
          this.leftToggle.isDown = this.d[this.counter][0];
          this.rightToggle.isDown = this.d[this.counter][1];
        }
      }
      this.counter ++
      this.dirty = false;


      this.heightBar.setPercent((this.height-1)/this.maxheight*100); 
      this.heightText.text = 'Height: ' + Math.round(this.height,4) + 'ft';

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
      if (this.height < 1)
        this.win();
      if(game.time.fps > 250 || game.time.fps < 1) {
        this.height = this.height - 0.874890667;
      } else {
        this.fallrate = this.fallrate + this.fallratedelta(this.rightToggleDepth,this.leftToggleDepth,this.fallrate)/game.time.fps;
        this.height = this.height - (this.fallrate / game.time.fps * 3.28084);
      }
 
    }

    render() {
      this.game.debug.text(`FallRate ${this.fallrate}`, 20, 60, 'yellow', 'Segoe UI');
    
    }
    
    fallratedelta(tl,tr,velocity) {
      var difference = Math.abs(tl-tr)/100;
      var mean = (tl+tr)/2/100;
      var accel = difference * 9.8 * (1- mean/2)*2;
      var deccel = mean * (velocity*velocity) * (1-difference*difference) + (velocity - 8)*(1-difference/2);
      var delta = accel - deccel;
      if (velocity <0.001 && delta < 0) {
        delta = 0;
      } 
      if (velocity > 52 && delta > 0){
        delta = 0;
      }
      return delta;
      
    }

    pack(obj) {
			var mainbytesArray = [];
      if((obj.length % 2)) {
        obj.push([false,false]);
      }
      var byte = 0;
      for(var i = 0; i < obj.length; i++){
          if (i%2 ==0 && i>0) {
            mainbytesArray.push(byte.toString(16));
            byte = 0;
          }
          byte = byte << 2;
          if(obj[i][0] && obj[i][1])
            byte += 3;
          if(obj[i][0] && !obj[i][1])
            byte += 2;
          if(!obj[i][0] && obj[i][1])
            byte += 1;
      }
      mainbytesArray.push(byte.toString(16));
      return mainbytesArray.join('');
    }

    unpack(str) {
			var controlArray = [];
      for(var i = 0; i < str.length; i++){
        switch(str[i]) {
            case '0':
                controlArray.push([false,false]);
                controlArray.push([false,false]);
                break;
            case '1':
                controlArray.push([false,false]);
                controlArray.push([false,true]);
                break;
            case '2':
                controlArray.push([false,false]);
                controlArray.push([true, false]);
                break;
            case '3':
                controlArray.push([false, false]);
                controlArray.push([true, true]);
                break;
            case '4':
                controlArray.push([false, true]);
                controlArray.push([false, false]);
                break;
            case '5':
                controlArray.push([false, true]);
                controlArray.push([false, true]);
                break;
            case '6':
                controlArray.push([false, true]);
                controlArray.push([true, false]);
                break;
            case '7':
                controlArray.push([false, true]);
                controlArray.push([true, true]);
                break;
            case '8':
                controlArray.push([true, false]);
                controlArray.push([false, false]);
                break;
            case '9':
                controlArray.push([true, false]);
                controlArray.push([false, true]);
                break;
            case 'a':
                controlArray.push([true, false]);
                controlArray.push([true, false]);
                break;
            case 'b':
                controlArray.push([true, false]);
                controlArray.push([true, true]);
                break;
            case 'c':
                controlArray.push([true, true]);
                controlArray.push([false, false]);
                break;
            case 'd':
                controlArray.push([true, true]);
                controlArray.push([false, true]);
                break;
            case 'e':
                controlArray.push([true, true]);
                controlArray.push([true, false]);
                break;
            case 'f':
                controlArray.push([true, true]);
                controlArray.push([true, true]);
                break;
            default:

        } 

      }
      return controlArray;
    }

    win() {
      window.results = {}
      window.results.finalspeed = this.fallrate;
      window.results.finalx = this.para.body.x;
      window.results.finaly = this.para.body.y;

      game.state.start('Landed');
    }
 
}
