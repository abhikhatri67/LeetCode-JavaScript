/** 
1486. XOR Operation in an Array

Given an integer n and an integer start.

Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums. 

Example 1:

Input: n = 5, start = 0
Output: 8
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.

*/

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  var nums = new Array(n);

  for (let i = 0; i < nums.length; i++) {
    nums[i] = start + 2 * i;
  }

  var bitwiseXOR = nums.reduce((acc, cur) => acc ^ cur);
  return bitwiseXOR;
};

xorOperation(10, 5);
