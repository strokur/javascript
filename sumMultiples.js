/* sumMultiples
Given a number, count how many numbers below it are multiples of EITHER 3 OR 5
Then, sum those multiples together

Ex: sumMultiples(10) -> 3 + 5 + 6 + 9 -> returns 23
Ex: countOdd(5) -> 1, 3 -> returns 2 */

var sumMultiples = function(n) {
    var result = 0;
    while (n--) {
        if (n % 3 === 0 || n % 5 === 0) {
            result += n;
        };
    };
    return result;
}

// TEST
sumMultiples(10) // it works for a simple case
sumMultiples(200) // it works for a medium sized num
sumMultiples(2000) // it doesnt break for a large num
