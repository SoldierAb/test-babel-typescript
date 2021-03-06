/*
1013. 将数组分成和相等的三个部分

给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

形式上，如果可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

示例 1：

输出：[0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
示例 2：

输入：[0,2,1,-6,6,7,9,-1,2,0,1]
输出：false
示例 3：

输入：[3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 

提示：

3 <= A.length <= 50000
-10^4 <= A[i] <= 10^4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
const canThreePartsEqualSum = function(A: number[]) {
  let sum = A.reduce((_sum, val) => _sum + val);
  if (sum % 3 !== 0) {
    return false;
  }

  // 能走到这，说明数组是有可能被划分的，得到平均值 avg。如果 3 都除不尽（比如总和是 20），那么永远不可能被划分成 3 份。
  // 那我们只需要遍历数组，进行累加，当和等于 avg 的时候，就记一组匹配成功。
  // 如果遍历结束后有 3 组匹配，则成功。如果有 N (N > 3) 组，那一定是 avg = 0 的情况，否则不满足条件 sum = avg * N。
  // 其实我们不用遍历完所有的数组，也不需要当出现第 3 组匹配时才算成功。只需要在数组遍历完之前（最后一个元素之前）匹配到 2 组，那么就可以视为成功。
  let count = 0;
  const avg = sum / 3;
  sum = 0;
  for (let i = 0; i < A.length - 1; i++) {
    sum += A[i];
    if (sum === avg) {
      sum = 0;
      if (++count === 2) {
        return true;
      }
    }
  }
  return false;
};

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]), true);
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]), false);
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]), true);
console.log(canThreePartsEqualSum([1, -1, 1, -1]), false);
console.log(canThreePartsEqualSum([10, -10, 10, -10, 10, -10, 10, -10]), true);

export { canThreePartsEqualSum };
