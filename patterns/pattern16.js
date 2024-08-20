// n = 5
// A
// BB
// CCC
// DDDD
// EEEEE

class Solution {
  pattern16(n) {
    let ch = "A";
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += ch;
      }
      console.log(row);
      ch = String.fromCharCode(ch.charCodeAt(0) + 1);
    }
  }
}

const solution = new Solution();
solution.pattern16(5);
