function solution(strings, n) {
    let lst = [];
    strings.forEach((a) => {
      lst.push([a[n], a]);
    });
    let newarr = [];
    lst.sort();
    for (val of lst) {
      newarr.push(val[1]);
    }
    return newarr;
}
