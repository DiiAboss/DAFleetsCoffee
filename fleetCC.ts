function firstNonRepeated(str: string): string {
    
    // Create a map to store the frequency count of each character
    let frequencyCount = new Map(); 
  
    // Iterate over each character in the input string
    for (let char of str) {
      // If the character is already in the map, increment its count by 1
      if (frequencyCount.has(char)) {
        frequencyCount.set(char, frequencyCount.get(char) + 1);
      } else {
        // Otherwise, add the character to the map with a count of 1
        frequencyCount.set(char, 1);
      }
    }
  
    // Iterate over the string again to find the first non-repeated character
    for (let c of str) {
      // If the count of the current character is 1, return it
      if (frequencyCount.get(c) == 1) {
        return c;
      }
    }
  
    // If no non-repeated character is found, return an empty string
    return "";
  }


console.log(firstNonRepeated("hello"));  // should print: "h"
console.log(firstNonRepeated("aabcc"));  // should print: "b"
console.log(firstNonRepeated("aabbcc"));  // should print: ""
