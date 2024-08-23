class Solution {
  reverseNumber(n) {
    let revNum = 0;

    while (n > 0) {
      let lastDigit = n % 10;

      revNum = revNum * 10 + lastDigit;
      n = Math.floor(n / 10);
    }
    return revNum;
  }
}

const sol = new Solution();
const ans = sol.reverseNumber(1234);
console.log(ans);

// TC = O(log10(N)) -  In every iteration, N is divided by 10 (equivalent to the number of digits in N)
// SC - O(1) - Using a couple of variables i.e., constant space.
