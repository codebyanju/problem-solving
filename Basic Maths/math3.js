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

TC = O(log10(N));
SC - O(1);
