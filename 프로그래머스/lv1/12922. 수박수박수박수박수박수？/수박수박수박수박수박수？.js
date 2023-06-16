function solution(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
      i % 2 === 0 ? (str += "수") : (str += "박");
    }
    return str;
}