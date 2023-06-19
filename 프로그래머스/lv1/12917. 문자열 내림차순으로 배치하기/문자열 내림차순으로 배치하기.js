function solution(s) {
    let upper = [];
let lower = [];

for (let i = s.length - 1; i >= 0; i--) {
  if (s[i] === s[i].toUpperCase()) {
    upper.push(s[i]);
  } else {
    lower.push(s[i]);
  }
}
    return lower.sort().reverse().concat(upper.sort().reverse()).join("")
}