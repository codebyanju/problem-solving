class Solution {
  countOddDigit(n) {
    let count = 0;

    while (n > 0) {
      let lastDigit = n % 10;
      if (lastDigit % 2 !== 0) count++;
      n = Math.floor(n / 10);
    }
    return count;
  }
}

const sol = new Solution();
let ans = sol.countOddDigit(12345);
console.log(ans);

TC = O(log10(N));
SC - O(1);
