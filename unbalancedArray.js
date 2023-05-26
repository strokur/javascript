/* unbalancedArray
Given an array of positive and negative integers,
find the number that does not have an opposite

Ex: unbalancedArray([-1, 4, 1, 5, -4]) -> 5
Ex: unbalancedArray([12, 1, 21, -21, -1]) -> 12] */

var unbalancedArray = function(nums) {
    return nums.reduce((acc, cur) => acc+cur);
}

// TEST
unbalancedArray([-1,4,1,5,-4]) // it should work with a 5 num example
unbalancedArray([12,1,14,-21,-1,22,21,-14,-22]) // it should work with an 9 num example
