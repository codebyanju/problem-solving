// n=5
// ****
// ***
// **
// *

class Solution {
  pattern5(n) {
    // for (let i = n; i >= 1; i--) {
    //   let stars = "";

    //   for (let j = i; j >= 1; j--) {
    //     stars = stars + "*";
    //   }

    //   console.log(stars);
    // }

    for (let i = 1; i <= n; i++) {
      let stars = "";

      for (let j = 1; j <= n - i + 1; j++) {
        stars = stars + "*";
      }

      console.log(stars);
    }
  }
}

const solution = new Solution();
solution.pattern5(5);
