function solution(answers) {
    let one_cnt = 0;
let two_cnt = 0;
let three_cnt = 0;

const one = [1, 2, 3, 4, 5];
const two = [2, 1, 2, 3, 2, 4, 2, 5];
const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
// for (let i = 0; i < one.length; i++) {
//   if (one[i] === answers[i]) {
//     one_cnt++;
//   }
// }

// for (let i = 0; i < two.length; i++) {
//   if (two[i] === answers[i]) {
//     two_cnt++;
//   }
// }
// for (let i = 0; i < three.length; i++) {
//   if (three[i] === answers[i]) {
//     three_cnt++;
//   }
// }
one_cnt = answers.filter((a, i) => a === one[i % one.length]).length;
two_cnt = answers.filter((a, i) => a === two[i % two.length]).length;
three_cnt = answers.filter((a, i) => a === three[i % three.length]).length;
// console.log(one_cnt, two_cnt, three_cnt);
let arr = [];
arr.push(one_cnt, two_cnt, three_cnt);

let max = Math.max(...arr);
// // let idx = arr.indexOf(max);
// arr = arr.filter((a) => {
//   return a === max;
// });
let newarr = [];
for (let i = 0; i < arr.length; i++) {
  if (max === arr[i]) newarr.push(i + 1);
}
    return newarr;
}