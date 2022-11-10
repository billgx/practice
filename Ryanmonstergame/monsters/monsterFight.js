let m1 = "";
let m2 = "";

class Dice {
    constructor() {

    }

    rollDiceHealth(m) {
        
        this.face = Math.floor(Math.random() * m.health) + 1; // randomly get number 1- whateever their health is
        //console.log ("rolling dice for " + "a " + this.face + "!");
        return this.face;
    }
    rollDiceDamage(m) {
        
        this.face = Math.floor(Math.random() * m.damage) + 1; // randomly get number 1- whateever their damages is
       // console.log ("rolling dice for " + "a " + this.face + "!");
        return this.face;
    }
    
}

//create the monsters
const monsters = [
require ('./TheUselessGhost.js'),
require ('./witch.js'),
require ('./Deadite.js'),
require ('./class Dracula.js'),
require ('./zombie.js'),
require ('./SUN.js'),
require ('./Peter Griffin.js'),
require ('./gaston.js'),
require ('./JS_werewolf.js'),
require ('./Karen.js')
];
//Did monsters[x] instead of monsters.push so it was easy to refer to the order of the monsters in the list while coding

function name(x) { //this returns the name so I can type name(x) instead of x.constructer.name
    return x.constructor.name; 
}

function fightMonsters(m1, m2) {
    // function to create the monsters who will fight
    // passing in two monster objects as parameters

    let m1health = cDice.rollDiceHealth(m1);
    console.log(name(m1) + "'s health is " + m1.health);
    let m2health = sDice.rollDiceHealth(m2);
    console.log(name(m2) + "'s health is " + m2.health);
    for (let i = 0; i < 1000; i++){
        let m1dmg = cDice.rollDiceDamage(m1);
        let m2dmg = sDice.rollDiceDamage(m2);
        m1health = m1health - m2dmg;
        console.log(name(m1) + " is attacked by " + name(m2) + " for " + m2dmg + " damage! New health: " + m1health);
        m2health -= m1dmg;
        console.log(name(m2) + " is attacked by " + name(m1) + " for " + m1dmg + " damage! New health: " + m2health);

    if (m1health < 0 && m2health < 0) {
        console.log("it's a tie, go again.");
        break;
    } else if (m1health > m2health && m2health < 0) {
        console.log(name(m1) + " wins!"); 
        break;
    } else if (m2health > m1health && m1health < 0) {
        console.log(name(m2) + " wins!");
        break;
    }
    }

}

function selectmonster(x, y) {
    switch (x) {
        case "ghost":
        if (y == 1) {
            m1 = new monsters[0];
            console.log(monsters[0]);
            console.log(m1);
        } else if (y == 2) {
            m2 = new monsters[0];
            console.log(monsters[0]);
            console.log(m2);
        }
        break;
        case "witch":
        if (y == 1) {
            m1 = new monsters[1];
            console.log(monsters[1]);
            console.log(m1);
        } else if (y == 2) {
            m2 = new monsters[1];
            console.log(monsters[1]);
            console.log(m2);
        }
        break;
        case "deadite":
        if (y == 1) {
            m1 = new monsters[2];
            console.log(monsters[2]);
            console.log(m1);
        } else if (y == 2) {
            m2 = new monsters[2];
            console.log(monsters[2]);
            console.log(m2);
        }
        break;
        case "dracula":
        if (y == 1) {
            m1 = new monsters[3];
            console.log(monsters[3]);
            console.log(m1);
        } else if (y == 2) {
            m2 = new monsters[3];
            console.log(monsters[3]);
            console.log(m2);
        }
        break;
        case "zombie":
        if (y == 1) {
            m1 = new monsters[4];
            console.log(monsters[4]);
            console.log(m1);
        } else if (y == 2) {
            m2 = new monsters[4];
            console.log(monsters[4]);
            console.log(m2);
        }
        break;
        case "unmatchedpowerofthesun":
        if (y == 1) {
            m1 = new monsters[5];
            console.log(monsters[5]);
            console.log(m1);
        } else if (y == 2) {
            m2 = new monsters[5];
            console.log(monsters[5]);
            console.log(m2);
        }
        break;
        case "peter_griffin":
        if (y == 1) {
            m1 = new monsters[6];
            console.log(monsters[6]);
            console.log(m1);
        } else if (y == 2) {
            m2 = new monsters[6];
            console.log(monsters[6]);
            console.log(m2);
        }
        break;
        case "gaston":
        if (y == 1) {
            m1 = new monsters[7];
            console.log(monsters[7]);
            console.log(m1);
        } else if (y == 2) {
            m2 = new monsters[7];
            console.log(monsters[7]);
            console.log(m2);
        }
        break;
        case "werewolf":
        if (y == 1) {
            m1 = new monsters[8];
            console.log(monsters[8]);
            console.log(m1);
        } else if (y == 2) {
            m2 = new monsters[8];
            console.log(monsters[8]);
            console.log(m2);
        }
        break;
        case "karen":
            if (y == 1) {
                m1 = new monsters[9];
                console.log(monsters[9]);
            console.log(m1);
            } else if (y == 2) {
                m2 = new monsters[9];
                console.log(monsters[0]);
            console.log(m2);
            }
            break;
        case "test":
            test();
        break;
        default: 
        console.log("Error select a character and this time, try not to spell their name wrong. Theyre people you know.");
        z = true;
    }
}
const prompt = require("prompt-sync")({ sigint: true });
for (i = 0; i < monsters.length; i++) {
    console.log(monsters[i]);
}
console.log("Select monsters from the above list to fight!");
selectmonster(prompt("Select monster one: ").toLowerCase(), 1);
selectmonster(prompt("Select monster two: ").toLowerCase(), 2);


function test() {
    console.log(monsters[2])
    m1 = new monsters[2];
    console.log(m1);
    throw new Error("test over");
}


let cDice = new Dice(m1);
let sDice = new Dice(m2);

fightMonsters(m1, m2);

