class Solution {
    isPrime(n) {

        if (n <= 1) return false;
        
        for(let i = 2 ; i*i <= n; i++ ){
            if(n % i == 0 ) {
                return false
            }
        }

        return true
    }
}


const sol = new Solution();
const ans = sol.isPrime(7);
console.log(ans);

// TC = O(sqrt(N)) - Running a loop from 1 to square root of N.
// SC - O(1) - Using a couple of variables i.e., constant space.