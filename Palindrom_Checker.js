function palindrome(str) {
    let origStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();  // Remove all non-alphanumeric characters in the string and turn the string into the lower case
    let len = origStr.length - 1;
    for (let i=0; i<len/2; i++) {   // Check elements on both sides of the string, use a for loop to move closer to the center of the string to check all the elements
      if (origStr[i] !== origStr[len-i]) {
        return false;
      }
    } return true;
  }