function solution(arr) {
    const min = Math.min(...arr);
    arr = arr.filter((a) => a !== min);
    if (!arr.length) arr.push(-1);
    return arr;
}