const cat = {
    animalName: "cat",
    animalSound: "meow",
    animalAge: 11
}


let catJSON = JSON.stringify(cat);


console.log(catJSON);

let fs = require('fs');
fs.writeFile("catJSON.json",catJSON,() => {});

let lizard;

fs.readFile("lizardJSON.json","utf-8",(err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    lizard = JSON.parse(data);
    console.log(lizard);
  });

fs.writeFile("lizard2.json", "utf-8",() =>{});

  