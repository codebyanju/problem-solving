// n = 5
// 1
// 12
// 123
// 1234
// 12345

class Solution {
  pattern3(n) {
    for (let i = 1; i <= n; i++) {
      let stars = "";

      for (let j = 1; j <= i; j++) {
        stars = stars + j;
      }

      console.log(stars);
    }
  }
}

const solution = new Solution();
solution.pattern3(5);
