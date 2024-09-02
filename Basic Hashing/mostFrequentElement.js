class Solution {
  /* Function to get the highest 
    occurring element in array nums */
  mostFrequentElement(nums) {
    // Variable to store the size of array
    let n = nums.length;

    // Variable to store maximum frequency
    let maxFreq = 0;

    /* Variable to store element 
        with maximum frequency */
    let maxEle = 0;

    // Visited array
    let visited = new Array(n).fill(false);

    // First loop
    for (let i = 0; i < n; i++) {
      // Skip second loop if already visited
      if (visited[i]) continue;

      /* Variable to store frequency
            of current element */
      let freq = 0;

      // Second loop
      for (let j = i; j < n; j++) {
        if (nums[i] == nums[j]) {
          freq++;
          visited[j] = true;
        }
      }

      /* Update variables if new element having 
            highest frequency is found */
      if (freq > maxFreq) {
        maxFreq = freq;
        maxEle = nums[i];
      } else if (freq == maxFreq) {
        maxEle = Math.min(maxEle, nums[i]);
      }
    }

    // Return the result
    console.log(nums, visited);
    return maxEle;
  }
}

class Solution2 {
  mostFrequentElement(nums) {
    // Variable to store the size of array
    let n = nums.length;

    // Variable to store maximum frequency
    let maxFreq = 0;

    // Variable to store element with maximum frequency
    let maxEle = 0;

    // HashMap to store frequencies of elements
    let freqMap = new Map();

    // Step 1: Populate the HashMap with element frequencies
    for (let i = 0; i < n; i++) {
      let element = nums[i];

      // Update the frequency of the element in the map
      if (freqMap.has(element)) {
        freqMap.set(element, freqMap.get(element) + 1);
      } else {
        freqMap.set(element, 1);
      }
    }

    // Step 2: Find the element with the maximum frequency
    for (let [element, frequency] of freqMap.entries()) {
      if (frequency > maxFreq) {
        maxFreq = frequency;
        maxEle = element;
      } else if (frequency === maxFreq) {
        maxEle = Math.min(maxEle, element);
      }
    }

    // Return the element with the highest frequency
    return maxEle;
  }
}

let nums = [4, 4, 5, 5, 6, 5];

let sol = new Solution();
let ans = sol.mostFrequentElement(nums);
console.log(ans);

let sol2 = new Solution2();
let ans2 = sol2.mostFrequentElement(nums);
console.log(ans2);

// Time Complexity: O(N) (where N is the size of the array given) –
// Using a single loop, performing insertion, updation opertion on HashMap takes O(1) TC resulting in O(N) TC.
// Iterating on HashMap, will take O(N) in the worst-case

// Space Complexity: O(N) – In the worst-case scenario, the HashMap will store all the elements in the array when array elements are unique.
