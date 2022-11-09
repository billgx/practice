let backgroundMonster;
let midgroundMonster;
let foregroundMonster;

class Deadite {
    constructor(Health, Power){
        this.Health = Health;
        this.Power = Power;
        this.Sound = "I'LL SWALLOW YOUR SOUL!";
    }
}

class Werewolf {
    constructor(Health, Power){
        this.Health = Health;
        this.Power = Power;
        this.Sound = "rawwhh!";
    }
}

class Karen {
    constructor(Health, Power){
        this.Health = Health;
        this.Power = Power;
        this.Sound = "How DARE you speak to me that way!";
    }
}

class Peter_Griffin{
    constructor(Health, Power){
        this.Health = Health;
        this.Power = Power;
        this.Sound = "NHEHEHEHEHE";
    }
}

class Ghost {
    constructor(Health, Power){
        this.Health = Health;
        this.Power = Power;
        this.Sound = "boo...";
    }
}

class Dracula {
    constructor(Health, Power){
        this.Health = Health;
        this.Power = Power;
        this.Sound = "Whoooo";
    }
}

class Gaston {
    constructor(Health, Power){
        this.Health = Health;
        this.Power = Power;
        this.Sound = "I eat 5 dozen eggs!"
    }
}

class Witch {
    constructor(Health, Power){
        this.Health = Health;
        this.Power = Power;
        this.Sound = "hehehehehe!";
    }
}

class Zombie {
    constructor(Health, Power){
        this.Health = Health;
        this.Power = Power;
        this.Sound = "arrhh!";
    }
}

const monsterList = [Deadite,Werewolf,Karen,Peter_Griffin,Ghost,Dracula,Gaston,Witch,Zombie];

function randomMonster(){
    backgroundMonster = new monsterList[parseInt(random(0,8))]((Protag.exp[0]+1)*10,4);
}

//----Final Boss----//
class UnmatchedPowerOfTheSun {
    constructor() {
        this.Attack = 2147483647;
        this.Health = 2147483647;
        this.Sound = "BEHOLD";
    }
}