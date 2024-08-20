// n = 5
// A
// AB
// ABC
// ABCD
// ABCDE

class Solution {
  pattern14(n) {
    for (let i = 1; i <= n; i++) {
      let alphabet = "A";
      let row = "";

      for (let j = 1; j <= i; j++) {
        row = row + alphabet;
        alphabet = String.fromCharCode(alphabet.charCodeAt(0) + 1);
      }
      console.log(row);
    }
  }
}

const solution = new Solution();
solution.pattern14(5);
