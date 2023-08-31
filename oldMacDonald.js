/* 
Title: The Old MacDonald Song
Date: Aug. 30, 2023
Objectives: Practice using objects, git & GitHub.

Contributors: Annie Aeschliman

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

const sheep = {
    animalName: "sheep",
    animalSound: "baa!"
}

const animals = [duck]

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

