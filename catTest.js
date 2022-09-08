const   cat = {
    animalName: "cat",
    animalSound: "meow",
    animalAge: 11
}


let catJSON = JSON.stringify(cat);


console.log(catJSON);

let fs = require('fs');
fs.writeFile("catJSON.json",catJSON,() => {});


fs.readFile("lizardJSON.json","utf-8",(err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

/*
let lizardJSON = JSON.parse(
    
    fs.readFile("lizardJSON.json","utf-8",(

)=>{}));
*/
//console.log(lizardJSON);

