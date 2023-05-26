/* multiplyNumbers
Given 2 numbers, multiply them WITHOUT THE * OPERATOR!

ex multiplyNumbers(2, 5) returns 10 */

var multiplyNumbers = function(num1, num2) {
    var result = 0;
    while (num1--) {
       result+=num2; 
    };
    return result;
}

// TESTS

multiplyNumbers(1,0) // Successfully multiplies with zero
multiplyNumbers(5,5) // It multiples 2 whole numbers
multiplyNumbers(100,500) // Still works with larger nums

