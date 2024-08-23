class Solution {
  largestDigit(n) {
    let largeNum = 0;

    while (n > 0) {
      let lastDigit = n % 10;

      if (lastDigit > largeNum) {
        largeNum = lastDigit;
      }

      n = Math.floor(n / 10);
    }
    return largeNum;
  }
}

const sol = new Solution();
const ans = sol.largestDigit(878943);
console.log(ans);

// TC = O(log10(N)) -  In every iteration, N is divided by 10 (equivalent to the number of digits in N)
// SC - O(1) - Using a couple of variables i.e., constant space.
