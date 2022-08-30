/* Simple Sample JavaScript
*    by Bill Genereux 
*   August 26, 2022
*/

// Let's review some concepts
// first, a variable of type int

let wL = 10; // we'll use this for the low wind measurement

// We use 'let' keyword to denote it can be a variable that changes.
// Older versions of JavaScript used 'var' but that's out of date, evidently.

// If it is a value that won't ever change, it is a 'constant' and you use

const color = "blue";  // constants can be useful sometimes as well

// Don't forget that the '=' sign is used for assignment, not equivalence checking.
// In JavaScript we use '==' and '==='. There's a difference but I can't explain it now.

// Last time we talked about creating a function about weather.

function isItRaining (rainBool) { // isItRaining is a boolean variable
    if(rainBool) {
        return "It is raining outside.";
    } else {
        return "It is not raining outside.";
    }

}

// but we ran out of time before we could implement our function.

// We also talked about using JavaScript objects
// I got the sense from our discussion that objects were not emphasized heavily
// or maybe we've just forgotten? In any case, here's a weatherInfo object.

const weatherInfo = {
    tempHi : 94,
    tempLow : 67,
    windHi : 25,
    windLow : wL,
    humidity : 40,
    barometer : "dropping",
    precipitationChance: 0.20
}

// Javascript objects are normally saved as constants, not variables.
// They are kind of like variables, but with several name/value pairs inside.

// So let's try to use our function and our object in some code.



// How about doing a weather report using our weather object?

console.log ("Today's weather forecast:");
console.log ("Winds between " + weatherInfo.windLow + " and " + weatherInfo.windHi + " miles per hour");
console.log ("Today's high will be " + weatherInfo.tempHi);
console.log ("and the overnight low will be " + weatherInfo.tempLow);
console.log ("The barometer is " + weatherInfo.barometer);
console.log ("We have a " + weatherInfo.precipitationChance + " percent chance for rain.")

// I'm going to check the precipitaton chance. If it is below 50%, I'm going to
//use the isItRaining function to tell us it's not raining.

if (weatherInfo.precipitationChance <= 0.50) {
    console.log (isItRaining(false));
    console.log ("The sky is " + color);
} else {
    console.log (isItRaining(true));
}

// you can use a command line interface / terminal and node.js to run this sample.js file
// at the command line type: node sample.js and it should run for you.

console.log("\nDisplaying the weatherInfo object: " , weatherInfo);
