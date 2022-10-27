class Witch {
    constructor() {
      this.health = 100;
      this.sound = "hehehehehe!";
      this.damage = 10;
      console.log ("New Witch created") ;
      console.log (this.sound);
    }
  }

  class Ghost {
    constructor() {
        this.health = 10;
        this.damage = 2;
        this.sound = "boo..."
        console.log("Some Random person died")
    }
}

class Dice {
    constructor() {

    }

    rollDice() {
        
        this.face = Math.floor(Math.random() * 6) + 1; // randomly get number 1-6
        console.log ("rolling dice: " + "a " + this.face + "!");
        return this.face;
    }
}

//create the monsters
let casper = new Ghost();
let sabrina = new Witch();
let d = new Dice();

    
function fightMonsters(m1, m2) {
    // function to create the monsters who will fight
    // passing in two monster objects as parameters

    let monster1 = m1;
    let monster2 = m2;

    d.rollDice();


}

fightMonsters(casper, sabrina);


