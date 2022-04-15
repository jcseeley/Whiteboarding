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
    for (let i=0; i<result.length-1; i++) {
      result[i] = result[i] + "%20";
    }
    return result.join("").toString();
  } else {
    return input;
  }
}