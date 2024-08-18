class Solution {
  pattern19(n) {
    for (let i = 1; i <= 2 * n; i++) {
      let row = "";

      // stars
      for (let j = n - i + 1; j >= 1; j--) {
        row += "*";
      }

      //spaces
      for (let j = 1; j <= 2 * i - 2; j++) {
        row += " ";
      }

      // stars
      for (let j = n - i + 1; j >= 1; j--) {
        row += "*";
      }
      console.log(row);
    }

    for (let i = 1; i <= n; i++) {
      let row = "";

      // stars
      for (let j = 1; j <= i; j++) {
        row += "*";
      }

      //spaces
      for (let j = 1; j <= 2 * n - 2 * i; j++) {
        row += " ";
      }

      // stars
      for (let j = 1; j <= i; j++) {
        row += "*";
      }
      console.log(row);
    }
  }
}

const solution = new Solution();
solution.pattern19(4);
