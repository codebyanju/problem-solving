class Solution {
  isPerfect(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      if (n % i == 0) {
        sum = sum + i;
      }
    }
    return sum == n;
  }
}

class Solution2 {
  isPerfect(n) {
    if (n <= 1) return false;

    let sum = 1;

    for (let i = 2; i * i <= n; i++) {
      if (n % i == 0) {
        sum = sum + i;

        if (i !== n / i) {
          // 6 !== 36/6 ---> avoid 6 * 6
          sum = sum + n / i;
        }
      }
    }
    return sum == n;
  }
}

const sol = new Solution();
const ans = sol.isPerfect(6);
console.log(ans);

const sol2 = new Solution2();
const ans2 = sol2.isPerfect(28);
console.log(ans2);

// TC = O(sqrt(N)) - Running a loop from 1 to square root of N.
// SC - O(1) - Using a couple of variables i.e., constant space.
