class Solution {
  reverse(arr, n) {
    let revArray = new Array(n);
    for (let i = 0; i < arr.length; i++) {
      revArray[n - i - 1] = arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i] = revArray[i];
    }

    return arr;
  }
}

class Solution2 {
  reverse(arr, n) {
    let temp = 0;
    for (
      let left = 0, right = n - 1;
      left < Math.floor(arr.length / 2);
      left++, right--
    ) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }

    return arr;
  }
}

// using while loop
// while (p1 < p2) {
//     let tmp = arr[p1];
//     arr[p1] = arr[p2];
//     arr[p2] = tmp;
//     p1++;
//     p2--;
// }

const sol = new Solution();
const ans = sol.reverse([1, 2, 3, 4, 5, 6], 6);
console.log(ans);

const sol2 = new Solution2();
const ans2 = sol.reverse([1, 2, 3, 4, 5, 6], 6);
console.log(ans2);
