// n = 4
// *  *  *  *
// *  *  *  *
// *  *  *  *
// *  *  *  *

class Solution {
  pattern1(n) {
    for (let i = 1; i <= n; i++) {
      let stars = "";
      for (let j = 1; j <= n; j++) {
        stars = stars + "*";
      }

      console.log(stars);
    }
  }
}

const solution = new Solution();
solution.pattern1(4);
