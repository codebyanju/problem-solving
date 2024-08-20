// n = 5
// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321

class Solution {
  pattern12(n) {
    for (let i = 1; i <= n; i++) {
      let row = "";

      // nums
      for (let j = 1; j <= i; j++) {
        row += j;
      }

      // spaces
      for (let j = 1; j <= 2 * n - 2 * i; j++) {
        row += " ";
      }

      // nums
      for (let j = i; j >= 1; j--) {
        row += j;
      }
      console.log(row);
    }
  }
}

const solution = new Solution();
solution.pattern12(5);
