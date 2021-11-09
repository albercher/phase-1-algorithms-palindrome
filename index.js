function isPalindrome(word) {
  let arr = word.split("").reverse().join("");
  if (arr === word){
    return true;
  } else {
    return false;
  }
}

/* 
  take string, split into array, reverse it, join it
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
