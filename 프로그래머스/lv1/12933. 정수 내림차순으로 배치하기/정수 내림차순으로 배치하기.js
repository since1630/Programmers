function solution(n) {
    var answer = 0;
    return parseInt(
  (n + "")
    .split("")
    .sort((a, b) => b - a)
    .map((a) => +a)
    .join("")
);
}