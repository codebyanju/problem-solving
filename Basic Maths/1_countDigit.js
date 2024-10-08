class Solution {
  countDigit(n) {
    if (n == 0) return 1;

    let count = 0;

    while (n > 0) {
      n = Math.floor(n / 10);
      count++;
    }

    return count;
  }
}

class Solution2 {
  countDigit(n) {
    if (n == 0) return 1;

    let count = Math.floor(Math.log10(n) + 1);
    return count;
  }
}

const sol = new Solution();
let ans = sol.countDigit(123456);
console.log(ans);

const sol2 = new Solution2();
let ans2 = sol2.countDigit(123456);
console.log(ans2);

// TC = O(log10(N)) -  In every iteration, N is divided by 10 (equivalent to the number of digits in N)
// SC - O(1) - Using a couple of variables i.e., constant space.
