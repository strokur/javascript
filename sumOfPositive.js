/* sumOfPositive
Given an array of numbers, add together the positive nums & return the sum
If no numbers are positive, return 0

Ex. sumOfPositive([1, -2, 3, 4]), returns 8 */

var sumOfPositive = function(nums) {
   var result=0;
   for (num of nums) {
    if (num > 0) {
      result += num;
    };
   };
   return result;
}

// TESTS
sumOfPositive([1,-2,3,4]);
sumOfPositive([-2,-5,-10,-1]);
sumOfPositive([4,40,-40,-4]);
