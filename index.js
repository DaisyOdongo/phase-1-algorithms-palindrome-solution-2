function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    for (let i = 0; i < word.length / 2; i++) {
      // compare the letter we're iterating over to the corresponding letter at the end of the string

      const endIndex = word.length - 1 - startIndex;
      if (word[startIndex] !== word[endIndex]) {
      const j = word.length - 1 - i;
      if (word[startIndex] !== word[j]) 
       // if the letters don't match, return false
      return false;
      }
      }
    }
   // if we reach the middle, and all the letters match, return true
   return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
