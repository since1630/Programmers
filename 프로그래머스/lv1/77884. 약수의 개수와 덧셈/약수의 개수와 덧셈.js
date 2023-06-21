function solution(left, right) {
    function test(num) {
  let cnt = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) cnt++;
  }
  console.log(cnt);
  return cnt % 2 === 0 ? num : num * -1;
}
let sum = 0;
for (let i = left; i <= right; i++) {
  sum += test(i);
}
    return sum;
}