class Werewolf {
    constructor(){
        this.health = 100
        this.sound = "Awoooooo!"
        this.damage= 9
        this.attacksound = "rawwhh!";
        console.log ("New Werewolf created");}

        howl(){
            console.log(this.sound);
    }
}
module.exports = Werewolf;