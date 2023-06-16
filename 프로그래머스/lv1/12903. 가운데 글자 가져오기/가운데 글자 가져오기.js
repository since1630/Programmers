function solution(s) {
    let answer = 0
    if (s.length % 2 === 0) {
      let idx = s.length / 2;
      // console.log(idx);
      answer = s[idx - 1] + s[idx];
    } else {
      let idx = Math.floor(s.length / 2);
      // console.log(idx);
      answer = s[idx];
    }
    return answer;
}