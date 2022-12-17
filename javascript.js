// write a javascript app that demos data types and functions

// data types
let boolean = true; 
let number = 5;
let string = "Hello World!";
let array = [boolean, number, string]; 
let object = {
  boolean: boolean,
  number: number,
  string: string,
  array: array
};

// functions
function sayHello(name) {
  console.log("Hello " + name + "!");
}

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// Demo
console.log("Data Types:");
console.log("Boolean: " + boolean);
console.log("Number: " + number);
console.log("String: " + string);
console.log("Array: " + array);
console.log("Object: " + JSON.stringify(object));

console.log("Functions:");
sayHello("John");
console.log("5 + 7 = " + addTwoNumbers(5, 7));