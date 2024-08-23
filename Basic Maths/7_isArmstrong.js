class Solution {
  countDigit(n) {
    let count = Math.floor(Math.log10(n) + 1);
    return count;
  }

  isArmstrong(n) {
    let count = this.countDigit(n);

    let copy = n;
    let sum = 0;

    while (n > 0) {
      let lastDigit = n % 10;

      sum = sum + lastDigit ** count;

      n = Math.floor(n / 10);
    }

    return sum == copy;
  }
}

const sol = new Solution();
const ans = sol.isArmstrong(12);
console.log(ans);

// TC = O(N) -   Iterating once from 1 to N
// SC - O(1) - Using a couple of variables i.e., constant space.
