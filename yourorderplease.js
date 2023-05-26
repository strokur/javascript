/*
 Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function order(words){
	var wordArray = words.split(' ');
	var newArray = [];
	for (var word=0;word<wordArray.length;word++) {
		wordArray[word] = wordArray[word].split('');
		for (var char=0;char<wordArray[word].length;char++) {
			if (typeof +wordArray[word][char] === 'number') {
				newArray[+wordArray[word][char]-1] = wordArray[word].join('');
			};
		};
	};
		return newArray.join(' ');
}


// TESTS
console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));



// Alterate Method
function orderAlt(words) {
  return words.split(' ').sort((a, b) => a.match(/\d+/) > b.match(/\d+/)).join(' ')
}

// TESTS
console.log(orderAlt("is2 Thi1s T4est 3a"));
console.log(orderAlt("4of Fo1r pe6ople g3ood th5e the2"));



const orderAlt2 = words => words.split(' ').sort((a, b) => /\d/.exec(a) - /\d/.exec(b)).join(' ');

// TESTS
console.log(orderAlt2("is2 Thi1s T4est 3a"));
console.log(orderAlt2("4of Fo1r pe6ople g3ood th5e the2"));
