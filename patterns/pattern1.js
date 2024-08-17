// n = 4
// *  *  *  *
// *  *  *  *
// *  *  *  *
// *  *  *  *

class Solution {
  pattern1(n) {
    for (let i = 1; i <= n; i++) {
      let stars = "";
      for (let j = 1; j <= n; j++) {
        stars = stars + "*";
      }

      console.log(stars);
    }
  }
}

const solution = new Solution();
solution.pattern1(4);

class SolutionNode {
  pattern1(n) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        process.stdout.write("*");
      }

      console.log();
    }
  }
}

const solutionNode = new SolutionNode();
solutionNode.pattern1(4);
