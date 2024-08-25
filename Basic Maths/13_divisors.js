class Solution {
  divisors(n) {
    let divisors = [];

    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
        divisors.push(i);
      }
    }
    return divisors.sort((a, b) => a - b);
  }
}
// Tc - O(N) – Iterating N times, and performing constant time operations in each pass.
// O(sqrt(N)) – A number N can have at max 2*sqrt(N) divisors, which are stored in the array.

class Solution2 {
  divisors(n) {
    let divisors = [];

    for (let i = 1; i * i <= n; i++) {
      if (n % i == 0) {
        divisors.push(i);

        if (i !== n / i) divisors.push(n / i);
      }
    }
    return divisors.sort((a, b) => a - b);
  }
}
// Tc - O(sqrt(N)) – Iterating sqrt(N) times, and performing constant time operations in each pass.
// O(sqrt(N)) – A number N can have at max 2*sqrt(N) divisors, which are stored in the array.

const sol = new Solution();
const ans = sol.divisors(16);
console.log(ans);

const sol2 = new Solution2();
const ans2 = sol2.divisors(20);
console.log(ans2);
