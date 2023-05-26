/* isPalindrome
Given a string, determine whether it is a palindrome (same forwards and backwards, case-sensitive)

Ex: isPalindrome("racecar") returns true
Ex: isPalindrome("abcd") returns false */

var isPalindrome = function(str) {
    return str === str.split('').reverse().join('');
}

// TESTS
isPalindrome("racecar"); // finds a palindrome
isPalindrome("abcd"); // rejects non palindromes
isPalindrome("Abcba"); // is case sensitive

// Alternate Method
var isPalindromeAlt = function(str) {
  for (let i = 0; i < str.length / 2; i++) {
        let rightIndex = str.length - 1 - i;
        if(str[i] !== str[rightIndex]) {
            return false;
        }
    }
    return true;
}

// TESTS
isPalindromeAlt("racecar"); // finds a palindrome
isPalindromeAlt("abcd"); // rejects non palindromes
isPalindromeAlt("Abcba"); // is case sensitive
