function solution(n) {
    var answer = [];
    return (n + "")
  .split("")
  .map((a) => +a)
  .reverse();
}