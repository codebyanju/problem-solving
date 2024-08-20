// n = 4
// *      *
// **    **
// ***  ***
// ********
// ***  ***
// **    **
// *      *

class Solution {
  pattern20(n) {
    for (let i = 1; i <= n; i++) {
      let row = "";

      //stars
      for (let j = 1; j <= i; j++) {
        row += "*";
      }

      //spaces
      for (let j = 1; j <= 2 * n - 2 * i; j++) {
        row += " ";
      }

      //stars
      for (let j = 1; j <= i; j++) {
        row += "*";
      }
      console.log(row);
    }

    for (let i = 1; i <= n - 1; i++) {
      let row = "";

      //stars
      for (let j = 1; j <= n - i; j++) {
        row += "*";
      }

      //spaces
      for (let j = 1; j <= 2 * i; j++) {
        row += " ";
      }

      //stars
      for (let j = 1; j <= n - i; j++) {
        row += "*";
      }
      console.log(row);
    }
  }
}

const solution = new Solution();
solution.pattern20(4);
