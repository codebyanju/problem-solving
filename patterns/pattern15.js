// n = 5
// ABCDE
// ABCD
// ABC
// AB
// A

class Solution {
  pattern15(n) {
    for (let i = 1; i <= n; i++) {
      let ch = "A";
      let row = "";

      for (let j = 1; j <= n - i + 1; j++) {
        row = row + ch;
        ch = String.fromCharCode(ch.charCodeAt(0) + 1);
      }
      console.log(row);
    }
  }
}

const solution = new Solution();
solution.pattern15(5);
