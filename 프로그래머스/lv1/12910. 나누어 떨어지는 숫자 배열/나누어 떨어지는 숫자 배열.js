function solution(arr, divisor) {
    let newarr = arr.filter((a) => a % divisor === 0).sort((a, b) => a - b);
    if (newarr.length === 0) newarr.push(-1)
    return newarr;
}