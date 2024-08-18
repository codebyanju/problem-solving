// n = 5
// *
// **
// ***
// ****
// *****

class Solution {
  pattern2(n) {
    for (let i = 1; i <= n; i++) {
      let stars = "";

      for (let j = 1; j <= i; j++) {
        stars = stars + "*";
      }

      console.log(stars);
    }
  }
}

const solution = new Solution();
solution.pattern2(5);
