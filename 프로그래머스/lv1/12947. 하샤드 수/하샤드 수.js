function solution(x) {
  let copy_x = x;
  let jarisuSum = 0;
  while (copy_x > 0) {
    jarisuSum += copy_x % 10;
    copy_x = Math.floor(copy_x / 10);
  }
  return x % jarisuSum === 0 ? true : false;
}