// Brute
class Solution {
  GCD(n1, n2) {
    let gcd = 1;
    for (let i = 1; i <= Math.min(n1, n2); i++) {
      if (n1 % i == 0 && n2 % i == 0) {
        gcd = i;
      }
    }
    return gcd;
  }
}
// TC = O(Min(n1,n2))) - Checking all numbers from 1 to min(N1, N2)
// SC - O(1) - Using a couple of variables i.e., constant space.

// Better
class Solution2 {
  GCD(n1, n2) {
    for (let i = Math.min(n1, n2); i > 1; i--) {
      if (n1 % i == 0 && n2 % i == 0) {
        return i;
      }
    }
    return 1;
  }
}
// TC = O(Min(n1,n2)) - Checking all numbers from min(N1, N2) till 1 to N
// SC - O(1) - Using a couple of variables i.e., constant space.

// Optimal
class Solution3 {
  GCD(n1, n2) {
    while (n1 > 0 && n2 > 0) {
      if (n1 > n2) {
        n1 = n1 % n2; // n1 =  n1 - n2 ----> too many operations..this is not optimised so do modulo
      } else {
        n2 = n2 % n1; // n2 = n2 - n1
      }
    }
    return n1 == 0 ? n2 : n1;
  }
}

// TC - O(log(min(N1, N2))) – where N1 and N2 are given numbers. Because in every iteration, the algorithm is dividing larger number with the smaller number resulting in time complexity.(approx.)
// SC - O(1) - Using a couple of variables i.e., constant space.


const sol = new Solution();
const ans = sol.GCD(3, 6);
console.log(ans);

const sol2 = new Solution2();
const ans2 = sol2.GCD(50, 10);
console.log(ans2);

const sol3 = new Solution3();
const ans3 = sol3.GCD(50, 10);
console.log(ans3);