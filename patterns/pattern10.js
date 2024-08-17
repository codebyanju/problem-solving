// n= 5
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

class Solution {
  pattern10(n) {
    for (let i = 1; i <= n; i++) {
      let stars = "";

      // stars
      for (let j = 1; j <= i; j++) {
        stars += "*";
      }
      // spaces
      for (let j = 1; j <= n - i; j++) {
        stars += " ";
      }

      console.log(stars);
    }

    for (let i = 1; i <= n - 1; i++) {
      let stars = "";

      // stars
      for (let j = 1; j <= n - i; j++) {
        stars += "*";
      }

      console.log(stars);
    }
  }
}

const solution = new Solution();
solution.pattern10(5);
