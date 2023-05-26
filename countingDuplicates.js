/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive
alphabetic characters and numeric digits that occur more than once in
the input string. The input string can be assumed to contain only
alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function countDuplicates(str) {
  const charMap = {};
  const repeatedChars = [];
  const regex = /[a-z0-9]/i; // Match alphabetic characters and numeric digits

  // Loop through the input string and count occurrences of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (regex.test(char)) {
      if (charMap[char]) {
        charMap[char]++;
        if (!repeatedChars.includes(char)) {
          repeatedChars.push(char);
        }
      } else {
        charMap[char] = 1;
      }
    }
  }

  // Return the count of repeated characters
  return repeatedChars.length;
}

// TESTS
console.log(countDuplicates('abcde'));
console.log(countDuplicates('aabbcde'));
console.log(countDuplicates('aabBcde'));
console.log(countDuplicates('indivisibility'));
console.log(countDuplicates('Indivisibilities'));
console.log(countDuplicates('aA11'));
console.log(countDuplicates('ABBA'));


console.log(/([^])\1+/g)


// Alternate Method

function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

// TESTS
console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('indivisibility'));
console.log(duplicateCount('Indivisibilities'));
console.log(duplicateCount('aA11'));
console.log(duplicateCount('ABBA'));