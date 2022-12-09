class enderman {
    constructor(health, sound, strength){
        health = 100;
        sound = "ooooooooo";
        strength = "1";
    }
}

function createEnderman() {
    let enderman1 = new enderman();
    console.log("you have created a " + enderman1)

}

createEnderman();
