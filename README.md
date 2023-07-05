# DAFleetsCoffee
fleets coffee code challenge

## Task

Write a function called `firstNonRepeated` that takes a single string as input and returns the first non-repeated character in the string. If there is no non-repeated character, the function should return an empty string.

### Input

A string containing lowercase and/or uppercase English letters.

### Output

A string representing the first non-repeated character in the input string, or an empty string if there is no non-repeated character.

## Function

The function `firstNonRepeated(str: string): string` works by creating a frequency count Map for the characters in the string. It then iterates over the string and checks the count of each character, returning the first character that appears only once.

If no such character exists, the function returns an empty string.

## Testing

You can test this function by running the code in a TypeScript environment and checking the console output. Here are the few cases provided:

```typescript
console.log(firstNonRepeated("hello"));  // should print: "h"
console.log(firstNonRepeated("aabcc"));  // should print: "b"
console.log(firstNonRepeated("aabbcc"));  // should print: ""
