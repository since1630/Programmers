function solution(x) {
  let copy_x = x;
  let jarisuSum = 0;
  while (copy_x > 0) {
    let remain = copy_x % 10;
    jarisuSum += remain;
    copy_x = Math.floor(copy_x / 10);
  }
  console.log(jarisuSum);
  return x % jarisuSum === 0 ? true : false;
}