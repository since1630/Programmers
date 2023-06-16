function solution(a, b) {
    const obj2 = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const daylst = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let sum = b;
    for (let i = 0; i < a; i++) {
  sum += daylst[i];
}
    const idx = sum % 7;

    return idx === 0 ? obj2[obj2.length - 1] : obj2[idx-1]
}