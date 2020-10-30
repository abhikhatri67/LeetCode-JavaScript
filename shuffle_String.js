/**
Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string. 

Example 1:

Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
*/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  var len = indices.length;
  var str = new Array(len);

  for (let index = 0; index < len; index++) {
    str[indices[index]] = s[index];
  }

  return str.join("");
};

const s = "codeleet",
  indices = [4, 5, 6, 7, 0, 2, 1, 3];

restoreString(s, indices);
