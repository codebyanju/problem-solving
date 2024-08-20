//n = 5
// A
// ABA
// ABCBA
// ABCDCBA
// ABCDEDCBA

class Solution {
  pattern17(n) {
    for (let i = 1; i <= n; i++) {
      let row = "";

      // spaces
      for (let j = 1; j <= n - i; j++) {
        row = row + " ";
      }

      //chars
      let ch = "A";
      for (let j = 1; j <= 2 * i - 1; j++) {
        row = row + ch;

        if (j < i) {
          //keep this in mind - j<=i will print ABC for i=2, j=2 which is not expected behaviour. instead we want AB and decrement = ABA
          ch = String.fromCharCode(ch.charCodeAt(0) + 1);
        } else ch = String.fromCharCode(ch.charCodeAt(0) - 1);
      }
      console.log(row);
    }
  }
}

const solution = new Solution();
solution.pattern17(5);
