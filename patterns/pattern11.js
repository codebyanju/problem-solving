// n = 4
// 1
// 0 1
// 1 0 1
// 0 1 0 1

class Solution {
  pattern11(n) {
    let start = 1;
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0) start = 0;
      else start = 1;

      let row = "";

      for (let j = 1; j <= i; j++) {
        row += start + " ";
        start = 1 - start;
      }
      console.log(row);
    }
  }
}

const solution = new Solution();
solution.pattern11(4);
