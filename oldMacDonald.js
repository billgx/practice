/* 
Title: The Old MacDonald Song
Date: Sept. 5, 2023
Objectives: Practice using objects, git & GitHub.


Contributors: 

Prof. Wm. Genereux
=======
Contributors: Annie Aeschliman, Logan Bunch, Dylan Hoeffner, Colton Racette, Genessis Perez-Sorto, Trae Toelle, Nathan Shawnee


In this exercise, we will use JavaScript to create the song
lyrics to "Old MacDonald. Each person will create a JavaScript
object with two key/value pairs using "animalName" and "animalSound".

Everyone is to create a unique animal object with it's name and the
sound that it makes--no duplicates allowed!

For more info on JavaScript Objects see:
https://www.w3schools.com/jsref/jsref_obj_object.asp

To access the oldMacDonald.js file use git to clone the GitHub repo at:
https://github.com/billgx/practice.git

*/


// Prof. Gx's Example:

const duck = {
    animalName: "duck",
    animalSound: "quack!"
}

// Everyone add your animal object with its 
// animalName & animalSound below your name:

// Diego 
const monkey = {
    animalName: "Monkey",
    animalSound: "ooga booga"
}

// Genessis

const dog = {
    animalName: "dog",
    animalSound: "woof"
}


// Annie
const sheep = {
    animalName: "sheep",
    animalSound: "baa!"
}

// Trae

const coyote = {
    animalName: "coyote",
    animalSound: "howl"
}

// Gabriel

const rabbit = {
    animalName: "rabbit",
    animalSound: "silence"
}

//Zab

const redPanda = {
    animalName: "Red Panda",
    animalSound: "Huff"
}

// Logan
const pig = {
    animalName: "Pig",
    animalSound: "Oink"
}


// Colton
const donkey = {
    animalName: "Donkey",
    animalSound: "Hee-Haw"
}

// Teray

const elephant = {
    animalName: "Elephant",
    animalSound: "Trumpet"
}

//Dylan

const goose = {
    animalName: "Goose",
    animalSound: "HONK!"
}

//Nathan

const falcon = {
    animalName: "Falcon",
    animalSound: "Shrill!"
}

const animals = [duck, monkey, dog, sheep, coyote, rabbit, redPanda, pig, donkey, donkey, elephant, goose, falcon]


// put the console.log output program below here

const eio = "      E I E I O";

console.log ("Old MacDonald had a farm");
console.log (eio + "\n");

function song () {
    
    animals.forEach(element => {
    console.log ("Old MacDonald had a farm");
    console.log (eio + "\n");
    console.log ("and on that farm he had a " + element.animalName)
    console.log ("with a " + element.animalSound + " " + element.animalSound + " here")
    console.log ("and a " + element.animalSound +  " " + element.animalSound + " there")
    console.log ("everywhere a " + element.animalSound + " " + element.animalSound)
    });
}

song();

