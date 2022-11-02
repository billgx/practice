//JC Gibbs

class Monster{
    constructor(){
        
        this.name = "";
        this.alive = true;
        this.sound = "arrhh!"
    }
    ahwoof(){
        console.log("Werewolf says:" + this.sound);
    }
    whoooo(){
        console.log("Dracula says:" + this.sound);
    }
    growl(){
        console.log("Monster says:" + this.sound);
    }
}



class Zombie extends Monster {
    constructor(){
        super();
        this.health = 110;
        this.damage = 0;
        console.log ("New Zombie created...")
    }
}
 

class Dracula extends Monster {
    constructor() {
        super();
this.health = 100;
this.sound = "Whoooo";
this.damage = 8;
console.log("New Dracula created..");
    }
}

class Werewolf extends Monster {
    constructor() {
        super();
this.health = 80;
this.sound = "Whoooo";
this.damage = 5;
console.log("New Werewolf created..");
    }
}

let z1 = new Zombie();
console.log(z1);
console.log(z1.growl());
let z2 = new Dracula();
console.log(z2);
console.log(z2.whoooo());
let z3 = new Werewolf();
console.log(z3);
console.log(z3.ahwoof());