class Solution {
    sum(arr,n) {
        let sum = 0;
        for(let i=0; i<n; i++) {
            sum = sum + arr[i]
        }
        return sum;
     
    }
}

const sol = new Solution();
const ans = sol.sum([1,2,3,4,5],5);
console.log(ans);