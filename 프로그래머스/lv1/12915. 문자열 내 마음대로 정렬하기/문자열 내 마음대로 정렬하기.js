function solution(strings, n) {
    let lst = [];
    strings.forEach((a) => {
      lst.push([a[n], a]);
    });
    console.log(lst);
    let arr = new Array(...lst);
    let newarr = [];
    console.log(...lst);
    arr.sort();
    for (val of arr) {
      newarr.push(val[1]);
    }
    return newarr;
}