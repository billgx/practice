/* 
Title: The Old MacDonald Song
Date: Aug. 30, 2022
Objectives: Practice using objects, git & GitHub.

Contributors: 
Garrett Bennett, Trevor Cunningham, Katie Donovan, Eli Heffernan,
Tristan Lilly, Dylan Mangels, Bret Miller, Ryan Pfeifer
Joe Roth, Aidan Sankey, Joya Shelton, Tori Tuggle
Austin Emberlin, JC Gibbs, Caleb Glen, Daisuke Niisaka
Prof. Wm. Genereux

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


// Garrett

const wolf = {
    animalName: "wolf",
    animalSound: "awoooo!"
}
// Trevor
    const cow = {
        animalName: "Cow",
        animalName: "MOO!"
    }

// Katie
const pig = {
    animalName: "pig",
    animalSound: "oink!"
}

// Eli
const chicken = {
    animalName: "chicken",
    animalSound: "bawk bawk!"
}
// Tristan
const GiantSquid ={
	animalName: "Giant Squid",
	animalSound: "Squelch"
}

// Dylan
const cat1 = {
	animalName: "cat",
	animalSound: "meow!"

}
// Bret
const sheep = {
	animalName: "sheep",
	animalSound: "baa!"
}

// Ryan
const crow = {
	animalName: "crow",
	animalSound: "caw!"
}

// Joe
const mouse = {
	animalName: "mouse",
	animalSound: "squeak!"
}

// Aidan
const tiger ={
	animalName: "tiger",
	animalSound: "Roar!"
}
// Joya
const cat = {
	 animalName: "cat",
	 animalSound: "meow!"
 }
// Tori
const frog ={
	animalName: "frog",
	animalSound: "ribbit ribbit"
}
// Austin
const peacock = {
	animalName: "peacock",
	animalSound: "Caaaawww! Caaaawww!"
}

// JC Gibbs
 const dog = {
	 animalName: "dog",
	 animalSound: "woof!"
 }

// Caleb Glen
const fox = {
    animalName: "Fox",
    animalSound: "ring ding ding ding"
}
// Daisuke
const horse = {
	animalName:"horse",
	animalSound:"neigh!"
}


const animals = [duck, wolf, cow, pig, fox, dog, frog, cat, cat1, tiger, crow, sheep, chicken, horse, peacock]

// put the console.log output program below here

const eio = "      E I E I O";

console.log ("Old MacDonald had a farm");
console.log (eio + "\n");

function song () {
animals.forEach(element => {
    console.log ("Old MacDonald had a farm");
    console.log (eio + "\n");
  console.log(element.animalName + " goes " + element.animalSound);
});
}

song();

