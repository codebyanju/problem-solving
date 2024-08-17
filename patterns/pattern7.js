// n=5
//     *
//    ***
//   *****
//  *******
// *********

class Solution {
  pattern7(n) {
    for (let i = 1; i <= n; i++) {
      let stars = "";

      // spaces
      for (let j = 1; j <= n - i; j++) {
        stars += " ";
        // console.log(spaces);
      }

      // stars
      for (let j = 1; j <= i; j++) {
        stars += "*";
        // console.log(stars);
      }

      // stars
      for (let j = 1; j <= i - 1; j++) {
        stars += "*";
        // console.log(spaces);
      }

      // spaces
      for (let j = 1; j <= n - i; j++) {
        stars += " ";
        // console.log(spaces);
      }

      console.log(stars);
    }
  }
}

const solution = new Solution();
solution.pattern7(5);
