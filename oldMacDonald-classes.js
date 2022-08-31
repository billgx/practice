/* 
Title: The Old MacDonald Song - Part II
Date: Aug. 30, 2022
Objectives: Practice using Classes, objects, git & GitHub.
Author: Dr. Genereux
*/

// Let's try using classes
// A class is a template for creating objects. In Old MacDonald - Part I, we made different animal objects.
// Using the Animal class will force all animals to have the same properties

class Animal {                                  // classes are normally capitalized so we know they are classes
    constructor (animalName, animalSound) {     // every class must have a constructor method to describe how the
        this.name = animalName;                 // objects should be made. Our animal objects all have a name and a sound.
        this.sound = animalSound;               // The names and the sounds should be strings when constructing our animals.
    }

    speak() {                                   // this object method is an action the object can perform
        return this.sound + " " + this.sound;   // instead of typing this double sound line, we can just say speak()
    }

}

// Now that we know the structure of our animal objects we will be making, let's use the class to make some animals.

let duck = new Animal ("duck", "quack!");
let wolf = new Animal ("wolf", "awoooo!");
let cow = new Animal ("Cow", "MOO!");
let pig = new Animal ("pig", "oink!");
let sheep = new Animal ("sheep", "baa");
let cat = new Animal ("cat", "meow!");
let dog = new Animal ("dog", "woof!");

// put the animals into an array so we can easily loop through each of them.
const animals = [duck, wolf, cow, pig, sheep, cat, dog]; // create array of the animal objects



//**************************the song part********************************************** 

// writing some abbreviation constants so we don't have to type so much
const eio = "      E I E I O";
const omdhaf = "Old MacDonald had a farm";
const aotfhha = "And on that farm he had a ";

for (let i = 0; i < animals.length ; i++) {

    console.log ("\n" + omdhaf);
    console.log (eio);
    console.log (aotfhha + animals[i].name);
    console.log (eio);

    console.log ("With a " + animals[i].speak() + " here" );
    console.log ("And a " + animals[i].speak() + " there" );
    console.log ("Here a " + animals[i].sound + " " + "there a " + animals[i].sound);
    console.log ("Everywhere a " + animals[i].speak());
    console.log (omdhaf);
    console.log (eio + "\n");
    
}









                                            