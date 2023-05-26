/* countOdd
Given a number, count how many odd numbers are below that number



Ex: countOdd(5) -> 1, 3 -> returns 2

Ex: countOdd(10) -> 1, 3, 5, 7, 9 -> returns 5 */

var countOdd = function(n) {
    return Math.floor(n/2);
}

// TEST
countOdd(5) // It counts up to, but not including an odd num
countOdd(10) // It also works for an even num
countOdd(1) // It is zero unless at least 2


// Aternate method
var countOddAlt = function(n) {
    let counter = 0;
    while(n--) { // 4 3 2 1 0
        if (n % 2 === 1) {
            counter++;
        }
    }
    return counter;
}

// TEST
countOddAlt(5) // It counts up to, but not including an odd num
countOddAlt(10) // It also works for an even num
countOddAlt(1) // It is zero unless at least 2
