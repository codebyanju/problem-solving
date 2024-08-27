// n = 4
// *      *
// **    **
// ***  ***
// ********
// ***  ***
// **    **
// *      *

class Solution {
  pattern20(n) {
    for (let i = 1; i <= n; i++) {
      let row = "";

      //stars
      for (let j = 1; j <= i; j++) {
        row += "*";
      }

      //spaces
      for (let j = 1; j <= 2 * n - 2 * i; j++) {
        row += " ";
      }

      //stars
      for (let j = 1; j <= i; j++) {
        row += "*";
      }
      console.log(row);
    }

    for (let i = 1; i <= n - 1; i++) {
      let row = "";

      //stars
      for (let j = 1; j <= n - i; j++) {
        row += "*";
      }

      //spaces
      for (let j = 1; j <= 2 * i; j++) {
        row += " ";
      }

      //stars
      for (let j = 1; j <= n - i; j++) {
        row += "*";
      }
      console.log(row);
    }
  }
}

class Solution2 {
  pattern20(n) {
    let pattern = "";

    // Upper part of the pattern
    for (let i = 1; i <= n; i++) {
      let stars = "*".repeat(i); // Increasing number of stars
      let spaces = " ".repeat((n - i) * 2); // Decreasing number of spaces
      pattern = stars + spaces + stars; // Form the line
      console.log(pattern); // Print each row
    }

    // Lower part of the pattern
    for (let i = n - 1; i >= 1; i--) {
      let stars = "*".repeat(i); // Decreasing number of stars
      let spaces = " ".repeat((n - i) * 2); // Increasing number of spaces
      pattern = stars + spaces + stars; // Form the line
      console.log(pattern); // Print each row
    }
  }
}

// Single loop
class Solution3 {
  pattern20(n) {
    for (let i = 1; i <= 2 * n - 1; i++) {
      let row = "";

      // Determine the number of stars for the current row
      let stars = i <= n ? i : 2 * n - i;
      // Calculate the number of spaces in the middle
      let spaces = 2 * (n - stars);

      // Construct the row with stars, spaces, and stars
      row += "*".repeat(stars);
      row += " ".repeat(spaces);
      row += "*".repeat(stars);

      console.log(row);
    }
  }
}

const solution = new Solution();
solution.pattern20(4);

const solution2 = new Solution2();
solution2.pattern20(4);

const solution3 = new Solution3();
solution3.pattern20(4);
