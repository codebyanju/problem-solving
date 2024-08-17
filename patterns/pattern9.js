// n = 4
//    *
//   ***
//  *****
// *******
// *******
//  *****
//   ***
//    *

class Solution {
  pattern9(n) {
    this.erectPyramid(n);
    this.invertedPyramid(n);
  }

  erectPyramid(n) {
    for (let i = 1; i <= n; i++) {
      let stars = "";

      // spaces
      for (let j = 1; j <= n - i; j++) {
        stars += " ";
      }

      // stars
      for (let j = 1; j <= 2 * i - 1; j++) {
        stars += "*";
      }

      // spaces
      for (let j = 1; j <= n - i; j++) {
        stars += " ";
      }

      console.log(stars);
    }
  }

  invertedPyramid(n) {
    for (let i = 1; i <= n; i++) {
      let stars = "";

      // spaces
      for (let j = 1; j <= i - 1; j++) {
        stars += " ";
      }

      // stars
      for (let j = 1; j <= 2 * n - 2 * i + 1; j++) {
        stars += "*";
      }

      // spaces
      for (let j = 1; j <= i - 1; j++) {
        stars += " ";
      }

      console.log(stars);
    }
  }
}

// class Solution {
//   pattern8(n) {
//     for (let i = 1; i <= n; i++) {
//       let stars = "";

//       // spaces
//       for (let j = 1; j <= n - i; j++) {
//         stars += " ";
//       }

//       // stars
//       for (let j = 1; j <= 2 * i - 1; j++) {
//         stars += "*";
//       }

//       // spaces
//       for (let j = 1; j <= n - i; j++) {
//         stars += " ";
//       }

//       console.log(stars);
//     }
//     for (let i = 1; i <= n; i++) {
//       let stars = "";

//       // spaces
//       for (let j = 1; j <= i - 1; j++) {
//         stars += " ";
//       }

//       // stars
//       for (let j = 1; j <= 2 * n - 2 * i + 1; j++) {
//         stars += "*";
//       }

//       // spaces
//       for (let j = 1; j <= i - 1; j++) {
//         stars += " ";
//       }

//       console.log(stars);
//     }
//   }
// }

const solution = new Solution();
solution.pattern9(4);
