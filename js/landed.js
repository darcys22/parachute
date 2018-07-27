class Landed extends Phaser.State {
 
    create() {
      var winLabel = game.add.text(80,80, 'Landed', {font: '50px Arial', fill: '#00FF00'});
      var startLabel = game.add.text(80,game.world.height-80, 'press the "W" key to restart', {font: '25px Arial', fill: '#ffffff'});
      var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
      wkey.onDown.addOnce(this.restart, this);

      var main= document.getElementById("mn")
      var results = document.createElement("div"); 
      results.setAttribute("id", "results"); 
      while (results.firstChild) {
          results.removeChild(results.firstChild);
      }
      var t = document.createTextNode(JSON.stringify(window.results));       // Create a text node
      results.appendChild(t);
      mn.appendChild(results);
    }


    restart() {
      game.state.start('Main');
    }

 
}
