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
    return result.join("").toString();
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
    return result.join("").toString();
  }
}