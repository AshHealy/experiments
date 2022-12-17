
//We will use the Math.random() function to generate a random number 

//Create an array of names 
var names = ["Ash", "Jen", "Steve", "Morag", "Clair", "Ben", "Ally"];

//Generate a random number 
var randomNumber = Math.floor(Math.random() * names.length);

//Select a random name from the array 
var randomName = names[randomNumber];

//Print the result 
console.log("The randomly selected name is " + randomName + ".");