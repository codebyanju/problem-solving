class Solution {
  factorial(n) {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
      factorial = factorial * i;
    }

    return factorial;
  }
}

const sol = new Solution();
const ans = sol.factorial();
5;
console.log(ans);

// TC = O(N) -   Iterating once from 1 to N
// SC - O(1) - Using a couple of variables i.e., constant space.
