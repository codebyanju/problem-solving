// n = 4
// D
// C D
// B C D
// A B C D

class Solution {
  pattern18(n) {
    for (let i = 1; i <= n; i++) {
      let ch = String.fromCharCode("A".charCodeAt(0) + n - i);
      let row = "";

      for (let j = 1; j <= i; j++) {
        row = row + ch + " ";
        ch = String.fromCharCode(ch.charCodeAt(0) + 1);
      }
      console.log(row);
    }
  }
}

const solution = new Solution();
solution.pattern18(4);
