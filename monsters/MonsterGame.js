var actions = new Array;

class Vampire {
    constructor(name) {
        this.ownName = name;
    }

    get oName() {
        return this.ownName;
    }
    set oName(x) {
        this.ownName = x;
    }

    health() {
        return 100;
    }

    sound1() {
        return "Whoooo"
    }

    sound2() {
        return "I vill drain your blood!"
    }

    attackType(enemyName) {
        const dRoll = Math.floor(Math.random() * 2);

        if(dRoll == 0) {
            //Claw attack
            const claw = "claw";
            actions.push(this.ownName + " swipes at " + enemyName + " with a claw!");
            return claw;
        } else {
            //Bite attack
            const bite = "bite";
            actions.push(this.ownName + " lunges at " + enemyName + " and bites at them!");
            return bite;
        }
    }

    attackCheck(enemyName, attackType) {
        const dRoll = Math.floor(Math.random() * 6);
        const biteDmg = 18;
        const clawDmg = 12;
        const aType = attackType;

        function determineType() {
            
            if(aType == "claw") {
            return clawDmg;
            } else if(aType == "bite") {
            return biteDmg;
            };
        };

        const attackDmg =  determineType();

        if(dRoll == 5) {

            actions.push(this.ownName + " critically hit " + enemyName + "! They take " + attackDmg * 2 + " points of damage!");
            return attackDmg * 2;
        } else if(dRoll >= 1 && dRoll <= 4) {
            actions.push(this.ownName + " hits " + enemyName + " with a " + attackType + " for " + attackDmg + " points of damage!");
            return attackDmg;
        } else {
            actions.push(this.ownName + " missed " + enemyName + " with it's attack!");
            return 0;
        }    
    }
}

class Ghost {
    constructor(name) {
        this.ownName = name;
    }

    get oName() {
        return this.ownName;
    }
    set oName(x) {
        this.ownName = x;
    }

    health() {
        return 70;
    }

    sound1() {
        return "Boo!"
    }

    sound2() {
        return "I can see right through you!"
    }

    attackType(enemyName) {
        const cRoll = Math.floor(Math.random() * 2);

        if(cRoll == 0) {
            //Invisible attack
            const invisible = "invisible";
            actions.push(this.ownName + " becomes invisible in front of " + enemyName);
            return invisible;
        } else {
            //Mimic attack
            const mimic = "mimic";
            actions.push(this.ownName + " mimics " + enemyName + "s loved one to distract!");
            return mimic;
        }
    }

    attackCheck(enemyName, attackType) {
        const cRoll = Math.floor(Math.random() * 6);
        const invisibleDmg = 24;
        const mimicDmg = 14;
        const aType = attackType;

        function determineType() {
            
            if(aType == "invisible") {
            return invisibleDmg;
            } else if(aType == "mimic") {
            return mimicDmg;
            };
        };

        const attackDmg =  determineType();

        if(cRoll == 5) {

            actions.push(this.ownName + " critically hit " + enemyName + "! They take " + attackDmg * 2 + " points of damage!");
            return attackDmg * 2;
        } else if(cRoll >= 1 && cRoll <= 4) {
            actions.push(this.ownName + " hits " + enemyName + " with a " + attackType + " for " + attackDmg + " points of damage!");
            return attackDmg;
        } else {
            actions.push(this.ownName + " missed " + enemyName + " with it's attack!");
            return 0;
        }    
    }
}


const Dracula = new Vampire("Dracula");
const Casper = new Ghost("Casper");
var m1Health = null;
var m2Health = null;

function fightMonsters(m1, m2) {

    let m1Name = String(m1.ownName);
    let m2Name = String(m2.ownName);

    if (m1Health == null && m2Health == null) {
        m1Health = m1.health();
        m2Health = m2.health();
    };

    function initiativeRoll() {
        return Math.floor(Math.random() * 2);
    };

    function countDown() {
        let x = 3;
        actions.push(m1Name + " vs " + m2Name);
        actions.push("Fight begins in...");
        while( x > 0) {
            actions.push(x.toString());
            x = x - 1;
        }
    }

    function taunt() {
        actions.push(m1Name + " says \"" + m1.sound1() + "\"")
        actions.push(m2Name + " says \"" + m2.sound1() + "\"")
    }

    let m1NearDeath = null
    let m2NearDeath = null

    function battle() {
        while(m1Health >= 1 && m2Health >= 1) {

            let initiative = initiativeRoll();

            if(initiative == 0) {
                let aType = m1.attackType(m2Name);
                let aDamage = m1.attackCheck(m2Name, aType);
                m2Health = m2Health - aDamage;
            } else {
                let aType = m2.attackType(m1Name);
                let aDamage = m2.attackCheck(m1Name, aType);
                m1Health = m1Health - aDamage;
            };

            if (m1Health <= 20 && m1NearDeath == null) {
                actions.push(m1Name + " screams \"" + m1.sound2() + "\"");
                m1NearDeath = 1;
            } else if (m2Health <= 20 && m2NearDeath == null) {
                actions.push(m2Name + " screams \"" + m2.sound2() + "\"")
                m2NearDeath = 1;
            }

            if(m1Health >= 1 && m2Health >= 1) {
                if(initiative == 1) {
                    let aType = m1.attackType(m2Name);
                    let aDamage = m1.attackCheck(m2Name, aType);
                    m2Health = m2Health - aDamage;
                } else {
                    let aType = m2.attackType(m1Name);
                    let aDamage = m2.attackCheck(m1Name, aType);
                    m1Health = m1Health - aDamage;
                };
            };

            if (m1Health <= 20 && m1NearDeath == null) {
                actions.push(m1Name + " screams \"" + m1.sound2() + "\"");
                m1NearDeath = 1;
            } else if (m2Health <= 20 && m2NearDeath == null) {
                actions.push(m2Name + " screams \"" + m2.sound2() + "\"")
                m2NearDeath = 1;
            }

            if(m1Health >= 1 && m2Health >= 1) {
                actions.push(m1Name + " has " + m1Health + " health remaining.");
                actions.push(m2Name + " has " + m2Health + " health remaining.");
            }

            if(m1Health <= 0 || m2Health <= 0) {
                if(m1Health <= 0) {
                    actions.push(m2Name + " is the winner!");
                } else {
                    actions.push(m1Name + " is the winner!");
                };
            }    
        }
        
    };

    (function () {
        
        countDown();
        taunt();
        battle();
        let x = 0;
        const interval = setInterval(() => {
            if(x >= actions.length) {
                clearInterval(interval);
            } else {
                console.log(actions[x]);
                x++;
            }
        }, 1000)
    })();
}

fightMonsters(Dracula, Casper);
