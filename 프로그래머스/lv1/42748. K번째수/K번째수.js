function solution(array, commands) {
    let arr = [];
let copy;
for (let i = 0; i < commands.length; i++) {
  copy = JSON.parse(JSON.stringify(array));
  let start = commands[i][0] - 1;
  let end = commands[i][1] - commands[i][0] + 1;

  let slice = copy.splice(start, end);
//   console.log(slice);
  slice.sort((a, b) => a - b);
//   console.log(slice);
  let result = slice[commands[i][2] - 1];
  arr.push(result);
}
    return arr;
}