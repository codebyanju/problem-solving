class Solution {
    LCM(n1, n2) {
        let max =  Math.max(n1, n2);

        while(true) {
            if(max % n1 == 0 && max % n2 == 0) {
                return max;
            }

            max++;
        }
    }
}

const sol = new Solution();
const ans = sol.LCM(3, 5);
console.log(ans);

// const sol2 = new Solution2();
// const ans2 = sol2.LCM(50, 10);
// console.log(ans2);

// TC = O(n1 * n2) - Checking all numbers from min(N1, N2) till 1 to N
// SC - O(1) - Using a couple of variables i.e., constant space.