function isPalindrome(word) {
  // Convert the word to lowercase for case-insensitive comparison
  const lowercaseWord = word.toLowerCase();

  // Reverse the string and compare it with the original
  const reversedWord = lowercaseWord.split('').reverse().join('');

  // Check if the reversed word is the same as the original
  return lowercaseWord === reversedWord;
}

/* 
  Pseudocode:
  1. Convert the input word to lowercase.
  2. Reverse the lowercase word.
  3. Compare the original lowercase word with the reversed one.
  4. If they are the same, return true (it's a palindrome); otherwise, return false.

  Written Explanation:
  The function first ensures that the comparison is case-insensitive by converting the input word to lowercase. It then creates a reversed version of the word using the `split`, `reverse`, and `join` array methods. Finally, it compares the original lowercase word with its reversed version. If they match, the function returns true, indicating that the input is a palindrome; otherwise, it returns false.
*/

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
