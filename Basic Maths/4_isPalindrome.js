class Solution {
    isPalindrome(n) {

        let copy = n
        let revNum = 0

        while(n > 0){
            let lastDigit = n % 10
            revNum = (revNum * 10) + lastDigit
            n = Math.floor(n/10)
        }

        return copy == revNum

    }
}

const sol = new Solution();
const ans = sol.isPalindrome(121);
console.log(ans);

// TC = O(log10(N)) -  In every iteration, N is divided by 10 (equivalent to the number of digits in N)
// SC - O(1) - Using a couple of variables i.e., constant space.
