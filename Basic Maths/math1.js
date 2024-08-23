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

const solution = new Solution()
console.log(solution.countDigit(123456))