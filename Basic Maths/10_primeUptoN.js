class Solution {
    isprime(n) {
        let count = 0;
        if (n <= 1) return false;

        for(let i = 1; i*i <= n; i++) {
            if( n % i == 0) {
                count++

                if(i !== n/i ) {
                    count++
                }
            }
        }
        return count == 2
    }

    primeUptoN(n) {
        let count = 0

        for(let i=2; i <= n; i++){
           if(this.isprime(i))
           count++
        }
        return count
    }
}

const sol = new Solution();
const ans = sol.isPrime(7);
console.log(ans);

// TC = O(N * sqrt(N)) =  N ** 3/2 - Checking all numbers from 1 to N for prime and checking if a number is prime or not will take sqrt(N)
// SC - O(1) - Using a couple of variables i.e., constant space.