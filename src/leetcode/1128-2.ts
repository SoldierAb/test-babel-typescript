/*
给你一个由一些多米诺骨牌组成的列表 dominoes。
如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。
形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且 b==c。
在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。

示例：
输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
输出：1

提示：
1 <= dominoes.length <= 40000
1 <= dominoes[i][j] <= 9

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} dominoes
 * @return {number}
 */

interface Dominoe {
  [index: number]: number;
}

const dominoes: Dominoe[] = [
  [1, 2],
  [2, 1],
  [1, 2],
  [3, 4],
  [2, 1],
  [6, 5],
  [5, 6],
];

const numEquivDominoPairs = function(dominoes: Dominoe[]): number {
  let count = 0;
  for (let i = 0; i < dominoes.length; i++) {
    for (let j = i + 1; j < dominoes.length; j++) {
      const a = dominoes[i];
      const b = dominoes[j];
      if ((a[0] === b[0] && a[1] === b[1]) || (a[0] === b[1] && a[1] === b[0])) {
        count++;
      }
    }
  }
  return count;
};

console.log(numEquivDominoPairs(dominoes));

export default { numEquivDominoPairs };
