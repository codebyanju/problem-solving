class Solution {
  arraySortedOrNot(arr, n) {
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
}

const sol = new Solution();
const ans = sol.arraySortedOrNot([11, 2, 3, 4], 4);
console.log(ans);

// TC = O(N) - Perform a single traversal through the array, making a constant-time comparison for each element.
// SC - O(1) - A constant amount of extra space for variables is used, independent of the input size.
