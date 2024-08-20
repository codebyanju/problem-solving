// n = 4
// ****
// *  *
// *  *
// ****

class Solution {
  pattern21(n) {
    for (let i = 1; i <= n; i++) {
      let row = "";

      if (i == 1 || i == n) {
        for (let j = 1; j <= n; j++) {
          row += "*";
        }
      } else {
        for (let j = 1; j <= n; j++) {
          if (j == 1 || j == n) {
            row += "*";
          } else {
            row += " ";
          }
        }
      }
      console.log(row);
    }
  }
}

class Solution1 {
  pattern21(n) {
    for (let i = 1; i <= n; i++) {
      let row = "";

      for (let j = 1; j <= n; j++) {
        if (i == 1 || i == n || j == 1 || j == n) {
          row += "*";
        } else {
          row += " ";
        }
      }
      console.log(row);
    }
  }
}

const solution = new Solution();
solution.pattern21(4);

const solution1 = new Solution1();
solution1.pattern21(4);
