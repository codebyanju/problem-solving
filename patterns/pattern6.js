// 1234
// 123
// 12
// 1

class Solution {
  pattern6(n) {
    for (let i = 1; i <= n; i++) {
      let nums = "";

      for (let j = 1; j <= n - i + 1; j++) {
        nums = nums + j;
      }
      console.log(nums);
    }
  }
}

const solution = new Solution();
solution.pattern6(4);
