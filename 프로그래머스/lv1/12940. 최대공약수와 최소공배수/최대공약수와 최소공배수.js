function solution(n, m) {
    let x = 0;
    let y = 0;
    if (m > n) {
      x = m;
      y = n;
    } else {
      x = n;
      y = m;
    }
    function gcd(x, y) {
      if (x % y === 0) return y;
      else return gcd(y, x % y);
    }
    let g = gcd(m, n);
    let l = (m * n) / g;
    return [g, l];
}