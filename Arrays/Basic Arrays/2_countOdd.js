class Solution {
  countOdd(arr, n) {
    let oddCount = 0;

    for (let i = 0; i < n; i++) {
      if (arr[i] % 2 !== 0) {
        oddCount++;
      }
    }
    return oddCount;
  }
}

const sol = new Solution();
const ans = sol.countOdd([1, 2, 3, 4, 5], 5);
console.log(ans);
