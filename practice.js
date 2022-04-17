//! Question #1: Turning Strings to URLs
//! URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

//! You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

//! Example
//! Input: "Jasmine Ann Jones"

//! Output: "Jasmine%20Ann%20Jones"

stringsToUrls = (input) => {
if (typeof(input) !== 'string') {
  return;
  } else if (input.includes(" ")) {
    let result = input.split(" ")
    for (let i = 0; i < result.length - 1; i++) {
      result[i] = result[i] + "%20";
    }
    return result.join("");
  } else {
    return input;
  }
}


//? Question #2: Array Deduping
//? Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

//? Example
//? Input: [7, 9, "hi", 12, "hi", 7, 53]

//? Output: [7, 9, "hi", 12, 53]

arrayDeduping = (input) => {
  if (Array.isArray(input)) {
    return [...new Set(input)]
  } else {
    return;
  }
}


//* Question #3: Compressing Strings
//* Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

//* Example
//* Input: "aaabccdddda"

//* Output: "3ab2c4da"

//* THOUGHT PROCESS:
//* instantiate empty result array
//* determine character and # of repeats
//* if 1, push character, if > 1, push count + character
//* return array joined to string

compressingStrings = (input) => {
  if (typeof(input) !== 'string') { 
    return;
  } else {
    let result = [];
    let compare = input.split("");
    let counter = 1; 
    for (let i = 0; i < compare.length; i++) {
      if (compare[i] === compare[i+1]) {
        counter++;
      } else if (counter === 1) {
        result.push(compare[i]);
      } else {
        result.push(counter + compare[i]); 
        counter = 1;
      }
    }
    return result.join("");
  }
}

//* EXPLANATION:
//* Line 58/59: determine if input is a string, if not, return undefined
//* Line 61: instantiate empty result array
//* Line 62: split string into characters
//* Line 64: loop through character array
//* Line 65/66: determine # of repeated instances - if character matches next character, counter++
//* Line 67/68: if it doesn't match, push character to result
//* Line 70/71: if repeats, push counter + character to array, reset counter to 1
//* Line 74: return array joined into string


//TODO Question #4: Checking for Uniqueness
//TODO Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

//TODO Example
//TODO Input: "hello"

//TODO Output: false

//TODO Input: "copyright"

//TODO Output: true

checkingForUniqueness = (input) => {
  if (typeof(input) !== 'string') {
    return;
  } else {
    let compare = new Set(input);
    let counter = 0;
    compare.forEach(function(e) {
      if (e === input[counter]) {
        counter++;
      }
    })
    if (counter === input.length) {
      return true;
    } else {
      return false;
    }
  }
}


// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

// THOUGHT PROCESS:
// determine lowest value, push to array, repeat, return array

arraySorting = (input) => {
  if (Array.isArray(input)) {
    let result = [];
    for (let x = 0; x < input.length; x++) {
      if (input[x] === Math.min(...input)) {
        result.push(input[x]);
        input.splice(x, 1);
        x = -1;
      }
    }
    return result;
  } else {
    return;
  }
}

// EXPLANATION:
// Line 141/152: determine if input is array. if not, return undefined
// Line 142: instantiate result array to push values into
// Line 143: loop through array
// Line 144: check if value matchs Math.min()
// Line 145-147: if so, push to result array, remove value from input array, reset x to -1 so ++ brings to 0 and restarts from 0 position of array, repeat this process until input array is empty
// Line 150: return result array