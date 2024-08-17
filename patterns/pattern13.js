// n = 5
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

class Solution {
  pattern13(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row = row + num + " ";
        num++;
      }
      console.log(row);
    }
  }
}

//   const solution = new Solution();
//   solution.pattern13(5);

class SolutionNode {
  pattern13(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        process.stdout.write(num + " ");
        num++;
      }
      console.log();
    }
  }
}

const solutionNode = new SolutionNode();
solutionNode.pattern13(5);
