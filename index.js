function isPalindrome(word) { 
  let newWord = [] 
  for(let i=0; i<word.length; i++){
     newWord.push(word[i]) 
    }
   let reversedWord = [...newWord]
     reversedWord = reversedWord.reverse() 
   newWord = newWord.join('')
   reversedWord = reversedWord.join('') 
   return reversedWord === newWord; }

/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here
  line 2 declares the new word as an array
  line 3 is a for loop that does the following:
   1. it goes through all the elements in the array of strings
  the reversedword variable clones new word using spread operator
  reversedword = reversedword.reverse() returns the word as a reverse of the original
  reversedword === newword will return true if the word is a palindrome and false if it is not
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
