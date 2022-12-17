

// 1. Create a function to calculate the area of a rectangle:

function calculateArea(length, width) {
  return length * width;
}

// 2. Create a function to capitalize the first letter of a string:

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// 3. Create a function to calculate the average of an array of numbers:

function calculateAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

// 4. Create a function to check if a number is even:

function isEven(number) {
  return number % 2 === 0;
}

// 5. Create a function to check if a string is a palindrome:

function isPalindrome(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return string === reversedString;
}

// 6. Create a function to check if a number is a prime number:

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// 7. Create a function to find the maximum value in an array:

function findMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// 8. Create a function to convert a string to an array of words:

function stringToArray(string) {
  return string.split(" ");
}

// 9. Create a function to remove duplicate values from an array:

function removeDuplicates(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

// 10. Create a function to reverse a string:

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}