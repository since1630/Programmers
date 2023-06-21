function solution(d, budget) {
    let cnt = 0;
    d.sort((a,b) => a-b);
    d.forEach((a) => {
      if (budget >= a) {
        budget -= a;
        cnt++;
      }
    });
    return cnt;
}