/*  This program is for practice creating
    JSON files out of JavaScript Objects

    Author: Bill Genereux
    Date: Sept 8, 2022 

*/
// create cat object
const cat = {
    animalName: "cat",
    animalSound: "meow",
    animalAge: 11
}

// JSON's stringify method formats a Javascript object correctly for JSON file
let catJSON = JSON.stringify(cat);

console.log(catJSON);

// using Node's fs package for read/write of files to filesystem
let fs = require('fs');
fs.writeFile("catJSON.json",catJSON,() => {});

// make a 'lizard' variable used to store data read in from lizardJSON.json file
let lizard;

// read contents of existing 'lizardJSON.json' file, save to lizard variable
fs.readFile("lizardJSON.json","utf-8",(err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    lizard = JSON.parse(data);
    console.log(lizard);
  });
//writes out another copy of the original 'lizardJSON.json' file
fs.writeFile("lizardJSON-copy.json", "utf-8",() =>{});

  