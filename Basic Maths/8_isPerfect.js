class Solution {
  isPerfect(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
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
      // starts from 2 and hence we have avoided 1 * 36 case
      if (n % i == 0) {
        sum = sum + i;

        if (i !== n / i) {
          // so we dont need to check for n !== n/i here since our loop starts from 2
          // 6 !== 36/6 ---> avoid 6 * 6
          sum = sum + n / i;
        }
      }
    }
    return sum == n;
  }
}

class Solution3 {
  isPerfect(n) {
    if (n <= 1) return false;

    let sum = 0;
    let copy = n;

    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        sum = sum + i;

        // (n/i == n) ---> avoiding the num itself as divisor 1 * 36 = 36
        // (i !== n/i ---> avoiding same divisor 6 * 6 = 36

        if (i !== n / i && n !== n / i) {
          sum = sum + Math.floor(n / i);
        }
      }
    }
    return sum == copy;
  }
}

const sol = new Solution();
const ans = sol.isPerfect(28);
console.log(ans);

const sol2 = new Solution2();
const ans2 = sol2.isPerfect(28);
console.log(ans2);

const sol3 = new Solution3();
const ans3 = sol3.isPerfect(28);
console.log(ans3);

// TC = O(sqrt(N)) - Running a loop from 1 to square root of N.
// SC - O(1) - Using a couple of variables i.e., constant space.
