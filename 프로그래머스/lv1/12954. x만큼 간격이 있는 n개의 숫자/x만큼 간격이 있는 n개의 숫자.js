function solution(x, n) {
    let lst = [];
    let st = x;
    for (let i = 0; i < n; i++) {
      lst.push(st);
      st += x;
    }
    return lst;
}