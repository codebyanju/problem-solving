class Solution {
  isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i * i <= n; i++) {
      if (n % i == 0) {
        return false;
      }
    }

    return true;
  }
}

class Solution2 {
  isPrime(n) {
    let count = 1;
    for (let i = 1; i * i <= n; i++) {
      if (n % i == 0) {
        count++;
      }
    }
    return count == 2;
  }
}

class Solution3 {
  isPrime(n) {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
      if (n % i == 0) {
        count++;
        if (i !== n / i) count++;
      }
    }
    return count == 2;
  }
}

const sol = new Solution();
const ans = sol.isPrime(7);
console.log(ans);

const sol2 = new Solution2();
const ans2 = sol2.isPrime(7);
console.log(ans2);

// TC = O(sqrt(N)) - Running a loop from 1 to square root of N.
// SC - O(1) - Using a couple of variables i.e., constant space.
