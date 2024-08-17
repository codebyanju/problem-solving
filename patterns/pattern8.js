// n = 4
// *******
//  *****
//   ***
//    *
class Solution {
  pattern8(n) {
    for (let i = 1; i <= n; i++) {
      let stars = "";

      // spaces
      for (let j = 1; j <= i - 1; j++) {
        stars += " ";
      }

      // stars
      for (let j = 1; j <= 2 * n - 2 * i + 1; j++) {
        stars += "*";
      }

      // spaces
      for (let j = 1; j <= i - 1; j++) {
        stars += " ";
      }

      console.log(stars);
    }
  }
}

const solution = new Solution();
solution.pattern8(5);
