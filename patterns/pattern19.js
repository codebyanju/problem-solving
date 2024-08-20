// n = 4
// ********
// ***  ***
// **    **
// *      *
// *      *
// **    **
// ***  ***
// ********

class Solution {
  pattern19(n) {
    // Upper Part
    for (let i = 1; i <= n; i++) {
      let row = "";

      // stars - start from back
      for (let j = n - i + 1; j >= 1; j--) {
        row += "*";
      }

      //spaces
      for (let j = 1; j <= 2 * i - 2; j++) {
        row += " ";
      }

      // stars
      for (let j = n - i + 1; j >= 1; j--) {
        row += "*";
      }
      console.log(row);
    }

    // Lower Part
    for (let i = 1; i <= n; i++) {
      let row = "";

      // stars
      for (let j = 1; j <= i; j++) {
        row += "*";
      }

      //spaces
      for (let j = 1; j <= 2 * n - 2 * i; j++) {
        row += " ";
      }

      // stars
      for (let j = 1; j <= i; j++) {
        row += "*";
      }
      console.log(row);
    }
  }
}

//another approach
class Solution1 {
  pattern19(n) {
    // Upper Part
    for (let i = 1; i <= n; i++) {
      let row = "";

      // Stars - start from 1
      for (let j = 1; j <= n - i + 1; j++) {
        row += "*";
      }

      // Spaces
      for (let j = 1; j <= 2 * (i - 1); j++) {
        row += " ";
      }

      // Stars
      for (let j = 1; j <= n - i + 1; j++) {
        row += "*";
      }

      console.log(row);
    }

    // Lower Part
    for (let i = 1; i <= n; i++) {
      let row = "";

      // Stars
      for (let j = 1; j <= i; j++) {
        row += "*";
      }

      // Spaces
      for (let j = 1; j <= 2 * (n - i); j++) {
        row += " ";
      }

      // Stars
      for (let j = 1; j <= i; j++) {
        row += "*";
      }

      console.log(row);
    }
  }
}

const solution = new Solution();
solution.pattern19(5);

const solution1 = new Solution1();
solution1.pattern19(4);
