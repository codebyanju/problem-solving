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

// TC = O(log10(N)) -  In every iteration, N is divided by 10 (equivalent to the number of digits in N)
// SC - O(1) - Using a couple of variables i.e., constant space.
